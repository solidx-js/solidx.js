import { Decorator } from './Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import { HierarchyController, TransformController } from './controller';
import { randomID } from '../util';

export class XRNode extends XRSceneScopeElement<TransformNode> {
  private _parentCtrl = new HierarchyController(this as any, parent => {
    if (this.entity) this.entity.parent = parent;
  });

  private _transCtrl = new TransformController(this as any);

  @Decorator.property_Vector3()
  position = Vector3.Zero();

  @Decorator.property_Vector3()
  rotation = Vector3.Zero();

  @Decorator.property_Vector3()
  scale = Vector3.One();

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
