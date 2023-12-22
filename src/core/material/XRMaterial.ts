import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController, TagRefController } from '../controller';
import { state } from 'lit/decorators.js';
import { XRBaseMaterial } from './XRBaseMaterial';
import { IMaterialImpl, ITextureImpl } from '../impl';

export class XRMaterial extends XRBaseMaterial<PBRMaterial> implements IMaterialImpl {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Color3', 'albedo-color', Color3.White())
  albedoColor = Color3.White();

  @Decorator.property('String', 'albedo-texture', null)
  albedoTexture = null;

  @Decorator.property('Number', 'metallic', 0.2)
  metallic = 0.2;

  @Decorator.property('Number', 'roughness', 0.8)
  roughness = 0.8;

  @Decorator.property('Color3', 'emissive-color', Color3.Black())
  emissiveColor = Color3.Black();

  @Decorator.property('Boolean', 'unlit', false)
  unlit = false;

  @state()
  _albedoTexture: (HTMLElement & ITextureImpl) | null = null;

  constructor() {
    super();

    new TagRefController(this, 'albedoTexture', '_albedoTexture', 'xr-texture');
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

    if (changed.has('_albedoTexture')) this.entity.albedoTexture = this._albedoTexture?.entity || null;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
