import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';
import { EntityInspectController, EventDispatchController, NodeStateController, TickController } from './controller';
import { Decorator } from './Decorator';
import { ElementUtil, Schema, ValueWrapper, randomID } from '../util';
import { state } from 'lit/decorators.js';
import { PickStringKey } from '../type';
import { Compatibility } from '../Compatibility';

const ComputedStylesFlagSym = Symbol('ComputedStylesFlagSym');

export class XRThinElement extends LitElement {
  /** @internal */
  readonly changed = new Map<string, any>();

  /** @internal */
  get _Cls() {
    return this.constructor as any as typeof XRElement;
  }

  get displayText() {
    return ElementUtil.displayText(this);
  }

  // 求解后的属性
  readonly evaluated = new Proxy<PickStringKey<this>>({} as any, {
    get: (_stash, _p) => {
      const p = _p as string;

      // 开发模式下进行检查
      if (process.env.NODE_ENV === 'development') {
        const _def = this._Cls.elementProperties.get(p);
        if (!_def) throw new Error(`Property "${p}" is not defined`);
        if (_def.state) throw new Error(`Property "${p}" is a state property, not allowed to access`);
      }

      return this._getEvaluatedValue(p);
    },
    set(_stash, p) {
      throw new Error(`Can't set property "${p as any}" of evaluatedProps`);
    },
    ownKeys: () => {
      const keys = [...this._Cls.elementProperties.keys()].filter(k => typeof k === 'string') as string[];
      return keys;
    },
    getOwnPropertyDescriptor: (_stash, p) => {
      const key = p as string;
      if (this._Cls.elementProperties.has(key)) return { enumerable: true, configurable: true }; // 令 Object.keys() 可以枚举到
      return undefined;
    },
  });

  /** @internal */
  protected _getEvaluatedValue(p: string) {
    return (this as any)[p];
  }

  protected createRenderRoot() {
    return this;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    // 把 changed 复制到 this.changed
    this.changed.clear();
    for (const [key, value] of changed) this.changed.set(key, value);
  }

  /** @internal */
  emit<T extends keyof HTMLElementEventMap>(evType: T, detail: HTMLElementEventMap[T]['detail']) {
    this.dispatchEvent(new CustomEvent(evType, { detail, bubbles: true }));
  }

  /** @internal */
  render(): any {
    return null;
  }

  toAttributeObject() {
    return ElementUtil.toAttributeObject(this);
  }

  /** @override */
  onAncestorCoordinate() {
    // 遍历 children 的 onAncestorCoordinate 方法
    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];

      if (child instanceof XRThinElement) {
        child.onAncestorCoordinate();
      }
    }
  }
}

export class XRElement<T = any> extends XRThinElement {
  readonly logger = DefaultBizLogger.extend(this.tagName.toLowerCase());

  @state()
  entity: T | null = null;

  // 基础属性
  @Decorator.property('Object', 'inspect', null)
  inspect: Record<string, string> | null = null;

  @Decorator.property('Boolean', 'disabled', null)
  disabled: boolean | null = null;

  protected _styled: CSSStyleDeclaration | null = null;
  private _styleRefData: Record<string, { raw: string; data: any }> = {}; // class 引入数据

  private _disposes: (() => void)[] = [];

  constructor() {
    super();

    // 这里初始化一些基础控制器
    new NodeStateController(this);
    new EventDispatchController(this);
    new EntityInspectController(this);

    new TickController(this, () => {
      this.checkComputedStyles();
    });
  }

  checkComputedStyles(_syncProperty?: boolean) {
    if (!this._styled) return;

    for (const [property, _def] of this._Cls.elementProperties) {
      if (typeof property !== 'string' || _def.state) continue; // 只支持 string 类型
      if (_syncProperty) this._syncPropertyToStyle(property);

      const oldValue = (this.evaluated as any)[property];
      const isChanged = this.reloadAttrFromComputedStyles(property);

      if (isChanged) {
        // 用 ValueWrapper 包装一下, willUpdate 会检查这个对象
        this.requestUpdate(property, new ValueWrapper(ComputedStylesFlagSym, oldValue), { hasChanged: () => true } as any); // 强制标记为 changed
      }
    }
  }

