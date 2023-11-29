import { DefaultBizLogger } from '../BizLogger';
import { XRScene } from './XRScene';

export class XRNode extends HTMLElement {
  static requiredAttrs: string[] = [];

  readonly logger = DefaultBizLogger.extend(this.name);

  /**
   * With custom elements V1 attributeChangedCallback only fires
   * for attributes defined statically via observedAttributes.
   * One can assign any arbitrary components to an A-Frame entity
   * hence we can't know the list of attributes beforehand.
   * This function setup a mutation observer to keep track of the entity attribute changes
   * in the DOM and update components accordingly.
   */
  private _setupMutationObserver() {
    const observer = new MutationObserver(mutationList => {
      for (let i = 0; i < mutationList.length; i++) {
        if (mutationList[i].type === 'attributes') {
          const attributeName = mutationList[i].attributeName;
          if (!attributeName) continue;

          const newValue = window.HTMLElement.prototype.getAttribute.call(this, attributeName);
          const oldValue = mutationList[i].oldValue;
          this.update(attributeName, oldValue, newValue);
        }
      }
    });
    observer.observe(this, { attributes: true, attributeOldValue: true });
  }

  getChildren() {
    return Array.prototype.slice.call(this.children, 0);
  }

  emit(name: string, detail: any) {
    this.dispatchEvent(new CustomEvent(name, { bubbles: true, detail, composed: true }));
  }

  private get _Cls() {
    return this.constructor as any as typeof XRNode;
  }

  /** @override */
  get name() {
    return 'XRNode';
  }

  get sceneEle() {
    const ele = this.closest<XRScene>('xr-scene');
    if (!ele) throw new Error('Entity: xr-scene not found');
    return ele;
  }

  get system() {
    return this.sceneEle._system;
  }

  protected connectedCallback() {
    this.init();
  }

  protected disconnectedCallback() {
    this.remove();
  }

  protected attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
    this.update(attr, oldVal, newVal);
  }

  /** @override 第一次被连接到文档 DOM */
  init() {
    this.logger.debug('init');

    // 检查必须的属性
    if (this._Cls.requiredAttrs.length > 0) {
      const missingAttrs = this._Cls.requiredAttrs.filter(attr => this.getAttribute(attr) === null);
      if (missingAttrs.length > 0) throw new Error(`Missing required attributes: ${missingAttrs.join(', ')}`);
    }

    this._setupMutationObserver();
  }

  /** @override 从文档 DOM 中删除 */
  remove() {
    this.logger.debug('remove');
  }

  /** @override 监听属性变化 */
  update(attr: string | null, oldVal: string | null, newVal: string | null) {}
}
