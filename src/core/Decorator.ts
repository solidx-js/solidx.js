import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector2, Vector3, Vector4 } from '@babylonjs/core/Maths/math.vector';
import { consume } from '@lit/context';
import { property } from 'lit/decorators';
import { Context } from './Context';

export const Decorator = {
  scene: () => {
    return consume({ context: Context.Scene, subscribe: true });
  },

  property_Number: () => {
    return property({ reflect: true, type: Number });
  },

  property_String: () => {
    return property({ reflect: true });
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
};
