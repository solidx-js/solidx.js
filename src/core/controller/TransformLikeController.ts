import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

export class TransformLikeController implements ReactiveController {
  private _matrixChangeOb: any;

  constructor(
    private host: XRElement<TransformNode> & {
      position?: Vector3;
      rotation?: Vector3;
      rotationQuaternion?: Quaternion;
      scale?: Vector3;
      layer?: number;
    }
  ) {
    this.host.addController(this);
  }

  private _tryBindEvents() {
    const host = this.host;

    const entity = host.entity;
    if (!entity) return;

    if (!this._matrixChangeOb) {
      // 同步 matrix 变化到 host 属性上
      this._matrixChangeOb = entity.onAfterWorldMatrixUpdateObservable.add(() => {
        if (host.position && !host.position.equals(entity.position)) {
          host.position = entity.position.clone();
        }

        if (host.rotation && !host.rotation.equals(entity.rotation)) {
          host.rotation = entity.rotation.clone();
        }

        if (host.rotationQuaternion && entity.rotationQuaternion && !host.rotationQuaternion.equals(entity.rotationQuaternion)) {
          host.rotationQuaternion = entity.rotationQuaternion.clone();
        }

        if (host.scale && !host.scale.equals(entity.scaling)) {
          host.scale = entity.scaling.clone();
        }
      });
    }
  }

  hostUpdate(): void {
    const entity = this.host.entity;
    if (!entity) return;

    this._tryBindEvents();

    const position = this.host.evaluated.position;
    const rotation = this.host.evaluated.rotation;
    const rotationQuaternion = this.host.evaluated.rotationQuaternion;
    const scale = this.host.evaluated.scale;

    if (this.host.changed.has('position') && position && entity.position) {
      entity.position.copyFrom(position);
    }

    if (this.host.changed.has('rotation') && rotation && entity.rotation) {
      entity.rotation.copyFrom(rotation).scaleInPlace(Math.PI / 180); // deg -> rad
    }

    if (this.host.changed.has('rotationQuaternion') && rotationQuaternion) {
      if (!entity.rotationQuaternion) entity.rotationQuaternion = Quaternion.Identity();
      entity.rotationQuaternion.copyFrom(rotationQuaternion);
    }

    if (this.host.changed.has('scale') && scale && entity.scaling) {
      entity.scaling.copyFrom(scale);
    }

    if (this.host.changed.has('layer') && entity && entity instanceof Mesh) {
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
