import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { ISchema } from '../util';
import { Component } from './Component';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export class PositionComponent extends Component<{ x: number; y: number; z: number }> {
  static schema: ISchema = { type: 'vec3' };

  position: Vector3 = Vector3.Zero();

  update(): void {
    super.update();

    this.position.x = this.data?.x || 0;
    this.position.y = this.data?.y || 0;
    this.position.z = this.data?.z || 0;

    const entity = this.el.entity;
    if (!entity) return;

    if (entity instanceof TransformNode) entity.position.copyFrom(this.position);
  }
}
