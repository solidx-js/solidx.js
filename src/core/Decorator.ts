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

  rotation: () => {
    return Decorator.property('Vector3', 'rotation', null, { min: 0, max: 360, step: 1 });
  },

  position: () => {
    return Decorator.property('Vector3', 'position', null);
  },

  quaternion: () => {
    return Decorator.property('Quaternion', 'quaternion', null);
  },

  scale: () => {
    return Decorator.property('Vector3', 'scale', Vector3.One());
  },

  layer: () => {
    return Decorator.property('Number', 'layer', null, { min: 0, max: 3, step: 1 });
  },
};
