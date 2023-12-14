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
  albedoColor: Color3 = Color3.White();

  @Decorator.property('String', 'albedo-texture')
  albedoTexture: string | null = null;

  @Decorator.property('Number')
  metallic: number = 0.2;

  @Decorator.property('Number')
  roughness: number = 0.8;

  @Decorator.property('Color3', 'emissive-color')
  emissiveColor: Color3 = Color3.Black();

  @Decorator.property('Boolean', 'backface-culling')
  backFaceCulling: boolean = false;

  @Decorator.property('Number')
  alpha: number = 1;

  @Decorator.property('Number', 'side-orientation')
  sideOrientation: number = 1;

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

    if (changed.has('albedoColor')) this.entity.albedoColor.copyFrom(this.evaluated.albedoColor);
    if (changed.has('metallic')) this.entity.metallic = this.evaluated.metallic;
    if (changed.has('roughness')) this.entity.roughness = this.evaluated.roughness;
    if (changed.has('emissiveColor')) this.entity.emissiveColor.copyFrom(this.evaluated.emissiveColor);
    if (changed.has('backFaceCulling')) this.entity.backFaceCulling = this.evaluated.backFaceCulling;
    if (changed.has('alpha')) this.entity.alpha = this.evaluated.alpha;
    if (changed.has('sideOrientation')) this.entity.sideOrientation = this.evaluated.sideOrientation;

    if (changed.has('_albedoTexture')) this.entity.albedoTexture = this._albedoTexture;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
