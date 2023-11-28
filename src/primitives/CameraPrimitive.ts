import { Primitive } from './Primitive';

export class CameraPrimitive extends Primitive {
  constructor() {
    super({
      camera: { near: 1, far: 99 },
    });
  }

  get name() {
    return 'CameraPrimitive';
  }
}
