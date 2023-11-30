import { XRElement } from './XRElement';
import { ElementUtil, randomID } from '../util';
import { consume } from '@lit/context';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export class XRTransformNode extends XRElement {
  @consume({ context: Context.Scene, subscribe: true })
  scene!: Scene;

  transformNode: TransformNode | null = null;

  connected(): void {
    super.connected();

    const id = this.id || 'TransformNode:' + randomID();
    this.transformNode = new TransformNode(id, this.scene);

    const parent = ElementUtil.closestTransformNodeLike(this);
    this.transformNode.parent = parent;
  }

  disconnected(): void {
    super.disconnected();
    this.transformNode?.dispose();
    this.transformNode = null;
  }

  render() {
    return null;
  }
}
