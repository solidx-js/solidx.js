import { Decorator } from './Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { HierarchyController, TransformController } from './controller';
import { randomID } from '../util';

export class XRNode extends XRSceneScopeElement<TransformNode> {
  private _parentCtrl = new HierarchyController(this, parent => {
    if (this.entity) this.entity.parent = parent;
  });

  private _transCtrl = new TransformController(this);

  @Decorator.property_Vector3(Vector3.Zero())
  position!: Vector3;

  @Decorator.property_Vector3(Vector3.Zero())
  rotation!: Vector3;

  @Decorator.property_Vector3(Vector3.One())
  scaling!: Vector3;

  connected(): void {
    super.connected();

    const id = this.id || 'Node:' + randomID();
    this.entity = new TransformNode(id, this.scene);
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
