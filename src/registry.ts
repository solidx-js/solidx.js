import { customElement } from 'lit/decorators.js';
import { DefaultBizLogger } from './BizLogger';
import type { XRThinElement } from './core';

export class ElementRegistry {
  static Instance = new ElementRegistry();

  private _elements: Record<string, typeof XRThinElement> = {};

  register(name: string, Ele: typeof XRThinElement, apply?: boolean) {
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

  apply(skipAncestorCoordinate = false) {
    const keys = this.keys();

    // xr-scene 必须排在最前面第一个注册, 不然会导致其他元素先走到 connectedCallback，但读取不到 scene
    keys.sort((a, b) => (a === 'xr-scene' ? -1 : b === 'xr-scene' ? 1 : 0));

    let hasRegisterNew = false;

    for (const key of keys) {
      if (customElements.get(key)) continue; // 已经注册过了
      customElement(key)(this.get(key)!);
      hasRegisterNew = true;
    }

    if (!skipAncestorCoordinate && hasRegisterNew) {
      // 从 xr-scene 开始协调祖先
      for (const ele of Array.from(document.querySelectorAll('xr-scene'))) {
        if ((<XRThinElement>ele).onAncestorCoordinate) (<XRThinElement>ele).onAncestorCoordinate();
      }
    }
  }
}

export function registerElement(tag: string, registry = ElementRegistry.Instance) {
  return function <C extends { new (): XRThinElement }>(constructor: C) {
    registry.register(tag, constructor as any);
    return constructor;
  };
}
