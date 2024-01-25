import { Decorator } from '../Decorator';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { TransformLikeController } from '../controller';
import { ElementUtil, randomID } from '../../util';
import { ITransformNodeLikeImpl } from '../impl';
import { ElementRegistry } from '../../registry';

export type IXRNodeProps = ITransformNodeLikeImpl & {};

export class XRNode extends XRSceneScopeElement<TransformNode> implements IXRNodeProps {
  static getPropsFrom(node: TransformNode) {
    const props: IXRNodeProps = {
      entity: node,
      position: node.position,
      rotation: node.rotation,
      quaternion: node.rotationQuaternion || null,
      scale: node.scaling,
      layer: null,
      entityDelegated: null,
    };

    return props;
  }

  @Decorator.position()
  position: Vector3 | null = null;

  @Decorator.rotation()
  rotation: Vector3 | null = null;

  @Decorator.quaternion()
  quaternion: Quaternion | null = null;

  @Decorator.scale()
  scale: Vector3 | null = null;

  @Decorator.layer()
  layer: number | null = null;

  @Decorator.property('Boolean', 'entity-delegated', null)
  entityDelegated: boolean | null = null;

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

  onAncestorCoordinate(): void {
    super.onAncestorCoordinate();

    if (!this.entity) return;

    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
ElementRegistry.Instance.register('xr-node', XRNode as any);
