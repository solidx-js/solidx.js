import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';
import { EntityInspectController, EventDispatchController, NodeStateController, TickController, TweenController } from './controller';
import { Decorator } from './Decorator';
import { ElementUtil, IDataTypeMap, Schema, parseDurationString, randomID } from '../util';
import { state } from 'lit/decorators.js';
import { IAniItem, PickStringKey } from '../type';

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

  @Decorator.property('Boolean', 'disabled', false)
  disabled = false;

  @Decorator.property('TransitionList', 'transition', null)
  transition: IDataTypeMap['TransitionList'] | null = null;

  @Decorator.property('String', 'class', null)
  class: string | null = null;

  @Decorator.property('Boolean', 'mouse-over', false)
  mouseOver = false;

  private _styles: CSSStyleDeclaration | null = null;
  private _tweenCtrl: TweenController;
  private _tweenLerpData: { [key: string]: any } = {}; // 过渡期间的插值数据
  private _styleRefData: Record<string, { raw: string; data: any }> = {}; // class 引入数据

  private _disposes: (() => void)[] = [];

  // 求解后的属性
  readonly evaluated = new Proxy<PickStringKey<this>>({} as any, {
    get: (_stash, _p) => {
      const p = _p as string;

      // 顺序: 过渡 -> class ref -> 本身的属性
      return this._tweenLerpData[p] ?? this._styleRefData[p]?.data ?? (this as any)[p];
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
  }); // 过渡期间的插值数据

  /** @internal */
  readonly changed = new Map<string, any>();

  constructor() {
    super();

    // 这里初始化一些基础控制器
    new NodeStateController(this);
    new EventDispatchController(this);
    new EntityInspectController(this);

    new TickController(this, () => {
      this.reloadAttrFromComputedStyles();
    });

    this._tweenCtrl = new TweenController(
      this as any,
      this._tweenLerpData,
      p => this.requestUpdate(p, undefined, { hasChanged: () => true } as any), // 强制标记为 changed
      () => this.requestUpdate()
    );
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

  private _setStyleRefData(data: Map<string, string>) {
    // 收集所有 key
    const _allKeys = TmpObject.set1 as Set<string>;
    _allKeys.clear();

    for (const key of Object.keys(this._styleRefData)) _allKeys.add(key);
    for (const key of data.keys()) _allKeys.add(key);

    for (const key of _allKeys) {
      const _oldData = this._styleRefData[key];
      const _newDataStr = data.get(key);

      // 移除旧的
      if (typeof _oldData !== 'undefined' && typeof _newDataStr === 'undefined') {
        delete this._styleRefData[key];
        this.requestUpdate(key, _oldData.data, { hasChanged: () => true } as any); // 强制标记为 changed
      }

      // 添加新的 or 替换旧的
      if (typeof _newDataStr !== 'undefined') {
        if (_oldData && _oldData.raw === _newDataStr) continue; // 值没有变化

        const _def = this._Cls.elementProperties.get(key);
        if (!_def) continue; // 不支持的属性

        const _newData = this.convertPropertyValue(key, _newDataStr);
        if (_oldData && Schema.isEqual(_def.dType, _oldData?.data, _newData)) continue; // 值没有变化(第二次判断)

        this._styleRefData[key] = { raw: _newDataStr, data: _newData };
        this.requestUpdate(key, _oldData, { hasChanged: () => true } as any); // 强制标记为 changed
      }
    }
  }

  // 从 style 中读取属性
  reloadAttrFromComputedStyles() {
    if (!this._styles) return;

    const data: Map<string, string> = TmpObject.map1; // 使用临时对象, 用于减轻 GC 压力
    data.clear();

    for (const [key, def] of this._Cls.elementProperties) {
      if (typeof key !== 'string') continue; // 只支持 string 类型

      const _propName = def.attribute ?? key;
      let value = this._styles.getPropertyValue('--' + _propName).trim();

      // 去掉前后的引号
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
      if (!value) continue; // 没有值

      data.set(key, value);
    }

    if (data.size === 0) return;

    this._setStyleRefData(data);
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
    this.reloadAttrFromComputedStyles();

    this.connected();
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    // 把 changed 复制到 this.changed
    this.changed.clear();

    for (const [key, value] of changed) this.changed.set(key, value);

    // 触发补间
    for (const [property, oldValue] of changed) {
      if (!this._Cls.elementProperties.has(property)) continue; // 不支持的属性
      this._tweenCtrl.triggerChange(property, (this as any)[property], oldValue);
    }
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
    this._tweenLerpData = {};

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

function parseAnimations(animation: string) {
  const list: IAniItem[] = [];
  const parts = animation.split(',').map(v => v.trim());

  for (const part of parts) {
    const segs = part.split(/\s+/g);

    const name = segs.pop() as string;
    if (!name) continue;

    const [duration = '0s', ...args] = segs;

    list.push({
      name,
      duration: parseDurationString(duration),
      timingFunction: '',
      delay: 0,
      iterationCount: 1,
      direction: 'normal',
      fillMode: 'none',
      playState: 'running',
    });
  }

  return list;
}
