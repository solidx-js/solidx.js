import { ReactiveController } from 'lit';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export class TransformController implements ReactiveController {
  constructor(private host: XRSceneScopeElement) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    const entity = this.host.entity;
    if (!entity) return;

    if (!(entity instanceof TransformNode)) {
      this.host.logger.warn('TransformController can only be used on TransformNode-like entities');
    }

    const position = (this.host as any).position as Vector3 | undefined;
    const rotation = (this.host as any).rotation as Vector3 | undefined;
    const rotationQuaternion = (this.host as any).rotationQuaternion as Quaternion | undefined;
    const scaling = (this.host as any).scaling as Vector3 | undefined;

    if (position && entity.position) entity.position.copyFrom(position);
    if (rotation && entity.rotation) entity.rotation.copyFrom(rotation);
    if (rotationQuaternion && entity.rotationQuaternion) entity.rotationQuaternion.copyFrom(rotationQuaternion);
    if (scaling && entity.scaling) entity.scaling.copyFrom(scaling);
  }
}
