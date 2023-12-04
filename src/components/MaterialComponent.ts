import { XRMesh } from '../core/XRMesh';
import { RefComponent } from './RefComponent';
import { Material } from '@babylonjs/core/Materials';

export class MaterialComponent extends RefComponent<Material> {
  protected _type = 'material' as const;

  get name(): string {
    return 'MaterialComponent';
  }

  onConnect(): void {
    this.el.entity.material = this._targets?.[0];
  }

  onDisconnect(): void {
    this.el.entity.material = null;
  }
}
