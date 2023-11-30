import { XRMesh } from '../core';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { RefComponent } from './RefComponent';

export class GeometryComponent extends RefComponent<Geometry> {
  get name() {
    return 'GeometryComponent';
  }

  onFetchTarget(): Geometry | null {
    if (!this.data) return null;
    return this.scene.getGeometryById(this.data);
  }

  onConnect(): void {
    if (!(this.el instanceof XRMesh) || !this.el.mesh || !this._target) return;
    this._target.applyToMesh(this.el.mesh);
  }
}
