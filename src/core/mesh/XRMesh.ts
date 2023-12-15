import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { ElementUtil, randomID } from '../../util';
import { RefController2 } from '../controller';
import { Decorator } from '../Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { state } from 'lit/decorators.js';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { GridMaterial } from '@babylonjs/materials/grid';
import { Material } from '@babylonjs/core/Materials/material';

export class XRMesh extends XRSceneScopeElement<Mesh> {
  @Decorator.property('String')
  geometry: string | null = null;

  @Decorator.property('String')
  material: string | null = null;

  @Decorator.property('String', 'grid-material')
  gridMaterial: string | null = null;

  @Decorator.property('Vector3')
  position = Vector3.Zero();

  @Decorator.property('Vector3')
  rotation = Vector3.Zero();

  @Decorator.property('Vector3')
  scale = Vector3.One();

  @state()
  _geometry: Geometry | null = null;

  @state()
  _material: Material | null = null;

  @state()
  _gridMaterial: GridMaterial | null = null;

  constructor() {
    super();

    new RefController2(this, 'geometry', 'geometry', '_geometry');
    new RefController2(this, 'material', 'material', '_material');
    new RefController2(this, 'grid-material', 'gridMaterial', '_gridMaterial');
  }

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

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('_geometry') && this._geometry) {
      this._geometry.applyToMesh(this.entity);
      this.emit('loadeddata', {});
    }

    if (changed.has('_material') || changed.has('_gridMaterial')) {
      this.entity.material = this._material || this._gridMaterial;
    }
  }
}