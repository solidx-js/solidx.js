import { Primitive } from './Primitive';

export class SkyPrimitive extends Primitive {
  constructor() {
    super({
      geometry: { primitive: 'sphere', size: 500 },
      material: {},
      scale: '-1 1 1',
    });
  }

  get name() {
    return 'SkyPrimitive';
  }
}
