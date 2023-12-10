import { Ray } from '@babylonjs/core/Culling/ray';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Decorator } from './Decorator';
import { Quaternion, TmpVectors, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { RayHelper } from '@babylonjs/core/Debug/rayHelper';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ElementUtil } from '../util';
import { TickController } from './controller';

export class XRRay extends XRSceneScopeElement<Ray> {
  @Decorator.property_Vector3()
  position = Vector3.Zero();

  @Decorator.property_Vector3()
  rotation = Vector3.Zero();

  @Decorator.property_Number()
  length = 1;

  private _rayHelper: RayHelper | null = null;

  constructor() {
    super();

    new TickController(this as any, () => this._onTick());
  }

  private _onTick = () => {
    if (!this.entity) return;

    const rotQ = TmpVectors.Quaternion[0];
    Quaternion.FromEulerAnglesToRef(
      (this.rotation.x / 180) * Math.PI,
      (this.rotation.y / 180) * Math.PI,
      (this.rotation.z / 180) * Math.PI,
      rotQ
    );

    this.entity.origin.copyFrom(this.position);
    Vector3.RightHandedForwardReadOnly.rotateByQuaternionToRef(rotQ, this.entity.direction);
    this.entity.length = this.length;

    const parent = ElementUtil.closestTransformNodeLike(this);
    if (parent) {
      const wMatrix = parent.getWorldMatrix();
      Vector3.TransformCoordinatesToRef(this.entity.origin, wMatrix, this.entity.origin);
      Vector3.TransformNormalToRef(this.entity.direction, wMatrix, this.entity.direction);
    }
  };

  connected(): void {
    super.connected();

    this.entity = new Ray(Vector3.Zero(), Vector3.Forward(), this.length);
    this._onTick();

    this.click(); // 默认 init 时执行一次
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('debug')) {
      if (this.debug && !this._rayHelper) {
        this._rayHelper = new RayHelper(this.entity);
      }

      if (!this.debug && this._rayHelper) {
        this._rayHelper.dispose();
        this._rayHelper = null;
      }

      if (this._rayHelper && this.debug) {
        const color = this.debug.color || '#ff0000';
        this._rayHelper.show(this.scene, Color3.FromHexString(color));
      }
    }
  }

  /** 点击 */
  click() {
    if (!this.entity) return;

    const pk = this.scene.pickWithRay(this.entity);
    if (!pk) return;

    this.emit('click', pk);
  }

  remove(): void {
    super.remove();

    if (this._rayHelper) {
      this._rayHelper.dispose();
      this._rayHelper = null;
    }

    this.entity = null;
  }
}
