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

  @Decorator.property_String()
  target?: string;

  @Decorator.property_Number()
  alpha = -90;

  @Decorator.property_Number()
  beta = 90;

  @Decorator.property_Number()
  radius = 10;

  connected(): void {
    super.connected();

    this.entity = new ArcRotateCamera(
      this.id,
      (this.alpha * Math.PI) / 180,
      (this.beta * Math.PI) / 180,
      this.radius,
      new Vector3(0, 0, 0),
      this.scene
    );
    this.entity.attachControl();
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('alpha')) this.entity.alpha = (this.alpha * Math.PI) / 180;
    if (changed.has('beta')) this.entity.beta = (this.beta * Math.PI) / 180;
    if (changed.has('radius')) this.entity.radius = this.radius;
  }

  remove(): void {
    super.remove();

    this.entity?.dispose();
    this.entity = null;
  }
}
