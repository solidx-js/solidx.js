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
import { DirectionalLightFrustumViewer } from '@babylonjs/core/Debug/directionalLightFrustumViewer';

export class XRBaseLight<T extends Light> extends XRSceneScopeElement<T> {
  @Decorator.property('Color3', 'diffuse', null)
  diffuse: Color3 | null = null;

  @Decorator.property('Number', 'intensity', null)
  intensity: number | null = null;

  @Decorator.property('String', 'shadow-caster', null)
  shadowCaster: string | null = null;

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

        _sg.usePercentageCloserFiltering = true;
        _sg.filteringQuality = ShadowGenerator.QUALITY_MEDIUM;
        _sg.transparencyShadow = true;

        // const v = new DirectionalLightFrustumViewer(entity as any, this.scene.activeCamera!);
        // v.show();
        // v.update();
      } else {
        entity.shadowEnabled = false;
        entity.getShadowGenerator()?.dispose();
      }
    }
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
