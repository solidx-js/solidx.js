import { XREntity } from '../core';
import { System } from './System';

export class MeshSystem extends System {
  get name() {
    return 'MeshSystem';
  }

  tick(): void {}
}
