import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

export class TransformLikeController implements ReactiveController {
  private _matrixChangeOb: any;
  private _skipMatrixChangeOb = false;

  constructor(
    private host: XRElement<TransformNode> & {
      position: Vector3;
      rotation: Vector3;
      quaternion: Quaternion | null;
      scale: Vector3;
      layer: number;
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
        if (this._skipMatrixChangeOb) return; // 主动设置的属性不需要同步

        if (host.position && !host.position.equals(entity.position)) {
          host.position = entity.position.clone();
        }

        if (host.rotation && !host.rotation.equals(entity.rotation)) {
          host.rotation = entity.rotation.clone().scaleInPlace(180 / Math.PI);
        }

        if (host.quaternion && entity.rotationQuaternion && !host.quaternion.equals(entity.rotationQuaternion)) {
          host.quaternion = entity.rotationQuaternion.clone();
        }

        if (entity.rotationQuaternion && host.rotation) {
          host.rotation = entity.rotationQuaternion.toEulerAngles().scaleInPlace(180 / Math.PI);
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
    const quaternion = this.host.evaluated.quaternion;
    const scale = this.host.evaluated.scale;

    const changed = this.host.changed;

    this._skipMatrixChangeOb = true; // 主动设置的属性不需要同步

    if (changed.has('position') && position) entity.position.copyFrom(position);
    if (changed.has('rotation') && rotation) entity.rotation.copyFrom(rotation).scaleInPlace(Math.PI / 180);
    if (changed.has('quaternion')) {
      if (quaternion) {
        if (!entity.rotationQuaternion) entity.rotationQuaternion = quaternion.clone();
        else entity.rotationQuaternion.copyFrom(quaternion);
      } else {
        entity.rotationQuaternion = null;
      }
    }
    if (changed.has('scale') && scale) entity.scaling.copyFrom(scale);

    this._skipMatrixChangeOb = false;

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
