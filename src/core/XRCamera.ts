import { Decorator } from './Decorator';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { TmpVectors, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { RefController, TickController } from './controller';
import { XRSceneScopeElement } from './XRSceneScopeElement';

export class XRCamera extends XRSceneScopeElement<ArcRotateCamera> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property_Number()
  alpha = -90;

  @Decorator.property_Number()
  beta = 90;

  @Decorator.property_Number()
  radius = 10;

  @Decorator.property_Vector3()
  target = Vector3.Zero();

  @Decorator.property_String('lock-target')
  lockTarget?: string;

  @Decorator.property_Boolean('lock-to-center')
  lockToCenter = false;

  @Decorator.property_Number()
  minZ = 0.1;

  @Decorator.property_Number()
  maxZ = 100;

  constructor() {
    super();

    const refCtrl = new RefController(
      this as any,
      'transformNodeLike',
      () => this.lockTarget || null,
      () => {}
    );

    new TickController(this as any, () => {
      if (!this.entity) return;

      if (refCtrl.target) {
        const _tmpVec = TmpVectors.Vector3[0];

        if (this.lockToCenter) {
          const _b = refCtrl.target.getHierarchyBoundingVectors();
          Vector3.CenterToRef(_b.min, _b.max, _tmpVec);
        } else {
          _tmpVec.copyFrom(refCtrl.target.getAbsolutePosition());
        }

        if (!this.target.equals(_tmpVec)) {
          this.target.copyFrom(_tmpVec);
          this.requestUpdate('target');
        }
      }
    });
  }

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
    if (changed.has('target')) this.entity.lockedTarget = this.target;
    if (changed.has('minZ')) this.entity.minZ = this.minZ;
    if (changed.has('maxZ')) this.entity.maxZ = this.maxZ;
  }

  remove(): void {
    super.remove();

    this.entity?.dispose();
    this.entity = null;
  }
}
