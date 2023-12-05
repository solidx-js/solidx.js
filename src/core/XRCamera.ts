import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { RefController } from './controller';
import { XRSceneScopeElement } from './XRSceneScopeElement';

export class XRCamera extends XRSceneScopeElement<ArcRotateCamera> {
  static requiredAttrs: string[] = ['id'];

  private _refCtrl = new RefController(
    this,
    'transformNodeLike',
    () => this.target || null,
    target => {
      if (this.entity) this.entity.lockedTarget = target;
    }
  );

  @Decorator.scene()
  scene!: Scene;

  @Decorator.property_String()
  target?: string;

  connected(): void {
    super.connected();

    this.entity = new ArcRotateCamera(this.id, Math.PI / 2, Math.PI / 3, 10, new Vector3(0, 0, 0), this.scene);
    this.entity.attachControl();
  }

  remove(): void {
    super.remove();

    this.entity?.dispose();
    this.entity = null;
  }
}
