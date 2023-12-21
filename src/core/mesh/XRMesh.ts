import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { ElementUtil, randomID } from '../../util';
import { RefController2, TransformLikeController } from '../controller';
import { Decorator } from '../Decorator';
import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { state } from 'lit/decorators.js';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { GridMaterial } from '@babylonjs/materials/grid';
import { Material } from '@babylonjs/core/Materials/material';
import { ITransformNodeLikeImpl } from '../../type';

export class XRMesh extends XRSceneScopeElement<Mesh> implements ITransformNodeLikeImpl {
  @Decorator.property('String', 'geometry', null)
  geometry: string | null = null;

  @Decorator.property('String', 'material', null)
  material: string | null = null;

  @Decorator.property('String', 'grid-material', null)
  gridMaterial: string | null = null;

  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position: Vector3 = Vector3.Zero();

  @Decorator.property('Vector3', 'rotation', Vector3.Zero())
  rotation: Vector3 = Vector3.Zero();

  @Decorator.property('Quaternion', 'quaternion', null)
  quaternion: Quaternion | null = null;

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale: Vector3 = Vector3.One();

  @Decorator.property('Boolean', 'disable-pointer-event', false)
  disablePointerEvent: boolean = false;

  @Decorator.property('Number', 'layer', 0)
  layer: number = 0;

  @state()
  _geometry: Geometry | null = null;

  @state()
  _material: Material | null = null;

  @state()
  _gridMaterial: GridMaterial | null = null;

  constructor() {
    super();

    new TransformLikeController(this);

    new RefController2(this, 'geometry', 'geometry', '_geometry');
    new RefController2(this, 'material', 'material', '_material');
    new RefController2(this, 'grid-material', 'gridMaterial', '_gridMaterial');
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

    if (changed.has('_geometry') && this._geometry) {
      this._geometry.applyToMesh(this.entity);
      this.emit('loadeddata', {});
    }

    if (changed.has('_material') || changed.has('_gridMaterial')) {
      this.entity.material = this._material || this._gridMaterial || this.scene.defaultMaterial;
    }

    if (changed.has('disablePointerEvent')) {
      this.entity.isPickable = !this.disablePointerEvent;
    }
  }
}
