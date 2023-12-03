import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { RefComponent2 } from './RefComponent';
import { PositionComponent } from './PositionComponent';
import { RotationComponent } from './RotationComponent';

export class MeshComponent extends RefComponent2<Mesh> {
  get name(): string {
    return 'MeshComponent';
  }

  onConnect(): void {
    if (!this._target) return;

    this.el.entity = this._target;

    for (const comp of Object.values(this.el.components)) {
      if (comp instanceof PositionComponent) this._target.position.copyFrom(comp.position);
      if (comp instanceof RotationComponent) this._target.rotation.copyFrom(comp.rotation);
    }
  }

  onDisconnect(): void {}
}
