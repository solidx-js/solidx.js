import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { ElementUtil } from '../../util';
import { TagRefController, TransformLikeController } from '../controller';
import { Decorator } from '../Decorator';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { state } from 'lit/decorators.js';
import { ITransformNodeLikeImpl } from '../impl';
import { IGeometryImpl, IMaterialImpl } from '../impl';

export class XRMesh extends XRSceneScopeElement<Mesh> implements ITransformNodeLikeImpl {
  @Decorator.property('String', 'geometry', null)
  geometry: string | null = null;

  @Decorator.property('String', 'material', null)
  material: string | null = null;

  @Decorator.property('Vector3', 'position', null)
  position: Vector3 | null = null;

  @Decorator.property('Vector3', 'rotation', null)
  rotation: Vector3 | null = null;

  @Decorator.property('Quaternion', 'quaternion', null)
  quaternion: Quaternion | null = null;

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale: Vector3 | null = null;

  @Decorator.property('Boolean', 'disable-pointer-event', null)
  disablePointerEvent: boolean | null = null;

  @Decorator.property('Number', 'layer', null)
  layer: number | null = null;

  @state()
  _geometry: (HTMLElement & IGeometryImpl) | null = null;

  @state()
  _material: (HTMLElement & IMaterialImpl) | null = null;

  constructor() {
    super();

    new TransformLikeController(this);

    new TagRefController(this, 'geometry', '_geometry', 'xr-geometry');
    new TagRefController(this, 'material', '_material', d => d.el || 'xr-material');
  }

  connected(): void {
    super.connected();

    this.entity = new Mesh(this.id, this.scene, ElementUtil.closestTransformNodeLike(this));
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('_geometry') && this._geometry && this._geometry.entity) {
      this._geometry.entity.applyToMesh(this.entity);
      this.emit('loadeddata', {});
    }

    if (changed.has('_material')) {
      this.entity.material = this._material?.entity || this.scene.defaultMaterial;
    }

    if (changed.has('disablePointerEvent')) {
      this.entity.isPickable = !this.disablePointerEvent;
    }
  }
}
