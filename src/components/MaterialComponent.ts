import { XRMesh } from '../core/XRMesh';
import { RefComponent } from './RefComponent';
import { Material } from '@babylonjs/core/Materials';

export class MaterialComponent extends RefComponent<Material> {
  get name(): string {
    return 'MaterialComponent';
  }

  onFetchTarget(): Material | null {
    if (!this.data) return null;
    return this.scene.getMaterialById(this.data);
  }

  onConnect(): void {
    if (!(this.el instanceof XRMesh) || !this.el.mesh) return;
    this.el.mesh.material = this._target;
  }

  onDisconnect(): void {
    if (!(this.el instanceof XRMesh) || !this.el.mesh) return;
    if (this.el.mesh.material === this._target) this.el.mesh.material = null;
  }
}
