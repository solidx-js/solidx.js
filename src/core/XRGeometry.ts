import { XRElement } from './XRElement';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import type { XRScene } from './XRScene';
import { Geometry } from '@babylonjs/core/Meshes/geometry';

export class XRGeometry extends XRElement {
  static requiredAttrs: string[] = ['id'];

  private _geometry: Geometry | null = null;

  get geometry() {
    return this._geometry;
  }

  get name() {
    return 'XRGeometry';
  }

  get sceneEle() {
    return this.closest<XRScene>('xr-scene')!;
  }

  private _updateGeo(): void {
    const type = this.getAttribute('type') || 'custom';
    const vert = this.sceneEle.system.mesh.createVert({ type: type as any });

    if (!this._geometry) {
      this._geometry = new Geometry(this.id, this.sceneEle.scene!, vert, true);
    }
    //
    else {
      this._geometry.setAllVerticesData(vert, true);
    }
  }

  init(): void {
    super.init();
    this._updateGeo();
  }

  update(attr: string | null, oldVal: string | null, newVal: string | null): void {
    this._updateGeo();
  }

  remove(): void {
    super.remove();
    this._geometry?.dispose();
    this._geometry = null;
  }
}
