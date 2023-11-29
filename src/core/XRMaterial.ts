import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { XRElement } from './XRElement';
import type { XRScene } from './XRScene';
import { Color3 } from '@babylonjs/core/Maths/math.color';

export class XRMaterial extends XRElement {
  static requiredAttrs: string[] = ['id'];

  private _mat: PBRMaterial | null = null;

  get material() {
    return this._mat;
  }

  get name() {
    return 'XRMaterial';
  }

  get sceneEle() {
    return this.closest<XRScene>('xr-scene')!;
  }

  private _updateMat(): void {
    if (!this._mat) this._mat = new PBRMaterial(this.id, this.sceneEle.scene!);

    if (this.hasAttribute('albedoColor')) this._mat.albedoColor = Color3.FromHexString(this.getAttribute('albedoColor')!);
    if (this.hasAttribute('metallic')) this._mat.metallic = parseFloat(this.getAttribute('metallic')!);
    if (this.hasAttribute('roughness')) this._mat.roughness = parseFloat(this.getAttribute('roughness')!);
    if (this.hasAttribute('emissiveColor')) this._mat.emissiveColor = Color3.FromHexString(this.getAttribute('emissiveColor')!);
    if (this.hasAttribute('emissiveIntensity')) this._mat.emissiveIntensity = parseFloat(this.getAttribute('emissiveIntensity')!);
    if (this.hasAttribute('alpha')) this._mat.alpha = parseFloat(this.getAttribute('alpha')!);
    if (this.hasAttribute('alphaMode')) this._mat.alphaMode = parseFloat(this.getAttribute('alphaMode')!);
    if (this.hasAttribute('backFaceCulling')) this._mat.backFaceCulling = this.getAttribute('backFaceCulling') === 'true';
  }

  init(): void {
    super.init();
    this._updateMat();
  }

  update(attr: string | null, oldVal: string | null, newVal: string | null): void {
    this._updateMat();
  }

  remove(): void {
    super.remove();
    this._mat?.dispose();
    this._mat = null;
  }
}
