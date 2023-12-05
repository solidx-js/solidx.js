import { ElementUtil, randomID } from '../util';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { Decorator } from './Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from './XRSceneScopeElement';

export class XRTransformNode extends XRSceneScopeElement {
  @Decorator.property_Vector3(Vector3.Zero())
  position: Vector3 = Vector3.Zero();

  @Decorator.property_Vector3(Vector3.Zero())
  rotation: Vector3 = Vector3.Zero();

  connected(): void {
    super.connected();

    const id = this.id || 'Node:' + randomID();
    this.entity = new TransformNode(id, this.scene);

    const parent = ElementUtil.closestTransformNodeLike(this);
    this.entity.parent = parent;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    this.entity.position.copyFrom(this.position);
    this.entity.rotation.copyFrom(this.rotation);
  }
}
