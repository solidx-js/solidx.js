import { ReactiveController } from 'lit';
import { XRElement } from '../XRElement';
import { Color3 } from '@babylonjs/core/Maths/math';
import { Light } from '@babylonjs/core/Lights/light';

export class LightController implements ReactiveController {
  constructor(
    private host: XRElement<Light> & {
      diffuse: Color3 | null;
      specular: Color3 | null;
      intensity: number | null;
      shadowEnabled: boolean | null;
    }
  ) {
    this.host.addController(this);
  }

  hostUpdate(): void {
    if (!(this.host.entity instanceof Light)) return;

    const entity = this.host.entity;

    entity.shadowEnabled = false; // 默认关闭阴影

    if (this.host.diffuse) entity.diffuse.copyFrom(this.host.diffuse);
    if (this.host.specular) entity.specular.copyFrom(this.host.specular);
    if (this.host.intensity) entity.intensity = this.host.intensity;
    if (this.host.shadowEnabled) entity.shadowEnabled = this.host.shadowEnabled;
  }
}
