import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRElement } from './XRElement';
import { randomID } from '../util';
import { customElement } from 'lit/decorators';
import { consume } from '@lit/context';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';
import { XRTransformNode } from './XRTransformNode';

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

    const parent = this.parentElement instanceof XRTransformNode ? this.parentElement.transformNode : null;
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
