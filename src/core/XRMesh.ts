import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { ElementUtil, randomID } from '../util';
import { HierarchyController, RefController, TransformController } from './controller';
import { Decorator } from './Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class XRMesh extends XRSceneScopeElement<Mesh> {
  private _geoCtrl = new RefController(
    this,
    'geometry',
    () => this.geometry || null,
    geo => {
      if (this.entity && geo) geo.applyToMesh(this.entity);
    }
  );

  private _matCtrl = new RefController(
    this,
    'material',
    () => this.material || null,
    mat => {
      if (this.entity) this.entity.material = mat;
    }
  );

  private _parentCtrl = new HierarchyController(this, parent => {
    if (this.entity) this.entity.parent = parent;
  });

  private _transCtrl = new TransformController(this);

  @Decorator.property_String()
  geometry?: string;

  @Decorator.property_String()
  material?: string;

  @Decorator.property_Vector3(Vector3.Zero())
  position!: Vector3;

  @Decorator.property_Vector3(Vector3.Zero())
  rotation!: Vector3;

  @Decorator.property_Vector3(Vector3.One())
  scaling!: Vector3;

  connected(): void {
    super.connected();

    const id = this.id || 'mesh:' + randomID();

    const parent = ElementUtil.closestTransformNodeLike(this);
    this.entity = new Mesh(id, this.scene, parent);
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
