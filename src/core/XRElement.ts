import { DefaultBizLogger } from '../BizLogger';
import { LitElement } from 'lit';
import { ComponentLike } from './ComponentLike';
import { difference, range } from 'lodash';
import type { Component } from '../components';
import { ComponentRegistry } from '../registry';
import { Schema } from '../util';

export class XRElement extends LitElement {
  static requiredAttrs: string[] = [];

  readonly logger = DefaultBizLogger.extend(this.tagName);
  components: { [key: string]: ComponentLike } = {};

  private get _Cls() {
    return this.constructor as any as typeof XRElement;
  }

  protected createRenderRoot() {
    return this;
  }

  private _setupMutationObserver() {
    const observer = new MutationObserver(mutationList => {
      for (let i = 0; i < mutationList.length; i++) {
        if (mutationList[i].type === 'attributes') {
          const attributeName = mutationList[i].attributeName;
          if (!attributeName) continue;

          this._flushComponents(); // 更新组件
        }
      }
    });
    observer.observe(this, { attributes: true });
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
      delete this.components[key];
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
 
  connectedCallback() {
    super.connectedCallback();

    this.logger.debug('connected');

    // 检查必须的属性
    if (this._Cls.requiredAttrs.length > 0) {
      const missingAttrs = this._Cls.requiredAttrs.filter(attr => this.getAttribute(attr) === null);
      if (missingAttrs.length > 0) throw new Error(`[${this.tagName}] Missing required attributes: ${missingAttrs.join(', ')}`);
    }

    this.connected();

    this._setupMutationObserver();
    this._flushComponents();
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    this.logger.debug('remove');
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
