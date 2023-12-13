import { Ray } from '@babylonjs/core/Culling/ray';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Decorator } from './Decorator';
import { Quaternion, TmpVectors, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { ElementUtil } from '../util';
import { TickController } from './controller';

export class XRRay extends XRSceneScopeElement<Ray> {
  @Decorator.property('Vector3')
  position = Vector3.Zero();

  @Decorator.property('Vector3')
  rotation = Vector3.Zero();

  @Decorator.property('Number')
  length = 1;

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

    this.pick(); // 默认 init 时执行一次
  }

  /** 点击 */
  pick() {
    if (!this.entity) return;

    const pk = this.scene.pickWithRay(this.entity);
    if (!pk) return;

    this.emit('pick', pk);
  }

  disconnected(): void {
    super.disconnected();
    this.entity = null;
  }
}
