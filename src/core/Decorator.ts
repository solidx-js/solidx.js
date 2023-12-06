import { Color3, Color4 } from '@babylonjs/core/Maths/math.color';
import { Vector2, Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
import { consume } from '@lit/context';
import { property } from 'lit/decorators';
import { Context } from './Context';
import { IDataType, Schema } from '../util';

export const Decorator = {
  scene: () => {
    return consume({ context: Context.Scene, subscribe: true });
  },

  AssetContainer: () => {
    return consume({ context: Context.AssetContainer, subscribe: true });
  },

  property_Number: () => {
    return property({ reflect: true, type: Number });
  },

  property_String: (attribute?: string) => {
    return property({ reflect: true, attribute });
  },

  property_Array: () => {
    return property({
      reflect: true,
      converter: {
        fromAttribute: (value: string) => value.split(' '),
        toAttribute: (value: string[]) => value.join(' '),
      },
    });
  },

  property_Vector2: (ref: Vector2) => {
    return property({
      reflect: true,
      converter: {
        fromAttribute: (value: string) => {
          const values = value.split(' ').map(v => parseFloat(v));
          return ref.copyFromFloats(values[0], values[1]);
        },
        toAttribute: (value: Vector2) => value.asArray().join(' '),
      },
      hasChanged: () => true,
    });
  },

  property_Vector3: (ref: Vector3) => {
    return property({
      reflect: true,
      converter: {
        fromAttribute: (value: string) => {
          const values = value.split(' ').map(v => parseFloat(v));
          return ref.copyFromFloats(values[0], values[1], values[2]);
        },
        toAttribute: (value: Vector3) => value.asArray().join(' '),
      },
      hasChanged: () => true,
    });
  },

  property_Vector4: (ref: Vector4) => {
    return property({
      reflect: true,
      converter: {
        fromAttribute: (value: string) => {
          const values = value.split(' ').map(v => parseFloat(v));
          return ref.copyFromFloats(values[0], values[1], values[2], values[3]);
        },
        toAttribute: (value: Vector4) => `${value.x} ${value.y} ${value.z} ${value.w}`,
      },
      hasChanged: () => true,
    });
  },

  property_Color3: () => {
    return property({
      reflect: true,
      converter: {
        fromAttribute: (value: string) => Color3.FromHexString(value),
        toAttribute: (value: Color3) => value.toHexString(),
      },
      hasChanged: () => true,
    });
  },

  property_Color4: (attribute?: string) => {
    return property({
      attribute,
      reflect: true,
      converter: {
        fromAttribute: (value: string) => Color4.FromHexString(value),
        toAttribute: (value: Color4) => value.toHexString(),
      },
      hasChanged: () => true,
    });
  },

  property_Boolean: (attribute?: string) => {
    return property({ reflect: true, type: Boolean, attribute });
  },

  property_Object: (attribute?: string) => {
    return property({
      reflect: true,
      attribute,
      converter: {
        fromAttribute: (value: string) => Schema.parse('Object', value),
        toAttribute: (value: any) => Schema.stringify('Object', value),
      },
    });
  },

  property: (dType: IDataType) => {
    if (dType === 'Number') return Decorator.property_Number();
    if (dType === 'String') return Decorator.property_String();
    if (dType === 'Array') return Decorator.property_Array();
    if (dType === 'Vector2') return Decorator.property_Vector2(new Vector2());
    if (dType === 'Vector3') return Decorator.property_Vector3(new Vector3());
    if (dType === 'Vector4') return Decorator.property_Vector4(new Vector4());
    if (dType === 'Color3') return Decorator.property_Color3();
    if (dType === 'Object') return Decorator.property_Object();

    throw new Error(`Decorator.property: unknown data type ${dType}`);
  },
};
