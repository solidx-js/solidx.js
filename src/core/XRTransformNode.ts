import { XRElement } from './XRElement';
import { randomID } from '../util';
import { consume, provide } from '@lit/context';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export class XRTransformNode extends XRElement {
  @consume({ context: Context.Scene, subscribe: true })
  scene!: Scene;

  transformNode: TransformNode | null = null;

  constructor() {
    super();

    const id = this.id || 'TransformNode:' + randomID();
    this.transformNode = new TransformNode(id, this.scene);
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
