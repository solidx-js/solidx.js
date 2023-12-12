import { Decorator } from './Decorator';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector2, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from './XRSceneScopeElement';

export class XRHemisphericLight extends XRSceneScopeElement<HemisphericLight> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Number')
  intensity = 1;

  @Decorator.property('Vector2')
  rotation = new Vector2(40, 30);

  connected(): void {
    super.connected();
    this.entity = new HemisphericLight(this.id, new Vector3(0, 1, 0), this.scene);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    // intensity
    this.entity.intensity = this.intensity;

    // rotation
    const alpha = this.rotation.x * (Math.PI / 180);
    const beta = this.rotation.y * (Math.PI / 180);
    this.entity.direction.x = Math.sin(beta) * Math.cos(alpha);
    this.entity.direction.y = Math.cos(beta);
    this.entity.direction.z = Math.sin(beta) * Math.sin(alpha);
  }

  remove(): void {
    super.remove();
    this.entity?.dispose();
    this.entity = null;
  }
}
