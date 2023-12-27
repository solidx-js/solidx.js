import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController, TagRefController } from '../controller';
import { state } from 'lit/decorators.js';
import { XRBaseMaterial } from './XRBaseMaterial';
import { IMaterialImpl, ITextureImpl } from '../impl';

export class XRMaterial extends XRBaseMaterial<PBRMaterial> implements IMaterialImpl {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Color3', 'albedo-color', null)
  albedoColor: Color3 | null = null;

  @Decorator.property('String', 'albedo-texture', null)
  albedoTexture: string | null = null;

  @Decorator.property('Number', 'metallic', 0.2)
  metallic: number | null = null;

  @Decorator.property('Number', 'roughness', 0.8)
  roughness: number | null = null;

  @Decorator.property('Color3', 'emissive-color', null)
  emissiveColor: Color3 | null = null;

  @Decorator.property('Boolean', 'unlit', null)
  unlit: boolean | null = null;

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

    if (changed.has('albedoColor') && this.evaluated.albedoColor !== null) this.entity.albedoColor.copyFrom(this.evaluated.albedoColor);
    if (changed.has('metallic')) this.entity.metallic = this.evaluated.metallic;
    if (changed.has('roughness')) this.entity.roughness = this.evaluated.roughness;
    if (changed.has('emissiveColor') && this.evaluated.emissiveColor !== null)
      this.entity.emissiveColor.copyFrom(this.evaluated.emissiveColor);
    if (changed.has('unlit') && this.evaluated.unlit !== null) this.entity.unlit = this.evaluated.unlit;

    if (changed.has('_albedoTexture')) this.entity.albedoTexture = this._albedoTexture?.entity || null;
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
