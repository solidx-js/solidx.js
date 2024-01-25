import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Decorator } from '../Decorator';
import { MaterialController, TagRefController } from '../controller';
import { state } from 'lit/decorators.js';
import { XRBaseMaterial } from './XRBaseMaterial';
import { IMaterialImpl, ITextureImpl } from '../impl';
import { Tags } from '@babylonjs/core/Misc/tags';
import { ElementRegistry, PrimitiveMap, registerElement } from '../../registry';
import { IDataTypeMap, URIUtil } from '../../util';

export type IXRMaterialProps = IMaterialImpl & {
  albedoColor: Color3 | null;
  albedoTexture: IDataTypeMap['URI'] | null;
  transparencyMode: number | null;
  metallic: number | null;
  roughness: number | null;
  emissiveColor: Color3 | null;
  unlit: boolean | null;
  emissiveIntensity: number | null;
  ambientTexture: IDataTypeMap['URI'] | null;
  ambientTextureStrength: number | null;
  opacityTexture: IDataTypeMap['URI'] | null;
  reflectionTexture: IDataTypeMap['URI'] | null;
  reflectivityTexture: IDataTypeMap['URI'] | null;
  metallicTexture: IDataTypeMap['URI'] | null;
  reflectanceTexture: IDataTypeMap['URI'] | null;
  microSurfaceTexture: IDataTypeMap['URI'] | null;
  bumpTexture: IDataTypeMap['URI'] | null;
  lightmapTexture: IDataTypeMap['URI'] | null;
  refractionTexture: IDataTypeMap['URI'] | null;
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
  'transparencyMode',
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

@registerElement('xr-material')
export class XRMaterial extends XRBaseMaterial<PBRMaterial> implements IXRMaterialProps {
  static getPropsFrom(mat: PBRMaterial) {
    const props: IXRMaterialProps = {
      entity: mat,
      entityDelegated: null,
      alpha: mat.alpha,
      alphaMode: mat.alphaMode,
      transparencyMode: mat.transparencyMode,
      backFaceCulling: mat.backFaceCulling,
      disableDepthWrite: mat.disableDepthWrite,
      sideOrientation: mat.sideOrientation,
      wireframe: mat.wireframe,
      zOffset: mat.zOffset,
      albedoColor: mat.albedoColor.toGammaSpace(),
      albedoTexture: mat.albedoTexture ? URIUtil.parse(`[entity-id="${mat.albedoTexture.ID}"]`) : null,
      metallic: mat.metallic,
      roughness: mat.roughness,
      emissiveColor: mat.emissiveColor.toGammaSpace(),
      emissiveIntensity: mat.emissiveIntensity,
      unlit: mat.unlit,
      ambientTexture: mat.ambientTexture ? URIUtil.parse(`[entity-id="${mat.ambientTexture.ID}"]`) : null,
      ambientTextureStrength: mat.ambientTextureStrength,
      opacityTexture: mat.opacityTexture ? URIUtil.parse(`[entity-id="${mat.opacityTexture.ID}"]`) : null,
      reflectionTexture: mat.reflectionTexture ? URIUtil.parse(`[entity-id="${mat.reflectionTexture.ID}"]`) : null,
      reflectivityTexture: mat.reflectivityTexture ? URIUtil.parse(`[entity-id="${mat.reflectivityTexture.ID}"]`) : null,
      metallicTexture: mat.metallicTexture ? URIUtil.parse(`[entity-id="${mat.metallicTexture.ID}"]`) : null,
      reflectanceTexture: mat.reflectanceTexture ? URIUtil.parse(`[entity-id="${mat.reflectanceTexture.ID}"]`) : null,
      microSurfaceTexture: mat.microSurfaceTexture ? URIUtil.parse(`[entity-id="${mat.microSurfaceTexture.ID}"]`) : null,
      bumpTexture: mat.bumpTexture ? URIUtil.parse(`[entity-id="${mat.bumpTexture.ID}"]`) : null,
      lightmapTexture: mat.lightmapTexture ? URIUtil.parse(`[entity-id="${mat.lightmapTexture.ID}"]`) : null,
      refractionTexture: mat.refractionTexture ? URIUtil.parse(`[entity-id="${mat.refractionTexture.ID}"]`) : null,
      ambientColor: mat.ambientColor.toGammaSpace(),
      reflectivityColor: mat.reflectivityColor.toGammaSpace(),
      reflectionColor: mat.reflectionColor.toGammaSpace(),
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

  @Decorator.property('Number', 'transparency-mode', 2, { title: '透明模式' })
  transparencyMode: number | null = null;

  @Decorator.property('Color3', 'albedo-color', new Color3(1, 1, 1), { title: '漫反射颜色' })
  albedoColor: Color3 | null = null;

  @Decorator.property('URI', 'albedo-texture', null, { title: '漫反射贴图' })
  albedoTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('Number', 'metallic', 0.2, { title: '金属度' })
  metallic: number | null = null;

  @Decorator.property('Number', 'roughness', 0.8, { title: '粗糙度' })
  roughness: number | null = null;

  @Decorator.property('Color3', 'emissive-color', null, { title: '自发光颜色' })
  emissiveColor: Color3 | null = null;

  @Decorator.property('Number', 'emissive-intensity', null, { title: '自发光强度' })
  emissiveIntensity: number | null = null;

  @Decorator.property('Boolean', 'unlit', null, { title: '不受光照影响' })
  unlit: boolean | null = null;

  @Decorator.property('URI', 'ambient-texture', null, { title: '环境遮蔽贴图' })
  ambientTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('Number', 'ambient-texture-strength', 1, { title: '环境遮蔽贴图强度' })
  ambientTextureStrength: number | null = null;

  @Decorator.property('URI', 'opacity-texture', null, { title: '透明贴图' })
  opacityTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('URI', 'reflection-texture', null, {
    title: '反射贴图',
    doc:
      process.env.NODE_ENV === 'development'
        ? '这个纹理用于模拟物体表面的环境反射。它通常是一个包含环境场景的立方体贴图（cube map），用于模拟物体表面反射环境中的物体。'
        : '',
  })
  reflectionTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('URI', 'reflectivity-texture', null, {
    title: '反射率贴图',
    doc:
      process.env.NODE_ENV === 'development'
        ? '这个纹理用于模拟物体表面的反射率，也就是物体表面反射光线的能力。它通常是一个灰度贴图，其中的每个像素值表示对应表面点的反射率。反射率越高，物体表面反射的光线越多，看起来就越亮或者更像金属。'
        : '',
  })
  reflectivityTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('URI', 'metallic-texture', null, { title: '金属度贴图' })
  metallicTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('URI', 'reflectance-texture', null, {
    title: '漫反射率贴图',
    doc:
      process.env.NODE_ENV === 'development'
        ? '这个纹理通常用于模拟物体表面的漫反射率，也就是物体表面散射光线的能力。它通常是一个颜色贴图，其中的每个像素值表示对应表面点的漫反射颜色。漫反射率越高，物体表面散射的光线越多，看起来就越亮。'
        : '',
  })
  reflectanceTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('String', 'micro-surface-texture', null, { title: '微表面贴图' })
  microSurfaceTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('URI', 'bump-texture', null, { title: '法线贴图' })
  bumpTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('URI', 'lightmap-texture', null, { title: '光照贴图' })
  lightmapTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('URI', 'refraction-texture', null, { title: '折射贴图' })
  refractionTexture: IDataTypeMap['URI'] | null = null;

  @Decorator.property('Color3', 'ambient-color', null, { title: '环境遮蔽颜色' })
  ambientColor: Color3 | null = null;

  @Decorator.property('Color3', 'reflectivity-color', null)
  reflectivityColor: Color3 | null = null;

  @Decorator.property('Color3', 'reflection-color', new Color3(1, 1, 1))
  reflectionColor: Color3 | null = null;

  @Decorator.property('Number', 'micro-surface', 1)
  microSurface: number | null = null;

  @Decorator.property('Number', 'index-of-refraction', null, { title: '折射率' })
  indexOfRefraction: number | null = null;

  @Decorator.property('Number', 'alpha-cut-off', null, { title: '透明度截断' })
  alphaCutOff: number | null = null;

  @Decorator.property('Number', 'parallax-scale-bias', null, { title: '视差偏移' })
  parallaxScaleBias: number | null = null;

  @Decorator.property('Boolean', 'invert-refraction-y', null, { title: '反转折射贴图的 Y 轴' })
  invertRefractionY: boolean | null = null;

  @Decorator.property('Boolean', 'link-refraction-with-transparency', null, { title: '将折射与透明度关联' })
  linkRefractionWithTransparency: boolean | null = null;

  @Decorator.property('Boolean', 'use-lightmap-as-shadowmap', null, { title: '使用光照贴图作为阴影贴图' })
  useLightmapAsShadowmap: boolean | null = null;

  @Decorator.property('Boolean', 'use-alpha-from-albedo-texture', true, { title: '使用漫反射贴图的 alpha 通道' })
  useAlphaFromAlbedoTexture: boolean | null = null;

  @Decorator.property('Boolean', 'force-alpha-test', null, { title: '强制 alpha 测试' })
  forceAlphaTest: boolean | null = null;

  @Decorator.property('Boolean', 'use-specular-over-alpha', true, { title: '是否在透明度（Alpha）上应用高光（Specular）效果' })
  useSpecularOverAlpha: boolean | null = null;

  @Decorator.property('Boolean', 'use-micro-surface-from-reflectivity-map-alpha', null)
  useMicroSurfaceFromReflectivityMapAlpha: boolean | null = null;

  @Decorator.property('Boolean', 'use-roughness-from-metallic-texture-alpha', true, { title: '使用金属度贴图的 alpha 通道作为粗糙度' })
  useRoughnessFromMetallicTextureAlpha: boolean | null = null;

  @Decorator.property('Boolean', 'use-roughness-from-metallic-texture-green', null, { title: '使用金属度贴图的绿色通道作为粗糙度' })
  useRoughnessFromMetallicTextureGreen: boolean | null = null;

  @Decorator.property('Boolean', 'use-metallness-from-metallic-texture-blue', null, { title: '使用金属度贴图的蓝色通道作为金属度' })
  useMetallnessFromMetallicTextureBlue: boolean | null = null;

  @Decorator.property('Boolean', 'use-ambient-occlusion-from-metallic-texture-red', null, { title: '使用金属度贴图的红色通道作为环境遮蔽' })
  useAmbientOcclusionFromMetallicTextureRed: boolean | null = null;

  @Decorator.property('Boolean', 'use-ambient-in-gray-scale', null, { title: '仅在其红色通道中包含环境遮蔽信息' })
  useAmbientInGrayScale: boolean | null = null;

  @Decorator.property('Boolean', 'use-auto-micro-surface-from-reflectivity-map', null, { title: '使用反射率贴图自动计算微表面' })
  useAutoMicroSurfaceFromReflectivityMap: boolean | null = null;

  @Decorator.property('Boolean', 'use-radiance-over-alpha', true)
  useRadianceOverAlpha: boolean | null = null;

  @Decorator.property('Boolean', 'use-object-space-normal-map', null, { title: '使用物体空间法线贴图' })
  useObjectSpaceNormalMap: boolean | null = null;

  @Decorator.property('Boolean', 'use-parallax', null, { title: '启用视差' })
  useParallax: boolean | null = null;

  @Decorator.property('Boolean', 'use-parallax-occlusion', null, { title: '启用视差遮挡' })
  useParallaxOcclusion: boolean | null = null;

  @Decorator.property('Boolean', 'enable-specular-anti-aliasing', null, { title: '启用高光抗锯齿' })
  enableSpecularAntiAliasing: boolean | null = null;

  @Decorator.property('Boolean', 'apply-decal-map-after-detail-map', null, { title: '在细节贴图之后应用贴花贴图' })
  applyDecalMapAfterDetailMap: boolean | null = null;

  @Decorator.property('Number', 'metallic-f0-factor', null, { min: 0, max: 1, step: 0.1, title: '菲涅尔系数' })
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

    new TagRefController(this, 'albedoTexture', '_albedoTexture', PrimitiveMap.texture);
    new TagRefController(this, 'ambientTexture', '_ambientTexture', PrimitiveMap.texture);
    new TagRefController(this, 'opacityTexture', '_opacityTexture', PrimitiveMap.texture);
    new TagRefController(this, 'reflectionTexture', '_reflectionTexture', PrimitiveMap.texture);
    new TagRefController(this, 'reflectivityTexture', '_reflectivityTexture', PrimitiveMap.texture);
    new TagRefController(this, 'metallicTexture', '_metallicTexture', PrimitiveMap.texture);
    new TagRefController(this, 'reflectanceTexture', '_reflectanceTexture', PrimitiveMap.texture);
    new TagRefController(this, 'microSurfaceTexture', '_microSurfaceTexture', PrimitiveMap.texture);
    new TagRefController(this, 'bumpTexture', '_bumpTexture', PrimitiveMap.texture);
    new TagRefController(this, 'lightmapTexture', '_lightmapTexture', PrimitiveMap.texture);
    new TagRefController(this, 'refractionTexture', '_refractionTexture', PrimitiveMap.texture);
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
        _propValue.toLinearSpaceToRef(this.entity[_propName]); // 用户输入的颜色值是 sRGB，需要转换到线性空间(bjs 颜色值存的是线性空间)
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
