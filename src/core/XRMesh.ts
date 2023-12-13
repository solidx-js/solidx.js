import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { ElementUtil, randomID } from '../util';
import { RefController } from './controller';
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
          this.emit('loadeddata', {});
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
  }

  @Decorator.property('String')
  geometry?: string;

  @Decorator.property('String')
  material?: string;

  @Decorator.property('Vector3')
  position = Vector3.Zero();

  @Decorator.property('Vector3')
  rotation = Vector3.Zero();

  @Decorator.property('Vector3')
  scale = Vector3.One();

  connected(): void {
    super.connected();

    const id = this.id || 'mesh:' + randomID();

    const parent = ElementUtil.closestTransformNodeLike(this);
    this.entity = new Mesh(id, this.scene, parent);
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
