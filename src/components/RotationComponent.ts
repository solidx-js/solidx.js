import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { ISchema } from '../util';
import { Component } from './Component';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export class RotationComponent extends Component<{ x: number; y: number; z: number }> {
  static schema: ISchema = { type: 'vec3' };

  get name() {
    return 'RotationComponent';
  }

  rotation: Vector3 = Vector3.Zero();

  update(): void {
    super.update();

    this.rotation.x = ((this.data?.x || 0) * Math.PI) / 180;
    this.rotation.y = ((this.data?.y || 0) * Math.PI) / 180;
    this.rotation.z = ((this.data?.z || 0) * Math.PI) / 180;

    const entity = this.el.entity;
    if (!entity) return;

    if (entity instanceof TransformNode) entity.rotation.copyFrom(this.rotation);
  }
}
