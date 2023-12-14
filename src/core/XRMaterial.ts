import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from './Decorator';
import { RefController2 } from './controller';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { state } from 'lit/decorators.js';

export class XRMaterial extends XRSceneScopeElement<PBRMaterial> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Color3', 'albedo-color')
  albedoColor?: Color3;

  @Decorator.property('String', 'albedo-texture')
  albedoTexture: string | null = null;

  @Decorator.property('Number')
  metallic: number = 0.2;

  @Decorator.property('Number')
  roughness: number = 0.8;

  @Decorator.property('Color3', 'emissive-color')
  emissiveColor?: Color3;

  @Decorator.property('Boolean', 'backface-culling')
  backFaceCulling: boolean = false;

  @Decorator.property('Number')
  alpha: number = 1;

  @state()
  _albedoTexture: Texture | null = null;

  constructor() {
    super();

    new RefController2(this, 'texture', 'albedoTexture', '_albedoTexture');
  }

  connected(): void {
    super.connected();

    this.entity = new PBRMaterial(this.id, this.scene);
    this.entity.useAlphaFromAlbedoTexture = true;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (this.albedoColor) this.entity.albedoColor = this.albedoColor;
    if (typeof this.metallic !== 'undefined') this.entity.metallic = this.metallic;
    if (typeof this.roughness !== 'undefined') this.entity.roughness = this.roughness;
    if (this.emissiveColor) this.entity.emissiveColor = this.emissiveColor;
    if (typeof this.backFaceCulling !== 'undefined') this.entity.backFaceCulling = this.backFaceCulling;
    if (typeof this.alpha !== 'undefined') this.entity.alpha = this.alpha;

    this.entity.albedoTexture = this._albedoTexture;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
