import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRElement } from './XRElement';
import { randomID } from '../util';
import { customElement } from 'lit/decorators';
import { consume } from '@lit/context';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';

@customElement('xr-mesh')
export class XRMesh extends XRElement {
  @consume({ context: Context.Scene })
  scene!: Scene;

  private _mesh: Mesh | null = null;

  get mesh() {
    return this._mesh;
  }

  get name() {
    return 'XRMesh';
  }

  init(): void {
    super.init();

    const id = this.getAttribute('id') || 'mesh:' + randomID();
    this._mesh = new Mesh(id, this.scene);
  }

  remove(): void {
    super.remove();
    this._mesh?.dispose();
    this._mesh = null;
  }
}
