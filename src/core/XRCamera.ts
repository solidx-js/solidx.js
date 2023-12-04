import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';
import { XRElement } from './XRElement';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class XRCamera extends XRElement<ArcRotateCamera> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.scene()
  scene!: Scene;

  connected(): void {
    super.connected();

    this.entity = new ArcRotateCamera(this.id, Math.PI / 2, Math.PI / 3, 10, new Vector3(0, 0, 0), this.scene);
  }

  remove(): void {
    super.remove();

    this.entity?.dispose();
    this.entity = null;
  }
}
