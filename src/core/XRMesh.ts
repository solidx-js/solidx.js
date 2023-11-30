import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRElement } from './XRElement';
import { ElementUtil, randomID } from '../util';
import { consume } from '@lit/context';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';

export class XRMesh extends XRElement {
  @consume({ context: Context.Scene, subscribe: true })
  scene!: Scene;

  private _mesh: Mesh | null = null;

  get mesh() {
    return this._mesh;
  }

  connected(): void {
    super.connected();

    const id = this.id || 'mesh:' + randomID();

    const parent = ElementUtil.closestTransformNodeLike(this);
    this._mesh = new Mesh(id, this.scene, parent);
  }

  disconnected(): void {
    super.disconnected();
    this._mesh?.dispose();
    this._mesh = null;
  }

  render() {
    return null;
  }
}
