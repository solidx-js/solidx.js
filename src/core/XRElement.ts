import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';
import { EntityDebugController, EventDispatchController, NodeStateController, TransitionController } from './controller';
import { Decorator } from './Decorator';
import { parseDurationString } from '../util';
import { property, state } from 'lit/decorators';
import { IAniItem, PickStringKey, StringKeys } from '../type';
import { AnimationController } from './controller';

export class XRElement<T = any> extends LitElement {
  static requiredAttrs: string[] = [];

  readonly logger = DefaultBizLogger.extend(this.tagName.toLowerCase());

  @state()
  entity: T | null = null;

  readonly _transitionCtrl: TransitionController;
  private _animationCtrl: AnimationController;
  private _disposes: (() => void)[] = [];

  // 基础属性
  @Decorator.property_Object()
  debug?: Record<string, string>;

  @Decorator.property_Boolean('disabled')
  disabled?: boolean;

  @property({ converter: { fromAttribute: (value: string) => parseTransitions(value) } })
  transition: { property: string; duration: number; timingFunction: string; delay: number }[] = [];

  @property({ converter: { fromAttribute: (value: string) => parseAnimations(value) } })
  animation: IAniItem[] = [];

  private _transitionLerpData: { [key: string]: any } = {}; // 过渡期间的插值数据

  // 求解后的属性
  readonly evaluatedProps = new Proxy<PickStringKey<this>>(this._transitionLerpData as any, {
    get: (_stash, p) => {
      if (Object.prototype.hasOwnProperty.call(_stash, p)) return (_stash as any)[p];
      return this[p as StringKeys<this>];
    },
    set(_stash, p) {
      throw new Error(`Can't set property "${p as any}" of evaluatedProps`);
    },
  }); // 过渡期间的插值数据

  readonly changed = new Map<string, any>();

  constructor() {
    super();

    // 这里初始化一些基础控制器
    new NodeStateController(this as any);
    new EventDispatchController(this as any);
    new EntityDebugController(this as any);

    this._transitionCtrl = new TransitionController(
      this as any,
      this._transitionLerpData,
      () => this.requestUpdate('_transitionLerpData'),
      property => this.emit('transitionend', { property })
    );

    this._animationCtrl = new AnimationController(this as any);
  }

  get _Cls() {
    return this.constructor as any as typeof XRElement;
  }

  protected createRenderRoot() {
    return this;
  }

  emit<T extends keyof HTMLElementEventMap>(evType: T, detail: HTMLElementEventMap[T]['detail']) {
    this.dispatchEvent(new CustomEvent(evType, { detail, bubbles: true }));
  }

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

    this._transitionCtrl.trigger(changed); // 触发过渡
    this._animationCtrl.trigger(changed); // 触发动画
  }

  protected shouldUpdate(changed: Map<string, any>): boolean {
    return super.shouldUpdate(changed);
  }

  protected updated(_changed: Map<string, any>): void {}

  disconnectedCallback() {
    super.disconnectedCallback();

    this.logger.debug('remove');

    for (const dispose of this._disposes) dispose();
    this._disposes = [];

    this.disconnected();
  }

  /** @override 第一次被连接到文档 DOM */
  connected() {}

  /** @override 从文档 DOM 中删除 */
  disconnected() {}

  render(): any {
    return null;
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
