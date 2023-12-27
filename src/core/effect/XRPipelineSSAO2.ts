import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';

export class XRPipelineSSAO2 extends XRSceneScopeElement<SSAO2RenderingPipeline> {
  @Decorator.property('Number', 'samples', null)
  samples: number | null = null;

  @Decorator.property('Number', 'radius', null)
  radius: number | null = null;

  @Decorator.property('Number', 'total-strength', null)
  totalStrength: number | null = null;

  @Decorator.property('Number', 'max-z', null)
  maxZ: number | null = null;

  connected(): void {
    super.connected();

    this.entity = new SSAO2RenderingPipeline(this.id, this.scene, 1, this.scene.cameras);
    this.entity.bypassBlur = false;
    this.entity.expensiveBlur = false;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('samples') && this.evaluated.samples) this.entity.samples = this.evaluated.samples;
    if (changed.has('radius') && this.evaluated.radius) this.entity.radius = this.evaluated.radius;
    if (changed.has('totalStrength') && this.evaluated.totalStrength) this.entity.totalStrength = this.evaluated.totalStrength;
    if (changed.has('maxZ') && this.evaluated.maxZ) this.entity.maxZ = this.evaluated.maxZ;
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) {
      this.entity.dispose();
      this.entity = null;
    }
  }
}
