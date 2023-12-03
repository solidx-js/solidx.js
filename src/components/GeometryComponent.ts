import { XRMesh } from '../core';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { RefComponent2 } from './RefComponent';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

export class GeometryComponent extends RefComponent2<Geometry> {
  protected _type = 'geometry' as const;

  get name() {
    return 'GeometryComponent';
  }

  onConnect(): void {
    if (!this.el.entity || !(this.el.entity instanceof Mesh) || !this._target) return;
    this._target.applyToMesh(this.el.entity);
  }
}
