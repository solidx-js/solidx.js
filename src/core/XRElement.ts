import { difference, range } from 'lodash';
import { DefaultBizLogger } from '../BizLogger';
import { Component } from '../components';
import { Schema } from '../util';
import { ComponentRegistry } from '../registry';

export class XRElement extends HTMLElement {
  static requiredAttrs: string[] = [];

  readonly logger = DefaultBizLogger.extend(this.name);
  readonly components: Record<string, Component> = {};

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

  private _flushComponents() {
    const existKeys = Object.keys(this.components);
    const newKeys = range(this.attributes.length).map(i => this.attributes[i].name);

    const removedKeys = difference(existKeys, newKeys);
    const addedKeys = difference(newKeys, existKeys);
    const updatedKeys = difference(newKeys, addedKeys);

    // 1. Remove components that are no longer in the entity
    for (const key of removedKeys) {
      this.components[key].remove();
    }

    const _getValue = (Comp: typeof Component, key: string) => {
      return Schema.parse(Comp.schema, this.getAttribute(key) || Comp.schema.default);
    };

    // 2. Add new components
    for (const key of addedKeys) {
      const Comp = ComponentRegistry.Instance.get(key);
      if (!Comp) continue;

      const comp = new Comp(this, key);
      this.components[key] = comp;
      comp.init();

      const value = _getValue(Comp, key);
      comp.flush(value);
    }

    // 3. Update existing components
    for (const key of updatedKeys) {
      const Comp = ComponentRegistry.Instance.get(key);
      if (!Comp) continue;

      const value = _getValue(Comp, key);
      this.components[key].flush(value);
    }
  }

  get childrenList() {
    return Array.prototype.slice.call(this.children, 0);
  }

  get name() {
    return 'XRElement';
  }

  emit(name: string, detail: any) {
    this.dispatchEvent(new CustomEvent(name, { bubbles: true, detail, composed: true }));
  }

  private get _Cls() {
    return this.constructor as any as typeof XRElement;
  }

  protected connectedCallback() {
    // 检查必须的属性
    if (this._Cls.requiredAttrs.length > 0) {
      const missingAttrs = this._Cls.requiredAttrs.filter(attr => this.getAttribute(attr) === null);
      if (missingAttrs.length > 0) throw new Error(`[${this.tagName}] Missing required attributes: ${missingAttrs.join(', ')}`);
    }

    this.init();

    this._setupMutationObserver();
    this._flushComponents();
  }

  protected disconnectedCallback() {
    this.remove();
  }

  protected attributeChangedCallback(attr: string, oldVal: string, newVal: string) {
    this.update(attr, oldVal, newVal);
    this._flushComponents();
  }

  /** @override 第一次被连接到文档 DOM */
  init() {
    this.logger.debug('init');
  }

  /** @override 从文档 DOM 中删除 */
  remove() {
    this.logger.debug('remove');
  }

  /** @override 监听属性变化 */
  update(attr: string | null, oldVal: string | null, newVal: string | null) {}
}
