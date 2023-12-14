import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export class TransformLikeController implements ReactiveController {
  constructor(
    private host: XRElement & {
      position?: Vector3;
      rotation?: Vector3;
      rotationQuaternion?: Quaternion;
      scale?: Vector3;
    }
  ) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    const entity = this.host.entity as TransformNode;
    if (!entity) return;

    const position = this.host.evaluated.position;
    const rotation = this.host.evaluated.rotation;
    const rotationQuaternion = this.host.evaluated.rotationQuaternion;
    const scale = this.host.evaluated.scale;

    if (this.host.changed.has('position') && position && entity.position instanceof Vector3) {
      entity.position.copyFrom(position);
    }

    if (this.host.changed.has('rotation') && rotation && entity.rotation instanceof Vector3) {
      entity.rotation.copyFrom(rotation).scaleInPlace(Math.PI / 180); // deg -> rad
    }

    if (this.host.changed.has('rotationQuaternion') && rotationQuaternion && entity.rotationQuaternion instanceof Quaternion) {
      entity.rotationQuaternion.copyFrom(rotationQuaternion);
    }

    if (this.host.changed.has('scale') && scale && entity.scaling instanceof Vector3) {
      entity.scaling.copyFrom(scale);
    }
  }
}
