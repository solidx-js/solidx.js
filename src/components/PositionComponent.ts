import { TransformNode } from '@babylonjs/core/Meshes';
import { ISchema } from '../util';
import { Component } from './Component';

export class PositionComponent extends Component<{ x: number; y: number; z: number }> {
  static schema: ISchema = { type: 'vec3' };

  get name(): string {
    return 'PositionComponent';
  }

  update(): void {
    super.update();

    if (this.el.node instanceof TransformNode) {
      this.el.node.position.x = this.data?.x ?? 0;
      this.el.node.position.y = this.data?.y ?? 0;
      this.el.node.position.z = this.data?.z ?? 0;
    }
  }
}
