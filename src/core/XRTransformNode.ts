import { XRElement } from './XRElement';
import { randomID } from '../util';
import { consume, provide } from '@lit/context';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { property } from 'lit/decorators';

export class XRTransformNode extends XRElement {
  @consume({ context: Context.Scene, subscribe: true })
  scene!: Scene;

  @provide({ context: Context.Scene })
  @property({ attribute: false })
  protected _transformNode: TransformNode | null = null;

  get mesh() {
    return this._transformNode;
  }

  constructor() {
    super();

    const id = this.id || 'TransformNode:' + randomID();
    this._transformNode = new TransformNode(id, this.scene);
  }

  disconnected(): void {
    super.disconnected();
    this._transformNode?.dispose();
    this._transformNode = null;
  }

  render() {
    return null;
  }
}
