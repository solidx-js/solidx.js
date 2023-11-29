import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRElement } from './XRElement';
import type { XRScene } from './XRScene';
import { randomID } from '../util';

export class XRMesh extends XRElement {
  private _mesh: Mesh | null = null;

  get mesh() {
    return this._mesh;
  }

  get name() {
    return 'XRMesh';
  }

  get sceneEle() {
    return this.closest<XRScene>('xr-scene')!;
  }

  init(): void {
    super.init();

    const id = this.getAttribute('id') || 'mesh:' + randomID();
    this._mesh = new Mesh(id, this.sceneEle.scene);
  }

  update(attr: string | null, oldVal: string | null, newVal: string | null): void {}

  remove(): void {
    super.remove();
    this._mesh?.dispose();
    this._mesh = null;
  }
}
