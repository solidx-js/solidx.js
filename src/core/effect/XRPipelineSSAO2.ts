import { SSAO2RenderingPipeline } from '@babylonjs/core/PostProcesses/RenderPipeline/Pipelines/ssao2RenderingPipeline';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { registerElement } from '../../registry';

@registerElement('xr-pipeline-ssao2')
export class XRPipelineSSAO2 extends XRSceneScopeElement<SSAO2RenderingPipeline> {
  @Decorator.property('Number', 'samples', 16, {
    min: 0,
    max: 64,
    step: 1,
    title: '采样数',
    doc: process.env.NODE_ENV === 'development' ? '这个参数决定了 SSAO 效果的采样数量。采样数量越多，效果越精确，但计算成本也越高' : '',
  })
  samples: number | null = null;

  @Decorator.property('Number', 'radius', 2, {
    min: 0,
    step: 0.1,
    title: '半径',
    doc:
      process.env.NODE_ENV === 'development'
        ? '半径参数决定了在计算每个像素的环境光遮蔽时，应该考虑多大范围内的其他像素。这个范围通常是以当前像素为中心的一个圆形区域，半径就是这个圆的半径。如果半径较大，那么在计算环境光遮蔽时会考虑更多的像素，这可能会使遮蔽效果更明显，但也可能会导致物体之间的边缘过于模糊。这是因为大半径可能会将物体的边缘和背景混合在一起，导致边缘的细节丢失。如果半径较小，那么在计算环境光遮蔽时只会考虑离当前像素较近的其他像素，这可能会使遮蔽效果较弱，但可以保留更多的边缘细节。'
        : '',
  })
  radius: number | null = null;

  @Decorator.property('Number', 'total-strength', 1, {
    min: 0,
    max: 10,
    step: 0.1,
    title: '强度',
    doc: process.env.NODE_ENV === 'development' ? '这个参数决定了 SSAO 效果的强度。强度越大，遮蔽效果越明显。' : '',
  })
  totalStrength: number | null = null;

  @Decorator.property('Number', 'max-z', 100, {
    min: 0,
    step: 0.1,
    title: '最大 Z',
    doc:
      process.env.NODE_ENV === 'development'
        ? 'SSAO 效果的最大深度。深度越大，遮蔽效果在远离相机的地方越明显。这个参数可以用来控制 SSAO 效果的远近程度。'
        : '',
  })
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
