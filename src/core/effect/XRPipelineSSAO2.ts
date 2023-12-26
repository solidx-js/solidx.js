import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';

export class XRPipelineSSAO2 extends XRSceneScopeElement<SSAO2RenderingPipeline> {
  @Decorator.property('Number', 'samples', 32)
  samples = 32;

  @Decorator.property('Number', 'radius', 5)
  radius = 1;

  @Decorator.property('Number', 'total-strength', 1)
  totalStrength = 1;

  @Decorator.property('Number', 'max-z', 100)
  maxZ = 100;

  connected(): void {
    super.connected();

    this.entity = new SSAO2RenderingPipeline(this.id, this.scene, 1, this.scene.cameras);
    this.entity.bypassBlur = false;
    this.entity.expensiveBlur = false;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('samples')) this.entity.samples = this.evaluated.samples;
    if (changed.has('radius')) this.entity.radius = this.evaluated.radius;
    if (changed.has('totalStrength')) this.entity.totalStrength = this.evaluated.totalStrength;
    if (changed.has('maxZ')) this.entity.maxZ = this.evaluated.maxZ;
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) {
      this.entity.dispose();
      this.entity = null;
    }
  }
}
