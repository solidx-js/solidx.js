import { TransformNode } from '@babylonjs/core/Meshes';
import { ISchema } from '../util';
import { Component } from './Component';

export class RotationComponent extends Component<{ x: number; y: number; z: number }> {
  static schema: ISchema = { type: 'vec3' };

  get name(): string {
    return 'RotationComponent';
  }

  update(): void {
    super.update();

    if (this.el.node instanceof TransformNode) {
      this.el.node.rotation.x = (this.data?.x ?? 0) * Math.PI / 180;
      this.el.node.rotation.y = (this.data?.y ?? 0) * Math.PI / 180;
      this.el.node.rotation.z = (this.data?.z ?? 0) * Math.PI / 180;
    }
  }
}
