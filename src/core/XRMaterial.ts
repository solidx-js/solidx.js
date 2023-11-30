import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { XRElement } from './XRElement';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { consume } from '@lit/context';
import { Context } from './Context';
import { property } from 'lit/decorators';
import { Scene } from '@babylonjs/core/scene';

export class XRMaterial extends XRElement {
  static requiredAttrs: string[] = ['id'];

  private _mat: PBRMaterial | null = null;

  @consume({ context: Context.Scene, subscribe: true })
  @property({ attribute: false })
  scene!: Scene;

  @property({
    converter: {
      fromAttribute: (value: string) => Color3.FromHexString(value),
      toAttribute: (value: Color3) => value.toHexString(),
    },
  })
  albedoColor?: Color3;

  @property({ type: Number })
  metallic?: number;

  @property({ type: Number })
  roughness?: number;

  @property({
    converter: {
      fromAttribute: (value: string) => Color3.FromHexString(value),
      toAttribute: (value: Color3) => value.toHexString(),
    },
  })
  emissiveColor?: Color3;

  get material() {
    return this._mat;
  }

  get name() {
    return 'XRMaterial';
  }

  private _updateMat(): void {
    if (!this._mat) this._mat = new PBRMaterial(this.id, this.scene);

    if (this.albedoColor) this._mat.albedoColor = this.albedoColor;
    if (typeof this.metallic !== 'undefined') this._mat.metallic = this.metallic;
    if (typeof this.roughness !== 'undefined') this._mat.roughness = this.roughness;
    if (this.emissiveColor) this._mat.emissiveColor = this.emissiveColor;
  }

  init(): void {
    super.init();
    this._updateMat();
  }

  render() {
    this._updateMat();
  }

  remove(): void {
    super.remove();
    this._mat?.dispose();
    this._mat = null;
  }
}
