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
};
