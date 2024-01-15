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
  emissiveIntensity: number | null;
  ambientTexture: string | null;
  ambientTextureStrength: number | null;
  opacityTexture: string | null;
  reflectionTexture: string | null;
  reflectivityTexture: string | null;
  metallicTexture: string | null;
  reflectanceTexture: string | null;
  microSurfaceTexture: string | null;
  bumpTexture: string | null;
  lightmapTexture: string | null;
  refractionTexture: string | null;
  ambientColor: Color3 | null;
  reflectivityColor: Color3 | null;
  reflectionColor: Color3 | null;
  microSurface: number | null; // Added microSurface property
  indexOfRefraction: number | null; // Added indexOfRefraction property
  alphaCutOff: number | null; // Added alphaCutOff property
  parallaxScaleBias: number | null; // Added parallaxScaleBias property
  invertRefractionY: boolean | null;
  linkRefractionWithTransparency: boolean | null;
  useLightmapAsShadowmap: boolean | null;
  useAlphaFromAlbedoTexture: boolean | null;
  forceAlphaTest: boolean | null;
  useSpecularOverAlpha: boolean | null;
  useMicroSurfaceFromReflectivityMapAlpha: boolean | null;
  useRoughnessFromMetallicTextureAlpha: boolean | null;
  useRoughnessFromMetallicTextureGreen: boolean | null;
  useMetallnessFromMetallicTextureBlue: boolean | null;
  useAmbientOcclusionFromMetallicTextureRed: boolean | null;
  useAmbientInGrayScale: boolean | null;
  useAutoMicroSurfaceFromReflectivityMap: boolean | null;
  useRadianceOverAlpha: boolean | null;
  useObjectSpaceNormalMap: boolean | null;
  useParallax: boolean | null;
  useParallaxOcclusion: boolean | null;
  enableSpecularAntiAliasing: boolean | null;
  applyDecalMapAfterDetailMap: boolean | null;
  metallicF0Factor: number | null;
};

