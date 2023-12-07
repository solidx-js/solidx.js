import { ReactiveController } from 'lit';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Animation } from '@babylonjs/core/Animations/animation';

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

    this.host.setWithTransition(entity, 'position', 'position', Animation.ANIMATIONTYPE_VECTOR3);
    this.host.setWithTransition(entity, 'rotation', 'rotation', Animation.ANIMATIONTYPE_VECTOR3, v => v.scaleInPlace(180 / Math.PI));
    this.host.setWithTransition(entity, 'rotationQuaternion', 'rotationQuaternion', Animation.ANIMATIONTYPE_QUATERNION);
    this.host.setWithTransition(entity, 'scaling', 'scaling', Animation.ANIMATIONTYPE_VECTOR3);
  }
}
