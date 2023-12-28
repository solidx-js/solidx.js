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
      attribute,
      converter: {
        fromAttribute: (value: string | null) => Schema.fromAttr(dType, value),
        toAttribute: (value: any) => Schema.toAttr(dType, value),
      },
      hasChanged: (value: any, oldValue: any) => !Schema.isEqual(dType, value, oldValue),
    });
  },
};
