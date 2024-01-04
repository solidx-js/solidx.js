import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { ITransformNodeLikeImpl } from '../impl';

export class TransformLikeController implements ReactiveController {
  private _matrixChangeOb: any;

  constructor(private host: XRElement<TransformNode> & Omit<ITransformNodeLikeImpl, 'entityDelegated'>) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    const entity = this.host.entity;
    if (!entity) return;

    const position = this.host.evaluated.position;
    const rotation = this.host.evaluated.rotation;
    const quaternion = this.host.evaluated.quaternion;
    const scale = this.host.evaluated.scale;

    const changed = this.host.changed;

    if (changed.has('position') && position) entity.position.copyFrom(position);
    if (changed.has('rotation') && rotation) {
      entity.rotation.copyFrom(rotation).scaleInPlace(Math.PI / 180);
      if (entity.rotationQuaternion) Quaternion.FromEulerVectorToRef(entity.rotation, entity.rotationQuaternion);
    }
    if (changed.has('quaternion')) {
      if (quaternion) {
        if (!entity.rotationQuaternion) entity.rotationQuaternion = quaternion.clone();
        else entity.rotationQuaternion.copyFrom(quaternion);
      } else {
        entity.rotationQuaternion = null;
      }
    }
    if (changed.has('scale') && scale) entity.scaling.copyFrom(scale);

    if (changed.has('layer') && entity && entity instanceof Mesh) {
      entity.renderingGroupId = this.host.evaluated.layer || 0;
    }
  }

  hostDisconnected(): void {
    if (this._matrixChangeOb) {
      this._matrixChangeOb.remove();
      this._matrixChangeOb = null;
    }
  }
}
