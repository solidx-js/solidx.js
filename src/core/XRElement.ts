import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';
import { ComponentLike } from './ComponentLike';
import { ComponentRegistry } from '../registry';
import { Animation } from '@babylonjs/core/Animations/animation';

export class XRElement<T = any> extends LitElement {
  static requiredAttrs: string[] = [];

  readonly logger = DefaultBizLogger.extend(this.tagName);

  components: { [key: string]: ComponentLike } = {};
  animations: Animation[] = [];
  entity: T | null = null;

  private _disposes: (() => void)[] = [];

  get _Cls() {
    return this.constructor as any as typeof XRElement;
  }

  protected createRenderRoot() {
    return this;
  }

  private _flushComponents(changed: Map<string, any>) {
    for (const [inKey, lastValue] of changed.entries()) {
      const inValue = (this as any)[inKey];

      const Comp = ComponentRegistry.Instance.get(inKey);
      if (!Comp) continue; // 不存在的组件, 忽略

      // 新增
      if (typeof lastValue === 'undefined' && typeof inValue !== 'undefined') {
        this.logger.debug('add %s', inKey);

        const comp = new Comp(this as any, inKey);
        this.components[inKey] = comp;
        comp.init();
        comp.flush(inValue);
      }

      // 删除
      if (typeof lastValue !== 'undefined' && typeof inValue === 'undefined') {
        this.logger.debug('remove %s', inKey);
        this.components[inKey].remove();
        delete this.components[inKey];
      }

      const comp = this.components[inKey];
      if (!comp) {
        this.logger.warn('component %s not found', inKey);
        continue;
      }

      // 更新
      if (typeof lastValue !== 'undefined' && typeof inValue !== 'undefined') {
        this.logger.debug('update %s', inKey);
        this.components[inKey].flush(inValue);
      }
    }
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
    this._flushComponents(changed); // 更新组件
  }

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
