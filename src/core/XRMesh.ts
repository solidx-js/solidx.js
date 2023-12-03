import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRElement } from './XRElement';
import { ElementUtil, randomID } from '../util';
import { consume } from '@lit/context';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';

export class XRMesh extends XRElement {
  @consume({ context: Context.Scene, subscribe: true })
  scene!: Scene;

  get mesh() {
    return this.entity;
  }

  set mesh(mesh: Mesh | null) {
    this.entity = mesh;
  }

  connected(): void {
    super.connected();

    const id = this.id || 'mesh:' + randomID();

    const parent = ElementUtil.closestTransformNodeLike(this);
    this.mesh = new Mesh(id, this.scene, parent);
  }

  disconnected(): void {
    super.disconnected();
    this.mesh?.dispose();
    this.mesh = null;
  }

  render() {
    return null;
  }
}
