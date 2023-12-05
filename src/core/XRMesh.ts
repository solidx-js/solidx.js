import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { ElementUtil, randomID } from '../util';
import { RefController } from './controller';
import { Decorator } from './Decorator';

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

  @Decorator.property_String()
  geometry?: string;

  @Decorator.property_String()
  material?: string;

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
