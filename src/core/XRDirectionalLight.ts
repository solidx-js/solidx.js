import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';
import { XRElement } from './XRElement';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class XRDirectionalLight extends XRElement<DirectionalLight> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.scene()
  scene!: Scene;

  connected(): void {
    super.connected();
    this.entity = new DirectionalLight(this.id, new Vector3(0, -1, 0), this.scene);
  }

  remove(): void {
    super.remove();

    this.entity?.dispose();
    this.entity = null;
  }
}
