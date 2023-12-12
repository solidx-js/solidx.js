import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';
import { EntityDebugController, EventDispatchController, NodeStateController, TransitionController } from './controller';
import { Decorator } from './Decorator';
import { IDataType, parseDurationString } from '../util';
import { property, state } from 'lit/decorators';
import { IAniItem, PickStringKey } from '../type';
import compact from 'lodash/compact';
import type { XRKeyFrames } from './XRKeyFrames';

export class XRElement<T = any> extends LitElement {
  static requiredAttrs: string[] = [];

  readonly logger = DefaultBizLogger.extend(this.tagName.toLowerCase());

  @state()
  entity: T | null = null;

  readonly _transitionCtrl: TransitionController;

  // 基础属性
  @Decorator.property('Object')
  debug?: Record<string, string>;

  @Decorator.property('Boolean')
  disabled?: boolean;

  @property({ converter: { fromAttribute: (value: string) => parseTransitions(value) } })
  transition: { property: string; duration: number; timingFunction: string; delay: number }[] = [];

  @property({ converter: { fromAttribute: (value: string) => parseAnimations(value) } })
  animation: IAniItem[] = [];

  // 动画数据表
  private _aniTable: Record<
    string,
    {
      cursor: number;
      dType: IDataType;
      frames: { percentage: number; value: string }[];
    }
  > = {};

  private _transitionLerpData: { [key: string]: any } = {}; // 过渡期间的插值数据
  private _disposes: (() => void)[] = [];

  // 求解后的属性
  readonly evaluatedProps = new Proxy<PickStringKey<this>>({} as any, {
    get: (_stash, _p) => {
      const p = _p as string;
      return this._transitionLerpData[p] ?? (this as any)[p];
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

    this._transitionCtrl = new TransitionController(this as any, this._transitionLerpData, () => this.requestUpdate('_transitionLerpData'));
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

  /** 触发过渡 */
  private _triggerTransition(changed: Map<string, any>) {
    for (const [property, oldValue] of changed) {
      const endValue = (this as any)[property];

      const dType = this._Cls.elementProperties.get(property)?.dType;
      if (!dType) continue; // 不支持的属性

      const transDef = this.transition.find(t => t.property === property);
      if (!transDef) {
        this._transitionCtrl.remove(property);
        continue;
      }

      // 过渡属性
      if (typeof oldValue === 'undefined') {
        const item = this._transitionCtrl.get(property);
        if (item) item.endValue = endValue;
      } else {
        const startTime = performance.now() + transDef.delay;
        this._transitionCtrl.set({
          ...transDef,
          startValue: oldValue,
          endValue,
          startTime,
          dType,
          _resolve: () => this.emit('transitionend', { property }),
        });

        this._transitionCtrl._handleTick(); // 立即执行一次, 使 host 的过渡值立即生效

        this.logger.debug('[%s] start transition: %s -> %s, %sms', property, oldValue, endValue, transDef.duration);
      }
    }
  }

  /** 触发动画 */
  private _triggerAnimation(changed: Map<string, any>): void {
    const list = this.animation;

    if (list.length === 0) return;

    const rootEle = this.closest('xr-engine');
    if (!rootEle) return;

    const keyElements = compact(list.map(item => rootEle.querySelector<XRKeyFrames>(`xr-keyframes#${item.name}`)));
    if (keyElements.length !== list.length) return;

    for (let i = 0; i < list.length; i++) {
      const aniDef = list[i];
      const keyDatas = keyElements[i].entity || [];

      // 填充 table
      for (const { percentage, data } of keyDatas) {
        for (const [property, value] of Object.entries(data)) {
          const dType = this._Cls.elementProperties.get(property)?.dType;
          if (!dType) continue;

          if (!this._aniTable[property]) this._aniTable[property] = { cursor: 0, dType, frames: [] };
          this._aniTable[property].frames.push({ percentage, value });
        }
      }
    }
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    // 把 changed 复制到 this.changed
    this.changed.clear();
    for (const [key, value] of changed) this.changed.set(key, value);

    this._triggerTransition(changed); // 触发过渡
    this._triggerAnimation(changed); // 触发动画
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
