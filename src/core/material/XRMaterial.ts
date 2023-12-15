import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController, RefController2 } from '../controller';
import { Texture } from '@babylonjs/core/Materials/Textures/texture';
import { state } from 'lit/decorators.js';
import { XRBaseMaterial } from './XRBaseMaterial';

export class XRMaterial extends XRBaseMaterial<PBRMaterial> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Color3', 'albedo-color', Color3.White())
  albedoColor!: Color3;

  @Decorator.property('String', 'albedo-texture')
  albedoTexture!: string | null;

  @Decorator.property('Number', 'metallic', 0.2)
  metallic!: number;

  @Decorator.property('Number', 'roughness', 0.8)
  roughness!: number;

  @Decorator.property('Color3', 'emissive-color', Color3.Black())
  emissiveColor!: Color3;

  @Decorator.property('Boolean', 'unlit', false)
  unlit!: boolean;

  @state()
  _albedoTexture: Texture | null = null;

  constructor() {
    super();

    new RefController2(this, 'texture', 'albedoTexture', '_albedoTexture');
    new MaterialController(this);
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
    if (changed.has('unlit')) this.entity.unlit = this.evaluated.unlit;

    if (changed.has('_albedoTexture')) this.entity.albedoTexture = this._albedoTexture;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
