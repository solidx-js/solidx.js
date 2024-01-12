import type { XRElement } from './core';
import { customElement } from 'lit/decorators.js';
import { DefaultBizLogger } from './BizLogger';

export class ElementRegistry {
  static Instance = new ElementRegistry();

  private _elements: Record<string, typeof XRElement> = {};

  register(name: string, Ele: typeof XRElement, apply?: boolean) {
    if (this._elements[name]) throw new Error(`Element "${name}" already registered`);

    DefaultBizLogger.debug('register element: %s', name);
    this._elements[name] = Ele;

    if (apply) {
      customElement(name)(Ele);
    }
  }

  get(name: string) {
    return this._elements[name];
  }

  keys() {
    return Object.keys(this._elements);
  }

  apply() {
    const keys = this.keys();

    // xr-scene 必须排在最前面第一个注册, 不然会导致其他元素先走到 connectedCallback，但读取不到 scene
    keys.sort((a, b) => (a === 'xr-scene' ? -1 : b === 'xr-scene' ? 1 : 0));

    for (const key of keys) {
      if (customElements.get(key)) continue; // 已经注册过了
      customElement(key)(this.get(key)!);
    }
  }
}

export function registerElement(tag: string, registry = ElementRegistry.Instance) {
  return function <C extends { new (): XRElement }>(constructor: C) {
    registry.register(tag, constructor as any);
    return constructor;
  };
}