const _NumberProperties = [
  'metallic',
  'roughness',
  'emissiveIntensity',
  'ambientTextureStrength',
  'microSurface',
  'indexOfRefraction',
  'alphaCutOff',
  'parallaxScaleBias',
  'metallicF0Factor',
] as const;
const _ColorProperties = ['albedoColor', 'emissiveColor', 'ambientColor', 'reflectivityColor', 'reflectionColor'] as const;
const _BooleanProperties = [
  'unlit',
  'invertRefractionY',
  'linkRefractionWithTransparency',
  'useLightmapAsShadowmap',
  'useAlphaFromAlbedoTexture',
  'forceAlphaTest',
  'useSpecularOverAlpha',
  'useMicroSurfaceFromReflectivityMapAlpha',
  'useRoughnessFromMetallicTextureAlpha',
  'useRoughnessFromMetallicTextureGreen',
  'useMetallnessFromMetallicTextureBlue',
  'useAmbientOcclusionFromMetallicTextureRed',
  'useAmbientInGrayScale',
  'useAutoMicroSurfaceFromReflectivityMap',
  'useRadianceOverAlpha',
  'useObjectSpaceNormalMap',
  'useParallax',
  'useParallaxOcclusion',
  'enableSpecularAntiAliasing',
  'applyDecalMapAfterDetailMap',
] as const;
const _TextureProperties = [
  'albedoTexture',
  'ambientTexture',
  'opacityTexture',
  'reflectionTexture',
  'reflectivityTexture',
  'metallicTexture',
  'reflectanceTexture',
  'microSurfaceTexture',
  'bumpTexture',
  'lightmapTexture',
  'refractionTexture',
] as const;

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
      albedoTexture: mat.albedoTexture ? `[entity-id="${mat.albedoTexture.ID}"]` : null,
      metallic: mat.metallic,
      roughness: mat.roughness,
      emissiveColor: mat.emissiveColor,
      emissiveIntensity: mat.emissiveIntensity,
      unlit: mat.unlit,
      ambientTexture: mat.ambientTexture ? `[entity-id="${mat.ambientTexture.ID}"]` : null,
      ambientTextureStrength: mat.ambientTextureStrength,
      opacityTexture: mat.opacityTexture ? `[entity-id="${mat.opacityTexture.ID}"]` : null,
      reflectionTexture: mat.reflectionTexture ? `[entity-id="${mat.reflectionTexture.ID}"]` : null,
      reflectivityTexture: mat.reflectivityTexture ? `[entity-id="${mat.reflectivityTexture.ID}"]` : null,
      metallicTexture: mat.metallicTexture ? `[entity-id="${mat.metallicTexture.ID}"]` : null,
      reflectanceTexture: mat.reflectanceTexture ? `[entity-id="${mat.reflectanceTexture.ID}"]` : null,
      microSurfaceTexture: mat.microSurfaceTexture ? `[entity-id="${mat.microSurfaceTexture.ID}"]` : null,
      bumpTexture: mat.bumpTexture ? `[entity-id="${mat.bumpTexture.ID}"]` : null,
      lightmapTexture: mat.lightmapTexture ? `[entity-id="${mat.lightmapTexture.ID}"]` : null,
      refractionTexture: mat.refractionTexture ? `[entity-id="${mat.refractionTexture.ID}"]` : null,
      ambientColor: mat.ambientColor,
      reflectivityColor: mat.reflectivityColor,
      reflectionColor: mat.reflectionColor,
      microSurface: mat.microSurface,
      indexOfRefraction: mat.indexOfRefraction,
      alphaCutOff: mat.alphaCutOff,
      parallaxScaleBias: mat.parallaxScaleBias,
      invertRefractionY: mat.invertRefractionY,
      linkRefractionWithTransparency: mat.linkRefractionWithTransparency,
      useLightmapAsShadowmap: mat.useLightmapAsShadowmap,
      useAlphaFromAlbedoTexture: mat.useAlphaFromAlbedoTexture,
      forceAlphaTest: mat.forceAlphaTest,
      useSpecularOverAlpha: mat.useSpecularOverAlpha,
      useMicroSurfaceFromReflectivityMapAlpha: mat.useMicroSurfaceFromReflectivityMapAlpha,
      useRoughnessFromMetallicTextureAlpha: mat.useRoughnessFromMetallicTextureAlpha,
      useRoughnessFromMetallicTextureGreen: mat.useRoughnessFromMetallicTextureGreen,
      useMetallnessFromMetallicTextureBlue: mat.useMetallnessFromMetallicTextureBlue,
      useAmbientOcclusionFromMetallicTextureRed: mat.useAmbientOcclusionFromMetallicTextureRed,
      useAmbientInGrayScale: mat.useAmbientInGrayScale,
      useAutoMicroSurfaceFromReflectivityMap: mat.useAutoMicroSurfaceFromReflectivityMap,
      useRadianceOverAlpha: mat.useRadianceOverAlpha,
      useObjectSpaceNormalMap: mat.useObjectSpaceNormalMap,
      useParallax: mat.useParallax,
      useParallaxOcclusion: mat.useParallaxOcclusion,
      enableSpecularAntiAliasing: mat.enableSpecularAntiAliasing,
      applyDecalMapAfterDetailMap: mat.applyDecalMapAfterDetailMap,
      metallicF0Factor: mat.metallicF0Factor,
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

  @Decorator.property('Number', 'emissive-intensity', null)
  emissiveIntensity: number | null = null;

  @Decorator.property('Boolean', 'unlit', null)
  unlit: boolean | null = null;

  @Decorator.property('String', 'ambient-texture', null)
  ambientTexture: string | null = null;

  @Decorator.property('Number', 'ambient-texture-strength', 1)
  ambientTextureStrength: number | null = null;

  @Decorator.property('String', 'opacity-texture', null)
  opacityTexture: string | null = null;

  @Decorator.property('String', 'reflection-texture', null)
  reflectionTexture: string | null = null;

  @Decorator.property('String', 'reflectivity-texture', null)
  reflectivityTexture: string | null = null;

  @Decorator.property('String', 'metallic-texture', null)
  metallicTexture: string | null = null;

  @Decorator.property('String', 'reflectance-texture', null)
  reflectanceTexture: string | null = null;

  @Decorator.property('String', 'micro-surface-texture', null)
  microSurfaceTexture: string | null = null;

  @Decorator.property('String', 'bump-texture', null)
  bumpTexture: string | null = null;

  @Decorator.property('String', 'lightmap-texture', null)
  lightmapTexture: string | null = null;

  @Decorator.property('String', 'refraction-texture', null)
  refractionTexture: string | null = null;

  @Decorator.property('Color3', 'ambient-color', null)
  ambientColor: Color3 | null = null;

  @Decorator.property('Color3', 'reflectivity-color', null)
  reflectivityColor: Color3 | null = null;

  @Decorator.property('Color3', 'reflection-color', new Color3(1, 1, 1))
  reflectionColor: Color3 | null = null;

  @Decorator.property('Number', 'micro-surface', 1)
  microSurface: number | null = null;

  @Decorator.property('Number', 'index-of-refraction', null)
  indexOfRefraction: number | null = null;

  @Decorator.property('Number', 'alpha-cut-off', null)
  alphaCutOff: number | null = null;

  @Decorator.property('Number', 'parallax-scale-bias', null)
  parallaxScaleBias: number | null = null;

  @Decorator.property('Boolean', 'invert-refraction-y', null)
  invertRefractionY: boolean | null = null;

  @Decorator.property('Boolean', 'link-refraction-with-transparency', null)
  linkRefractionWithTransparency: boolean | null = null;

  @Decorator.property('Boolean', 'use-lightmap-as-shadowmap', null)
  useLightmapAsShadowmap: boolean | null = null;

  @Decorator.property('Boolean', 'use-alpha-from-albedo-texture', true)
  useAlphaFromAlbedoTexture: boolean | null = null;

  @Decorator.property('Boolean', 'force-alpha-test', null)
  forceAlphaTest: boolean | null = null;

  @Decorator.property('Boolean', 'use-specular-over-alpha', null)
  useSpecularOverAlpha: boolean | null = null;

  @Decorator.property('Boolean', 'use-micro-surface-from-reflectivity-map-alpha', null)
  useMicroSurfaceFromReflectivityMapAlpha: boolean | null = null;

  @Decorator.property('Boolean', 'use-roughness-from-metallic-texture-alpha', null)
  useRoughnessFromMetallicTextureAlpha: boolean | null = null;

  @Decorator.property('Boolean', 'use-roughness-from-metallic-texture-green', null)
  useRoughnessFromMetallicTextureGreen: boolean | null = null;

  @Decorator.property('Boolean', 'use-metallness-from-metallic-texture-blue', null)
  useMetallnessFromMetallicTextureBlue: boolean | null = null;

  @Decorator.property('Boolean', 'use-ambient-occlusion-from-metallic-texture-red', null)
  useAmbientOcclusionFromMetallicTextureRed: boolean | null = null;

  @Decorator.property('Boolean', 'use-ambient-in-gray-scale', null)
  useAmbientInGrayScale: boolean | null = null;

  @Decorator.property('Boolean', 'use-auto-micro-surface-from-reflectivity-map', null)
  useAutoMicroSurfaceFromReflectivityMap: boolean | null = null;

  @Decorator.property('Boolean', 'use-radiance-over-alpha', null)
  useRadianceOverAlpha: boolean | null = null;

  @Decorator.property('Boolean', 'use-object-space-normal-map', null)
  useObjectSpaceNormalMap: boolean | null = null;

  @Decorator.property('Boolean', 'use-parallax', null)
  useParallax: boolean | null = null;

  @Decorator.property('Boolean', 'use-parallax-occlusion', null)
  useParallaxOcclusion: boolean | null = null;

  @Decorator.property('Boolean', 'enable-specular-anti-aliasing', null)
  enableSpecularAntiAliasing: boolean | null = null;

  @Decorator.property('Boolean', 'apply-decal-map-after-detail-map', null)
  applyDecalMapAfterDetailMap: boolean | null = null;

  @Decorator.property('Number', 'metallic-f0-factor', null)
  metallicF0Factor: number | null = null;

  @state()
  _albedoTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _ambientTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _opacityTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _reflectionTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _reflectivityTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _metallicTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _reflectanceTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _microSurfaceTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _bumpTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _lightmapTexture: (HTMLElement & ITextureImpl) | null = null;

  @state()
  _refractionTexture: (HTMLElement & ITextureImpl) | null = null;

  constructor() {
    super();

    new TagRefController(this, 'albedoTexture', '_albedoTexture', 'xr-texture');
    new TagRefController(this, 'ambientTexture', '_ambientTexture', 'xr-texture');
    new TagRefController(this, 'opacityTexture', '_opacityTexture', 'xr-texture');
    new TagRefController(this, 'reflectionTexture', '_reflectionTexture', 'xr-texture');
    new TagRefController(this, 'reflectivityTexture', '_reflectivityTexture', 'xr-texture');
    new TagRefController(this, 'metallicTexture', '_metallicTexture', 'xr-texture');
    new TagRefController(this, 'reflectanceTexture', '_reflectanceTexture', 'xr-texture');
    new TagRefController(this, 'microSurfaceTexture', '_microSurfaceTexture', 'xr-texture');
    new TagRefController(this, 'bumpTexture', '_bumpTexture', 'xr-texture');
    new TagRefController(this, 'lightmapTexture', '_lightmapTexture', 'xr-texture');
    new TagRefController(this, 'refractionTexture', '_refractionTexture', 'xr-texture');
    new MaterialController(this);
  }

  connected(): void {
    super.connected();

    if (!this.entityDelegated) {
      this.entity = new PBRMaterial(this.id, this.scene);
      Tags.AddTagsTo(this.entity, 'self-created');
    }
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    // process all number's properties
    for (const _propName of _NumberProperties) {
      const _propValue = this.evaluated[_propName];
      if (changed.has(_propName) && _propValue !== null) {
        this.entity[_propName] = _propValue;
      }
    }

    // process all boolean's properties
    for (const _propName of _BooleanProperties) {
      const _propValue = this.evaluated[_propName];
      if (changed.has(_propName) && _propValue !== null) {
        this.entity[_propName] = _propValue;
      }
    }

    // process all color's properties
    for (const _propName of _ColorProperties) {
      const _propValue = this.evaluated[_propName];
      if (changed.has(_propName) && _propValue !== null) {
        this.entity[_propName].copyFrom(_propValue);
      }
    }

    // process all texture's properties
    for (const _texName of _TextureProperties) {
      if (changed.has('_' + _texName)) {
        const _texEle: (HTMLElement & ITextureImpl) | null = (this as any)['_' + _texName];
        this.entity[_texName] = _texEle?.entity || (this.entityDelegated ? this.entity[_texName] : null);
      }
    }
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
