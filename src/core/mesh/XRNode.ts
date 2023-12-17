import { Decorator } from '../Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { TransformLikeController } from '../controller';
import { ElementUtil, randomID } from '../../util';

export class XRNode extends XRSceneScopeElement<TransformNode> {
  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position = Vector3.Zero();

  @Decorator.property('Vector3', 'rotation', Vector3.Zero())
  rotation = Vector3.Zero();

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale = Vector3.One();

  constructor() {
    super();

    new TransformLikeController(this);
  }

  connected(): void {
    super.connected();

    const id = this.id || 'Node:' + randomID();
    this.entity = new TransformNode(id, this.scene);
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
