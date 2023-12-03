import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { XRElement } from './XRElement';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { consume } from '@lit/context';
import { Context } from './Context';
import { property } from 'lit/decorators';
import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';

export class XRMaterial extends XRElement {
  static requiredAttrs: string[] = ['id'];

  private _mat: PBRMaterial | null = null;

  @consume({ context: Context.Scene, subscribe: true })
  @property({ attribute: false })
  scene!: Scene;

  @Decorator.property_Color3()
  albedoColor?: Color3;

  @Decorator.property_Number()
  metallic?: number;

  @Decorator.property_Number()
  roughness?: number;

  @Decorator.property_Color3()
  emissiveColor?: Color3;

  get material() {
    return this._mat;
  }

  private _updateMat(): void {
    if (!this._mat) this._mat = new PBRMaterial(this.id, this.scene);

    if (this.albedoColor) this._mat.albedoColor = this.albedoColor;
    if (typeof this.metallic !== 'undefined') this._mat.metallic = this.metallic;
    if (typeof this.roughness !== 'undefined') this._mat.roughness = this.roughness;
    if (this.emissiveColor) this._mat.emissiveColor = this.emissiveColor;
  }

  connected(): void {
    super.connected();
    this._updateMat();
  }

  render() {
    this._updateMat();
  }

  disconnected(): void {
    super.disconnected();
    this._mat?.dispose();
    this._mat = null;
  }
}
