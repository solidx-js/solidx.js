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

  @Decorator.property('Number', 'exposure', 0.3)
  exposure = 0.3;

  @Decorator.property('Number', 'decay', 0.96815)
  decay: number = 0.96815;

  @Decorator.property('Number', 'weight', 0.58767)
  weight: number = 0.58767;

  @Decorator.property('Number', 'density', 0.926)
  density: number = 0.926;

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

    if (changed.has('exposure')) this.entity.exposure = this.exposure;
    if (changed.has('decay')) this.entity.decay = this.decay;
    if (changed.has('weight')) this.entity.weight = this.weight;
    if (changed.has('density')) this.entity.density = this.density;
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) this.entity.dispose(this.entity.getCamera());
    this.entity = null;
  }
}
