import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { Vector2, Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
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

  property_Number: (attribute?: string) => {
    return property({ type: Number, attribute });
  },

  property_String: (attribute?: string) => {
    return property({ attribute });
  },

  property_Array: (attribute?: string) => {
    return property({
      converter: {
        fromAttribute: (value: string | null) => (value ? value.split(' ') : []),
        toAttribute: (value: string[]) => value.join(' '),
      },
      attribute,
    });
  },

  property_Vector2: (attribute?: string) => {
    return property({
      converter: {
        fromAttribute: (value: string | null) => {
          if (!value) return;
          const values = value.split(' ').map(v => parseFloat(v));
          return Vector2.FromArray(values);
        },
        toAttribute: (value: Vector2) => value.asArray().join(' '),
      },
      attribute,
    });
  },

  property_Vector3: (attribute?: string) => {
    return property({
      converter: {
        fromAttribute: (value: string | null) => {
          if (!value) return;
          const values = value.split(' ').map(v => parseFloat(v));
          return Vector3.FromArray(values);
        },
        toAttribute: (value: Vector3) => value.asArray().join(' '),
      },
      hasChanged: () => true,
      attribute,
    });
  },

  property_Vector4: (attribute?: string) => {
    return property({
      converter: {
        fromAttribute: (value: string | null) => {
          if (!value) return;
          const values = value.split(' ').map(v => parseFloat(v));
          return Vector4.FromArray(values);
        },
        toAttribute: (value: Vector4) => `${value.x} ${value.y} ${value.z} ${value.w}`,
      },
      hasChanged: () => true,
      attribute,
    });
  },

  property_Color3: (attribute?: string) => {
    return property({
      converter: {
        fromAttribute: (value: string | null) => (value ? Color3.FromHexString(value) : undefined),
        toAttribute: (value: Color3) => value.toHexString(),
      },
      hasChanged: () => true,
      attribute,
    });
  },

  property_Color4: (attribute?: string) => {
    return property({
      attribute,

      converter: {
        fromAttribute: (value: string | null) => (value ? Color4.FromHexString(value) : undefined),
        toAttribute: (value: Color4) => value.toHexString(),
      },
      hasChanged: () => true,
    });
  },

  property_Boolean: (attribute?: string) => {
    return property({ attribute, type: Boolean });
  },

  property_Object: (attribute?: string) => {
    return property({
      attribute,
      converter: {
        fromAttribute: (value: string | null) => (typeof value === 'string' ? Schema.parse('Object', value) : undefined),
        toAttribute: (value: any) => Schema.stringify('Object', value),
      },
    });
  },

  property: (dType: IDataType, attribute?: string) => {
    if (dType === 'Number') return Decorator.property_Number(attribute);
    if (dType === 'String') return Decorator.property_String(attribute);
    if (dType === 'Array') return Decorator.property_Array(attribute);
    if (dType === 'Vector2') return Decorator.property_Vector2(attribute);
    if (dType === 'Vector3') return Decorator.property_Vector3(attribute);
    if (dType === 'Vector4') return Decorator.property_Vector4(attribute);
    if (dType === 'Color3') return Decorator.property_Color3(attribute);
    if (dType === 'Object') return Decorator.property_Object(attribute);

    throw new Error(`Decorator.property: unknown data type ${dType}`);
  },
};
