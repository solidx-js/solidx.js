import { Primitive } from './Primitive';

export class BoxPrimitive extends Primitive {
  constructor() {
    super({});
  }

  get name() {
    return 'BoxPrimitive';
  }
}
