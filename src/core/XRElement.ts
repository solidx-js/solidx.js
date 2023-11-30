import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';

export class XRElement extends LitElement {
  static requiredAttrs: string[] = [];
  static eleName: string = 'XRElement2';

  readonly logger = DefaultBizLogger.extend(this._Cls.name);

  private get _Cls() {
    return this.constructor as any as typeof XRElement;
  }

  protected createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();

    // 检查必须的属性
    if (this._Cls.requiredAttrs.length > 0) {
      const missingAttrs = this._Cls.requiredAttrs.filter(attr => this.getAttribute(attr) === null);
      if (missingAttrs.length > 0) throw new Error(`[${this.tagName}] Missing required attributes: ${missingAttrs.join(', ')}`);
    }

    this.logger.debug('init');
    this.init();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.logger.debug('remove');
    this.remove();
  }

  /** @override 第一次被连接到文档 DOM */
  init() {}

  /** @override 从文档 DOM 中删除 */
  remove() {}
}
