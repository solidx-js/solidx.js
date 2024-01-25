import { Decorator } from '../Decorator';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Light } from '@babylonjs/core/Lights/light';
import { Color3 } from '@babylonjs/core/Maths/math';
import { TagListRefController } from '../controller';
import { state } from 'lit/decorators.js';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { ShadowGenerator } from '@babylonjs/core/Lights/Shadows/shadowGenerator';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { PointLight } from '@babylonjs/core/Lights/pointLight';

export class XRBaseLight<T extends Light> extends XRSceneScopeElement<T> {
  @Decorator.property('Color3', 'diffuse', Color3.White(), { title: '漫反射颜色' })
  diffuse: Color3 | null = null;

  @Decorator.property('Number', 'intensity', 1, { min: 0, step: 0.1, title: '强度' })
  intensity: number | null = null;

  @Decorator.property('String', 'shadow-caster', null, { title: '阴影投射源' })
  shadowCaster: string | null = null;

  @Decorator.property('Number', 'shadow-caster-filtering-quality', 1, { min: 0, max: 2, step: 1, title: '阴影投射过滤质量' })
  shadowCasterFilteringQuality: number | null = null;

  @Decorator.property('Number', 'shadow-caster-bias', 0.01, { min: 0, step: 0.01, title: '阴影投射偏移' })
  shadowCasterBias: number | null = null;

  @Decorator.property('Number', 'shadow-caster-normal-bias', 0.01, { min: 0, step: 0.01, title: '阴影投射法线偏移' })
  shadowCasterNormalBias: number | null = null;

  @state()
  _shadowCaster: Array<HTMLElement & { entity: Mesh | null }> | null = null;

  constructor() {
    super();

    new TagListRefController(this, 'shadowCaster', '_shadowCaster');
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    const entity = this.entity;
    const { diffuse, intensity } = this.evaluated;

    if (changed.has('diffuse') && diffuse) entity.diffuse.copyFrom(diffuse);
    if (changed.has('intensity') && typeof intensity === 'number') entity.intensity = intensity;

    // 阴影
    if (changed.has('_shadowCaster') && (entity instanceof DirectionalLight || entity instanceof PointLight)) {
      if (this._shadowCaster && this._shadowCaster.length) {
        entity.shadowEnabled = true;

        const _sg: ShadowGenerator = (entity.getShadowGenerator() as any) || new ShadowGenerator(1024, entity, false);

        const renderList = this._shadowCaster.map(d => d.entity).filter(d => d) as Mesh[];
        _sg.getShadowMap()!.renderList = renderList;

        this._reloadShadowGeneratorArgs();
      } else {
        entity.shadowEnabled = false;
        entity.getShadowGenerator()?.dispose();
      }
    }

    if (changed.has('shadowCasterFilteringQuality') || changed.has('shadowCasterBias') || changed.has('shadowCasterNormalBias')) {
      this._reloadShadowGeneratorArgs();
    }
  }

  private _reloadShadowGeneratorArgs(): void {
    const entity = this.entity;
    if (!(entity instanceof DirectionalLight || entity instanceof PointLight)) return;

    const sg = entity.getShadowGenerator() as ShadowGenerator;
    if (!sg) return;

    // 默认使用 PCF
    sg.usePercentageCloserFiltering = true;

    const { shadowCasterFilteringQuality, shadowCasterBias, shadowCasterNormalBias } = this.evaluated;

    if (shadowCasterFilteringQuality !== null) sg.filteringQuality = shadowCasterFilteringQuality;
    if (shadowCasterBias !== null) sg.bias = shadowCasterBias;
    if (shadowCasterNormalBias !== null) sg.normalBias = shadowCasterNormalBias;
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
