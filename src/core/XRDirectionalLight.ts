import { Decorator } from './Decorator';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { Vector2, Vector3 } from '@babylonjs/core/Maths/math.vector';

export class XRDirectionalLight extends XRSceneScopeElement<DirectionalLight> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property_Number()
  intensity = 1;

  @Decorator.property_Vector2(new Vector2(40, 30))
  rotation!: Vector2;

  connected(): void {
    super.connected();
    this.entity = new DirectionalLight(this.id, new Vector3(0, -1, 0), this.scene);
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
    this.entity.direction.scaleInPlace(-1); // direction 是从光源指向场景的，所以需要取反
  }

  remove(): void {
    super.remove();

    this.entity?.dispose();
    this.entity = null;
  }
}
