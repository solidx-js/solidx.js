import { consume } from '@lit/context';
import { property } from 'lit/decorators.js';
import { Context } from './Context';
import { IDataType, Schema } from '../util';

export const Decorator = {
  scene: () => {
    return consume({ context: Context.Scene, subscribe: true });
  },

  AssetContainer: () => {
    return consume({ context: Context.AssetContainer, subscribe: true });
  },

  property: (dType: IDataType, attribute?: string) => {
    return property({
      dType,
      reflect: true,
      attribute,
      converter: {
        fromAttribute: (value: string | null) => {
          if (dType === 'Boolean') return value !== null;
          return typeof value === 'string' ? Schema.parse(dType, value) : undefined;
        },
        toAttribute: (value: any) => {
          if (dType === 'Boolean') return value ? '' : null;
          return Schema.stringify(dType, value);
        },
      },
    });
  },
};
