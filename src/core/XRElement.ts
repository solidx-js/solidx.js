import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';
import {
  EntityInspectController,
  EventDispatchController,
  NodeStateController,
  TransformLikeController,
  TweenController,
} from './controller';
import { Decorator } from './Decorator';
import { ElementUtil, parseDurationString, typedClone } from '../util';
import { property, state } from 'lit/decorators.js';
import { IAniItem, PickStringKey } from '../type';
import difference from 'lodash/difference';

export class XRElement<T = any> extends LitElement {
  static requiredAttrs: string[] = [];

  readonly logger = DefaultBizLogger.extend(this.tagName.toLowerCase());

  @state()
  entity: T | null = null;

  // 基础属性
  @Decorator.property('Object')
  inspect?: Record<string, string>;

  @Decorator.property('Boolean')
  disabled?: boolean;

  @property({ converter: { fromAttribute: (value: string) => parseTransitions(value) } })
  transition: { property: string; duration: number; timingFunction: string; delay: number }[] = [];

  @property({ converter: { fromAttribute: (value: string) => parseAnimations(value) } })
  animation: IAniItem[] = [];

  @Decorator.property('String')
  class?: string;

  @Decorator.property('Boolean', 'mouse-over', false)
  mouseOver!: boolean;

  private _tweenCtrl: TweenController;
  private _tweenLerpData: { [key: string]: any } = {}; // 过渡期间的插值数据
  private _classRefData: Record<string, any> = {}; // class 引入数据

  private _disposes: (() => void)[] = [];

  // 求解后的属性
  readonly evaluated = new Proxy<PickStringKey<this>>({} as any, {
    get: (_stash, _p) => {
      const p = _p as string;

      // 顺序: 过渡 -> class ref -> 本身的属性
      return this._tweenLerpData[p] ?? this._classRefData[p] ?? (this as any)[p];
    },
    set(_stash, p) {
      throw new Error(`Can't set property "${p as any}" of evaluatedProps`);
    },
  }); // 过渡期间的插值数据

  /** @internal */
  readonly changed = new Map<string, any>();

  constructor() {
    super();

    // 设置默认值
    for (const [key, def] of this._Cls.elementProperties) {
      if (def.initValue !== undefined) (this as any)[key] = typedClone(def.initValue);
    }

    // 这里初始化一些基础控制器
    new NodeStateController(this);
    new EventDispatchController(this);
    new EntityInspectController(this);
    new TransformLikeController(this);

    this._tweenCtrl = new TweenController(
      this as any,
      this._tweenLerpData,
      p => this.requestUpdate(p, undefined, { hasChanged: () => true }), // 强制标记为 changed
      () => this.requestUpdate()
    );
  }

  /** @internal */
  get _Cls() {
    return this.constructor as any as typeof XRElement;
  }

  protected createRenderRoot() {
    return this;
  }

  /** @internal */
  _setClassRefData(data: Record<string, string>) {
    const _lastData = { ...this._classRefData };
    const _removeKeys = difference(Object.keys(_lastData), Object.keys(data));

    // 移除不存在的属性
    for (const key of _removeKeys) {
      delete this._classRefData[key];
      this.requestUpdate(key, _lastData[key], { hasChanged: () => true }); // 强制标记为 changed
    }

    for (const [key, value0] of Object.entries(data)) {
      const _def = this._Cls.elementProperties.get(key) as any;
      if (!_def) continue; // 不支持的属性

      const value = _def.converter ? _def.converter.fromAttribute(value0) : _def.type ? _def.type(value0) : value0;
      this._classRefData[key] = value;

      this.requestUpdate(key, _lastData[key], { hasChanged: () => true }); // 强制标记为 changed
    }
  }

  /** @internal */
  emit<T extends keyof HTMLElementEventMap>(evType: T, detail: HTMLElementEventMap[T]['detail']) {
    this.dispatchEvent(new CustomEvent(evType, { detail, bubbles: true }));
  }

  /** @internal */
  connectedCallback() {
    super.connectedCallback();

    this.logger.debug('connected');

    // 检查必须的属性
    if (this._Cls.requiredAttrs.length > 0) {
      const missingAttrs = this._Cls.requiredAttrs.filter(attr => this.getAttribute(attr) === null);
      if (missingAttrs.length > 0) throw new Error(`[${this.tagName}] Missing required attributes: ${missingAttrs.join(', ')}`);
    }

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

function parseTransitions(attr: string) {
  const list: { property: string; duration: number; timingFunction: string; delay: number }[] = [];

  const parts = attr.split(',').map(v => v.trim());

  for (const part of parts) {
    const [property, duration = '0s', timingFunction = '', delay = '0s'] = part.split(/\s+/g);
    list.push({ property, duration: parseDurationString(duration), timingFunction, delay: parseFloat(delay) });
  }

  return list;
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
