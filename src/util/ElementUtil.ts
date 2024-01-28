import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { XRElement } from '../core';
import { IDataType, IDataTypeMap } from './Schema';

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

  parseDuration: (duration: string): number => {
    if (duration.endsWith('ms')) return parseFloat(duration);
    if (duration.endsWith('s')) return parseFloat(duration) * 1000;
    return parseFloat(duration);
  },

  getCssText: (datas: { selector: string; style: { [key: string]: string } }[]) => {
    return datas
      .map(data => {
        const styleText = Object.entries(data.style)
          .map(([key, value]) => `  ${key}: ${value};`)
          .join('\n');
        return `${data.selector} {\n${styleText}\n}`;
      })
      .join('\n');
  },

  updateTarget(
    target: any,
    source: Record<string, IDataTypeMap[IDataType]>,
    specs: Record<string, [IDataType] | [IDataType, apply: (data: any) => any]>
  ) {
    for (const [attr, [dType, apply]] of Object.entries(specs)) {
      if (source[attr] === null) continue;

      // 自定义赋值方法
      if (apply) {
        apply(source[attr]);
        continue;
      }

      // VectorX
      if (dType === 'Vector2' || dType === 'Vector3' || dType === 'Vector4' || dType === 'Color3' || dType === 'Color4') {
        if (!target[attr]) target[attr] = source[attr];
        else target[attr].copyFrom(source[attr]);

        continue;
      }

      // 其他直接赋值
      target[attr] = source[attr];
    }
  },
};
