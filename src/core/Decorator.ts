import { consume } from '@lit/context';
import { property } from 'lit/decorators.js';
import { Context } from './Context';
import { IDataType, IDataTypeMap, Schema, typedClone } from '../util';

export const Decorator = {
  scene: () => {
    return consume({ context: Context.Scene, subscribe: true });
  },

  AssetContainer: () => {
    return consume({ context: Context.AssetContainer, subscribe: true });
  },

  property: <T extends IDataType>(dType: T, attribute: string, initValue: IDataTypeMap[T] | null) => {
    return property({
      dType,
      initValue: typedClone(initValue),
      reflect: true,
      attribute,
      converter: {
        fromAttribute: (value: string | null) => {
          if (dType === 'Boolean') return value !== null;
          return typeof value === 'string' ? Schema.parse(dType, value) : undefined;
        },
        toAttribute: (value: any) => {
          if (typeof value === 'undefined' || value === null) return null;
          if (dType === 'Boolean') return value ? '' : null;
          return Schema.stringify(dType, value);
        },
      },
      hasChanged: (value: any, oldValue: any) => !Schema.isEqual(dType, value, oldValue),
    });
  },
};
