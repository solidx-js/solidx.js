import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { ISchema } from '../util';
import { Component } from './Component';
import { XRMesh } from '../core/XRMesh';
import { XRMaterial } from '../core/XRMaterial';

export class MaterialComponent extends Component<string> {
  static schema: ISchema = { type: 'string' };

  private _material: PBRMaterial | null = null;
  private _matNeedDispose = false;

  get name(): string {
    return 'MaterialComponent';
  }

  init(): void {
    super.init();
  }

  update(): void {
    if (!(this.el instanceof XRMesh) || !this.el.mesh) return;
    if (!this.data || !this.data.startsWith('#')) throw new Error('MaterialComponent: data must start with #');

    const refEle = this.sceneEle.querySelector(this.data);

    if (refEle instanceof XRMaterial) {
      this._material = refEle.material;
    } else {
      throw new Error('MaterialComponent: data must be a XRMaterial');
    }

    if (this._material) {
      this.el.mesh.material = this._material;
    }
  }

  remove(): void {
    super.remove();

    if (this._matNeedDispose) {
      this._material?.dispose();
    }

    this._material = null;
  }
}
