import { ISchema } from '../util';
import { Component } from './Component';
import { XRMesh } from '../core';
import { Geometry } from '@babylonjs/core/Meshes/geometry';

export class GeometryComponent extends Component<string> {
  static schema: ISchema = { type: 'string' };

  private _geometry: Geometry | null = null;
  private _geoNeedDispose = false;

  get name() {
    return 'GeometryComponent';
  }

  init(): void {
    super.init();
  }

  update(): void {
    super.update();

    if (!(this.el instanceof XRMesh) || !this.el.mesh) return;
    if (!this.data || !this.data.startsWith('#')) throw new Error('GeometryComponent: data must start with #');

    this._geometry = this.scene.getGeometryById(this.data.slice(1));
    console.log('@@@', '  this._geometry ->', this._geometry, this.scene.geometries);

    if (this._geometry) {
      this._geometry.applyToMesh(this.el.mesh);
    }
  }

  remove(): void {
    super.remove();

    if (this._geoNeedDispose) {
      this._geometry?.dispose();
    }

    this._geometry = null;
  }
}
