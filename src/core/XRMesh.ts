import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { ElementUtil, randomID } from '../util';
import { HierarchyController, RefController, TransformController } from './controller';
import { Decorator } from './Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class XRMesh extends XRSceneScopeElement<Mesh> {
  constructor() {
    super();

    new RefController(
      this as any,
      'geometry',
      () => this.geometry || null,
      geo => {
        if (this.entity && geo) {
          geo.applyToMesh(this.entity);
          this.emit('loadeddata');
        }
      }
    );

    new RefController(
      this as any,
      'material',
      () => this.material || null,
      mat => {
        if (this.entity) this.entity.material = mat;
      }
    );

    new HierarchyController(this as any, parent => {
      if (this.entity) this.entity.parent = parent;
    });

    new TransformController(this as any);
  }

  @Decorator.property_String()
  geometry?: string;

  @Decorator.property_String()
  material?: string;

  @Decorator.property_Vector3()
  position = Vector3.Zero();

  @Decorator.property_Vector3()
  rotation = Vector3.Zero();

  @Decorator.property_Vector3()
  scaling = Vector3.One();

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
