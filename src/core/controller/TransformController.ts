import { ReactiveController } from 'lit';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class TransformController implements ReactiveController {
  constructor(private host: XRSceneScopeElement) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    const entity = this.host.entity;
    if (!entity) return;

    const position = (this.host as any).position as Vector3 | undefined;
    const rotation = (this.host as any).rotation as Vector3 | undefined;
    const scaling = (this.host as any).scaling as Vector3 | undefined;

    if (position && entity.position) entity.position.copyFrom(position);
    if (rotation && entity.rotation) entity.rotation.copyFrom(rotation);
    if (scaling && entity.scaling) entity.scaling.copyFrom(scaling);
  }
}
