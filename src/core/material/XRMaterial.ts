import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController, TagRefController } from '../controller';
import { state } from 'lit/decorators.js';
import { XRBaseMaterial } from './XRBaseMaterial';
import { IMaterialImpl, ITextureImpl } from '../impl';
import { Tags } from '@babylonjs/core/Misc/tags';
import { ElementRegistry } from '../../registry';

export type IXRMaterialProps = IMaterialImpl & {
  albedoColor: Color3 | null;
  albedoTexture: string | null;
  metallic: number | null;
  roughness: number | null;
  emissiveColor: Color3 | null;
  unlit: boolean | null;
};

export class XRMaterial extends XRBaseMaterial<PBRMaterial> implements IXRMaterialProps {
  static getPropsFrom(mat: PBRMaterial) {
    const props: IXRMaterialProps = {
      entity: mat,
      entityDelegated: null,
      alpha: mat.alpha,
      alphaMode: mat.transparencyMode,
      backFaceCulling: mat.backFaceCulling,
      disableDepthWrite: mat.disableDepthWrite,
      sideOrientation: mat.sideOrientation,
      wireframe: mat.wireframe,
      zOffset: mat.zOffset,
      albedoColor: mat.albedoColor,
      albedoTexture: mat._albedoTexture ? `[entity-id="${mat._albedoTexture.ID}"]` : null,
      metallic: mat.metallic,
      roughness: mat.roughness,
      emissiveColor: mat.emissiveColor,
      unlit: mat.unlit,
    };

    return props;
  }

  @Decorator.property('Color3', 'albedo-color', new Color3(1, 1, 1))
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

    if (!this.entityDelegated) {
      this.entity = new PBRMaterial(this.id, this.scene);
      this.entity.useAlphaFromAlbedoTexture = true;
      Tags.AddTagsTo(this.entity, 'self-created');
    }
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    const { albedoColor, metallic, roughness, emissiveColor, unlit } = this.evaluated;
    const _albedoTexture = this._albedoTexture;

    if (changed.has('albedoColor') && albedoColor !== null) this.entity.albedoColor.copyFrom(albedoColor);
    if (changed.has('metallic') && metallic !== null) this.entity.metallic = metallic;
    if (changed.has('roughness') && roughness !== null) this.entity.roughness = roughness;
    if (changed.has('emissiveColor') && emissiveColor !== null) this.entity.emissiveColor.copyFrom(emissiveColor);
    if (changed.has('unlit') && unlit !== null) this.entity.unlit = unlit;

    if (changed.has('_albedoTexture'))
      this.entity.albedoTexture = _albedoTexture?.entity || (this.entityDelegated ? this.entity.albedoTexture : null);
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) {
      if (Tags.MatchesQuery(this.entity, 'self-created')) this.entity.dispose();
      this.entity = null;
    }
  }
}

ElementRegistry.Instance.register('xr-material', XRMaterial as any);
