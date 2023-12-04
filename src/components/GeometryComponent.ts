import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { RefComponent } from './RefComponent';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

export class GeometryComponent extends RefComponent<Geometry> {
  protected _type = 'geometry' as const;

  get name() {
    return 'GeometryComponent';
  }

  onConnect(): void {
    if (!this.el.entity || !(this.el.entity instanceof Mesh) || !this._targets || this._targets.length === 0) return;
    this._targets[0].applyToMesh(this.el.entity);
  }
}