  reloadAttrFromComputedStyles(property: string) {
    if (!this._styled) return;

    const def = this._Cls.elementProperties.get(property);
    if (!def || def.state) return;

    const _cssProp = def.attribute ?? property;
    const _css = this._styled.getPropertyValue('---' + _cssProp).trim();

    // 和缓存字符串对比，值没有变化，跳过
    if (this._styleRefData[property]?.raw === _css) return;

    const newData = Schema.fromCssLiteral(def.dType, _css);

    // 删除
    if (newData === null && this._styleRefData[property]) {
      delete this._styleRefData[property];
      return true;
    }

    // 新增
    if (newData !== null && !this._styleRefData[property]) {
      this._styleRefData[property] = { raw: _css, data: newData };
      return true;
    }

    // 更新
    if (newData !== null && this._styleRefData[property] && !Schema.isEqual(def.dType, this._styleRefData[property].data, newData)) {
      this._styleRefData[property] = { raw: _css, data: newData };
      return true;
    }
  }

  convertPropertyValue(key: string, value: string) {
    const _def = this._Cls.elementProperties.get(key) as any;
    return _def.converter ? _def.converter.fromAttribute(value) : _def.type ? _def.type(value) : value;
  }

  /** @internal */
  connectedCallback() {
    super.connectedCallback();

    // 检查默认值
    for (const [key, def] of this._Cls.elementProperties) {
      if (typeof (this as any)[key] === 'undefined') this.logger.warn(`Missing default value for property: %s`, key);
    }

    this.logger.debug('connected');

    if (!this.id) this.id = '_' + randomID(); // 默认 id

    // 没有 CSS.registerProperty 的情况下，要手动设置一下默认值
    if (Compatibility.disableCssProperty) {
      for (const [key, def] of this._Cls.elementProperties) {
        if (!def.state && (this as any)[key] === null && def.initValue !== null) (this as any)[key] = def.initValue;
      }
    } else {
      this._styled = getComputedStyle(this);
      this.checkComputedStyles(true);
    }

    this.connected();
  }

  protected _getEvaluatedValue(p: string) {
    // 兼容没有 CSS.registerProperty 的浏览器
    if (Compatibility.disableCssProperty) return (this as any)[p];

    return this._styleRefData[p]?.data ?? null;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    for (const [property, _old] of Array.from(changed.entries())) {
      // 如果是 ValueWrapper, 说明是 computed style 触发的更新，不用同步到 inline style
      if (_old instanceof ValueWrapper && _old.type === ComputedStylesFlagSym) {
        changed.set(property, _old.valueOf());
      }

      // 如果不是 ValueWrapper, 说明是属性触发的更新 -> 同步到 inline style 重新计算
      else {
        this._syncPropertyToStyle(property, true);
      }
    }

    // 把 changed 复制到 this.changed
    this.changed.clear();
    for (const [key, value] of changed) this.changed.set(key, value);

    // 设置 entity reflect attribute
    if (changed.has('entity')) {
      if (this.entity) {
        if ((this.entity as any).ID) this.setAttribute('entity-id', (this.entity as any).ID);
        else this.removeAttribute('entity-id');

        if ((this.entity as any).getClassName) this.setAttribute('entity-class', (this.entity as any).getClassName());
        else this.removeAttribute('entity-class');
      } else {
        this.removeAttribute('entity-id');
        this.removeAttribute('entity-class');
      }
    }
  }

  private _syncPropertyToStyle(property: string, reload?: boolean) {
    if (!this._styled) return;

    const _def = this._Cls.elementProperties.get(property);
    if (!_def || _def.state) return; // 不支持的属性

    const _p = '---' + (_def.attribute || property);
    const _v = (this as any)[property] === null ? '' : Schema.toCssLiteral(_def.dType, (this as any)[property]);

    if (_v === '') this.style.removeProperty(_p);
    else this.style.setProperty(_p, _v);

    if (reload) {
      this.reloadAttrFromComputedStyles(property);
    }
  }

  protected shouldUpdate(changed: Map<string, any>): boolean {
    return super.shouldUpdate(changed);
  }

  protected updated(_changed: Map<string, any>): void {
    super.updated(_changed);
    this.emit('change', { changed: _changed });
  }

  /** @internal */
  disconnectedCallback() {
    super.disconnectedCallback();

    this.logger.debug('remove');

    this._styled = null;

    for (const dispose of this._disposes) dispose();
    this._disposes = [];

    this.disconnected();
  }

  /**
   * @internal
   * @override 第一次被连接到文档 DOM */
  connected() {}

  /**
   * @internal
   * @override 从文档 DOM 中删除 */
  disconnected() {}
}
