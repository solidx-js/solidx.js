import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { IDataType } from '../util';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Component } from '../core';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';

export class RotationComponent extends Component<{ x: number; y: number; z: number }> {
  static dataType: IDataType = 'Vector3';

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

    if (entity instanceof DirectionalLight) {
      const alpha = this.rotation.x;
      const beta = this.rotation.y;
      entity.direction.x = Math.cos(alpha) * Math.sin(beta);
      entity.direction.y = Math.sin(alpha);
      entity.direction.z = Math.cos(alpha) * Math.cos(beta);
      entity.direction.scaleInPlace(-1); // direction 是从光源指向场景的，所以需要取反
    }
    //
    else if (entity instanceof TransformNode) entity.rotation.copyFrom(this.rotation);
  }
}
