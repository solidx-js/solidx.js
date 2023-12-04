import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { XRElement } from './XRElement';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { consume } from '@lit/context';
import { Context } from './Context';
import { property } from 'lit/decorators';
import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';

export class XRMaterial extends XRElement<PBRMaterial> {
  static requiredAttrs: string[] = ['id'];

  @consume({ context: Context.Scene, subscribe: true })
  @property({ attribute: false })
  scene!: Scene;

  @Decorator.property_Color3()
  albedoColor?: Color3;

  @Decorator.property_Number()
  metallic: number = 0.2;

  @Decorator.property_Number()
  roughness: number = 0.8;

  @Decorator.property_Color3()
  emissiveColor?: Color3;

  private _updateMat(): void {
    if (!this.entity) this.entity = new PBRMaterial(this.id, this.scene);

    if (this.albedoColor) this.entity.albedoColor = this.albedoColor;
    if (typeof this.metallic !== 'undefined') this.entity.metallic = this.metallic;
    if (typeof this.roughness !== 'undefined') this.entity.roughness = this.roughness;
    if (this.emissiveColor) this.entity.emissiveColor = this.emissiveColor;
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
    this.entity?.dispose();
    this.entity = null;
  }
}
