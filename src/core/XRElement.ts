import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';
import { Animation } from '@babylonjs/core/Animations/animation';
import { EventDispatchController } from './controller';

export class XRElement<T = any> extends LitElement {
  static requiredAttrs: string[] = [];
  static events: string[] = [];

  readonly logger = DefaultBizLogger.extend(this.tagName.toLowerCase());

  animations: Animation[] = [];
  entity: T | null = null;

  private _disposes: (() => void)[] = [];

  constructor() {
    super();
    new EventDispatchController(this);
  }

  get _Cls() {
    return this.constructor as any as typeof XRElement;
  }

  protected createRenderRoot() {
    return this;
  }

  emit(evType: string, detail?: any) {
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

  protected willUpdate(changed: Map<string, any>): void {}

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
