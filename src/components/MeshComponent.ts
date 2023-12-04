import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { RefComponent } from './RefComponent';
import { PositionComponent } from './PositionComponent';
import { RotationComponent } from './RotationComponent';

export class MeshComponent extends RefComponent<Mesh> {
  get name(): string {
    return 'MeshComponent';
  }

  onConnect(): void {
    if (!this._targets) return;

    const target = this._targets[0];
    if (!target) return;

    this.el.entity = target;

    for (const comp of Object.values(this.el.components)) {
      if (comp instanceof PositionComponent) target.position.copyFrom(comp.position);
      if (comp instanceof RotationComponent) target.rotation.copyFrom(comp.rotation);
    }
  }

  onDisconnect(): void {}
}
