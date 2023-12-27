import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';
import { EntityInspectController, EventDispatchController, NodeStateController, TickController } from './controller';
import { Decorator } from './Decorator';
import { ElementUtil, Schema, randomID } from '../util';
import { state } from 'lit/decorators.js';
import { PickStringKey } from '../type';

// 临时对象, 用于减轻 GC 压力
const TmpObject = {
  map1: new Map(),
  set1: new Set(),
};

export class XRElement<T = any> extends LitElement {
  static requiredAttrs: string[] = [];

  readonly logger = DefaultBizLogger.extend(this.tagName.toLowerCase());

  @state()
  entity: T | null = null;

  // 基础属性
  @Decorator.property('Object', 'inspect', null)
  inspect: Record<string, string> | null = null;

  @Decorator.property('Boolean', 'disabled', null)
  disabled: boolean | null = null;

  private _styles: CSSStyleDeclaration | null = null;
  private _styleRefData: Record<string, { raw: string; data: any }> = {}; // class 引入数据

  private _disposes: (() => void)[] = [];

  // 求解后的属性
  readonly evaluated = new Proxy<PickStringKey<this>>({} as any, {
    get: (_stash, _p) => {
      const p = _p as string;
      return this._styleRefData[p]?.data ?? null;
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
  readonly changed = new Map<string, any>();

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

  /** @internal */
  get _Cls() {
    return this.constructor as any as typeof XRElement;
  }

  get displayText() {
    return ElementUtil.displayText(this);
  }

  protected createRenderRoot() {
    return this;
  }

  checkComputedStyles() {
    if (!this._styles) return;

    for (const [property] of this._Cls.elementProperties) {
      if (typeof property !== 'string') continue; // 只支持 string 类型

      const oldValue = (this.evaluated as any)[property];
      const isChanged = this.reloadAttrFromComputedStyles(property);

      if (isChanged) {
        this.requestUpdate(`__computed_styles_${property}`, oldValue, { hasChanged: () => true } as any); // 强制标记为 changed
      }
    }
  }

  reloadAttrFromComputedStyles(property: string) {
    if (!this._styles) return;

    const def = this._Cls.elementProperties.get(property);
    if (!def || def.state) return;

    const _cssProp = def.attribute ?? property;
    const _css = this._styles.getPropertyValue('---' + _cssProp).trim();

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
  emit<T extends keyof HTMLElementEventMap>(evType: T, detail: HTMLElementEventMap[T]['detail']) {
    this.dispatchEvent(new CustomEvent(evType, { detail, bubbles: true }));
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

    // 检查必须的属性
    if (this._Cls.requiredAttrs.length > 0) {
      const missingAttrs = this._Cls.requiredAttrs.filter(attr => this.getAttribute(attr) === null);
      if (missingAttrs.length > 0) throw new Error(`[${this.tagName}] Missing required attributes: ${missingAttrs.join(', ')}`);
    }

    this._styles = getComputedStyle(this);
    this.checkComputedStyles();

    this.connected();
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    for (const [property, _old] of Array.from(changed.entries())) {
      if (property.startsWith('__computed_styles_')) {
        // 转换脏标记
        changed.delete(property);
        changed.set(property.replace(/^__computed_styles_/, ''), _old);
      } else {
        // 写入 inline style, 并且更新 evaluated
        this._syncPropertyToStyle(property);
      }
    }

    // 把 changed 复制到 this.changed
    this.changed.clear();
    for (const [key, value] of changed) this.changed.set(key, value);

    // console.log('@@@', '111 ->', this.displayText);
  }

  private _syncPropertyToStyle(property: string) {
    const _def = this._Cls.elementProperties.get(property);
    if (!_def || _def.state) return; // 不支持的属性

    const _p = '---' + (_def.attribute || property);
    const _v = (this as any)[property] === null ? '' : Schema.toCssLiteral(_def.dType, (this as any)[property]);

    if (_v === '') this.style.removeProperty(_p);
    else this.style.setProperty(_p, _v);

    this.reloadAttrFromComputedStyles(property);
  }

  protected shouldUpdate(changed: Map<string, any>): boolean {
    return super.shouldUpdate(changed);
  }

  protected updated(_changed: Map<string, any>): void {}

  /** @internal */
  disconnectedCallback() {
    super.disconnectedCallback();

    this.logger.debug('remove');

    this._styles = null;

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

  /** @internal */
  render(): any {
    return null;
  }

  toAttributeObject() {
    return ElementUtil.toAttributeObject(this);
  }
}
