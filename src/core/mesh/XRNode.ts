import { Decorator } from '../Decorator';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { TransformLikeController } from '../controller';
import { ElementUtil, randomID } from '../../util';
import { ITransformNodeLikeImpl } from '../impl';

export class XRNode extends XRSceneScopeElement<TransformNode> implements ITransformNodeLikeImpl {
  @Decorator.property('Vector3', 'position', null)
  position: Vector3 | null = null;

  @Decorator.property('Vector3', 'rotation', null)
  rotation: Vector3 | null = null;

  @Decorator.property('Quaternion', 'quaternion', null)
  quaternion: Quaternion | null = null;

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale: Vector3 | null = null;

  @Decorator.property('Number', 'layer', null)
  layer: number | null = null;

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
