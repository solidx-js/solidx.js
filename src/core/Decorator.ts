import { consume } from '@lit/context';
import { property } from 'lit/decorators.js';
import { Context } from './Context';
import { IDataType, IDataTypeMap, Schema, typedClone } from '../util';
import { PropertyDeclaration } from 'lit';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export const Decorator = {
  scene: () => {
    return consume({ context: Context.Scene, subscribe: true });
  },

  AssetContainer: () => {
    return consume({ context: Context.AssetContainer, subscribe: true });
  },

  property: <T extends IDataType>(dType: T, attribute: string, initValue: IDataTypeMap[T] | null, extra?: PropertyDeclaration['extra']) => {
    return property({
      extra,
      dType,
      initValue: typedClone(initValue),
      attribute,
      converter: {
        fromAttribute: (value: string | null) => Schema.fromAttr(dType, value),
        toAttribute: (value: any) => Schema.toAttr(dType, value),
      },
      hasChanged: (value: any, oldValue: any) => !Schema.isEqual(dType, value, oldValue),
    });
  },

  material: () => {
    return Decorator.property('URI', 'material', null, { title: '材质' });
  },

  rotation: () => {
    return Decorator.property('Vector3', 'rotation', null, { title: '旋转', min: 0, max: 360, step: 1 });
  },

  position: () => {
    return Decorator.property('Vector3', 'position', null, { title: '位置' });
  },

  quaternion: () => {
    return Decorator.property('Quaternion', 'quaternion', null, { title: '四元数' });
  },

  scale: () => {
    return Decorator.property('Vector3', 'scale', Vector3.One(), { title: '缩放' });
  },

  layer: () => {
    return Decorator.property('Number', 'layer', null, {
      title: '渲染顺序层',
      doc:
        process.env.NODE_ENV === 'development'
          ? 'layer 属性通常用于控制渲染顺序和可见性。可以将不同的对象分配给不同的层，然后独立地控制每个层的渲染。例如，可以使用层来创建一个总是在其他对象之上渲染的元素。数值越大，渲染越靠前。'
          : '',
      min: 0,
      max: 3,
      step: 1,
    });
  },

  camera: () => {
    return Decorator.property('URI', 'camera', null, { title: '作用相机' });
  },
};
