import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { XRElement } from '../core';

export const ElementUtil = {
  closestTransformNodeLike: (ele: HTMLElement): TransformNode | null => {
    // 向上查找最近的 .entity 是 TransformNode 子类的元素
    let cur = ele.parentElement;

    while (cur) {
      const entity = (cur as XRElement).entity;
      if (entity && entity instanceof TransformNode) return entity;

      cur = cur.parentElement;
    }

    return null;
  },

  toAttributeObject: <T extends HTMLElement>(ele: T): T => {
    return new Proxy(ele, {
      get(target, p, receiver) {
        if (typeof p === 'symbol') return Reflect.get(target, p, receiver);
        return target.getAttribute(p as string) || '';
      },
      set(target, p, value, receiver) {
        if (typeof p === 'symbol') return Reflect.set(target, p, value, receiver);
        target.setAttribute(p as string, value + '');
        return true;
      },
    });
  },

  displayText: (ele: HTMLElement) => {
    const tagName = ele.tagName.toLowerCase();
    if (ele.id) return `${tagName}#${ele.id}`;
    return tagName;
  },

  normalizeID(id: string) {
    return id.replace(/[\s(){}:.]/g, '_');
  },
};
