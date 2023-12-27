import { VolumetricLightScatteringPostProcess } from '@babylonjs/core/PostProcesses/volumetricLightScatteringPostProcess';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { IPostProcessImpl } from '../impl';
import { Decorator } from '../Decorator';
import { state } from 'lit/decorators.js';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { TagRefController } from '../controller';
import { Camera } from '@babylonjs/core/Cameras/camera';

export class XRVolumetricLight extends XRSceneScopeElement<VolumetricLightScatteringPostProcess> implements IPostProcessImpl {
  @Decorator.property('String', 'camera', null)
  camera: string | null = null;

  @Decorator.property('String', 'mesh', null)
  mesh: string | null = null;

  @Decorator.property('Number', 'exposure', null)
  exposure: number | null = null;

  @Decorator.property('Number', 'decay', null)
  decay: number | null = null;

  @Decorator.property('Number', 'weight', null)
  weight: number | null = null;

  @Decorator.property('Number', 'density', null)
  density: number | null = null;

  @state()
  _camera: (HTMLElement & { entity: Camera | null }) | null = null;

  @state()
  _mesh: (HTMLElement & { entity: Mesh | null }) | null = null;

  constructor() {
    super();

    new TagRefController(this, 'camera', '_camera', null);
    new TagRefController(this, 'mesh', '_mesh', null);
  }

  connected(): void {
    super.connected();

    this.entity = new VolumetricLightScatteringPostProcess(
      this.id,
      1.0,
      this.scene.activeCamera,
      undefined,
      undefined,
      undefined,
      this.scene.getEngine(),
      undefined,
      this.scene
    );
    this.entity.mesh.setEnabled(false); // 隐藏内部自动创建的 mesh, 不用这个 mesh
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('_camera') && this._camera?.entity) {
      // 重建
      this.entity.dispose(this.entity.getCamera());
      this.entity = null;

      this.entity = new VolumetricLightScatteringPostProcess(
        this.id,
        1.0,
        this._camera.entity,
        undefined,
        undefined,
        undefined,
        this.scene.getEngine(),
        undefined,
        this.scene
      );
    }

    if (changed.has('_mesh') && this._mesh?.entity) {
      this.entity.mesh = this._mesh?.entity;
    }

    if (changed.has('exposure') && this.evaluated.exposure) this.entity.exposure = this.evaluated.exposure;
    if (changed.has('decay') && this.evaluated.decay) this.entity.decay = this.evaluated.decay;
    if (changed.has('weight') && this.evaluated.weight) this.entity.weight = this.evaluated.weight;
    if (changed.has('density') && this.evaluated.density) this.entity.density = this.evaluated.density;
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) this.entity.dispose(this.entity.getCamera());
    this.entity = null;
  }
}
