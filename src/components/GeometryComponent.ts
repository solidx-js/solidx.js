import { ISchema } from '../util';
import { Component } from './Component';
import { XRGeometry } from '../core/XRGeometry';
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

    const refEle = this.sceneEle.querySelector(this.data);

    if (refEle instanceof XRGeometry) {
      this._geometry = refEle.geometry;
    } else {
      throw new Error('GeometryComponent: data must be a XRGeometry');
    }

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
