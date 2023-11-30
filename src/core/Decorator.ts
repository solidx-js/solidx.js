import { Color3 } from '@babylonjs/core/Maths/math.color';
import { property } from 'lit/decorators';

export const Decorator = {
  property_Color3: () => {
    return property({
      converter: {
        fromAttribute: (value: string) => Color3.FromHexString(value),
        toAttribute: (value: Color3) => value.toHexString(),
      },
    });
  },

  property_Number: () => {
    return property({ type: Number });
  },

  property_String: () => {
    return property();
  },
};
