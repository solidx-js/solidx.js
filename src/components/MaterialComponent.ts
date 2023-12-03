import { XRMesh } from '../core/XRMesh';
import { RefComponent2 } from './RefComponent';
import { Material } from '@babylonjs/core/Materials';

export class MaterialComponent extends RefComponent2<Material> {
  protected _type = 'material' as const;

  get name(): string {
    return 'MaterialComponent';
  }

  onConnect(): void {
    this.el.entity.material = this._target;
  }

  onDisconnect(): void {
    this.el.entity.material = null;
  }
}
