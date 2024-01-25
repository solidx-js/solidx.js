import { Decorator } from './Decorator';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { registerElement } from '../registry';

@registerElement('xr-camera')
export class XRCamera extends XRSceneScopeElement<ArcRotateCamera> {
  @Decorator.property('Number', 'alpha', -90, { min: 0, max: 360, step: 1, title: 'Alpha (deg)' })
  alpha: number | null = null;

  @Decorator.property('Number', 'beta', 90, { min: 0, max: 180, step: 1, title: 'Beta (deg)' })
  beta: number | null = null;

  @Decorator.property('Number', 'radius', 10, { min: 0, title: '半径' })
  radius: number | null = null;

  @Decorator.property('Vector3', 'locked-target', Vector3.Zero(), { title: '锁定目标' })
  lockedTarget: Vector3 | null = null;

  @Decorator.property('Number', 'min-z', 0.1, { min: 0, title: '近裁平面 z' })
  minZ: number | null = null;

  @Decorator.property('Number', 'max-z', 100, { min: 0, title: '远裁平面 z' })
  maxZ: number | null = null;

  @Decorator.property('Boolean', 'attach-control', null, { title: '附加控制' })
  attachControl: boolean | null = null;

  connected(): void {
    super.connected();

    this.entity = new ArcRotateCamera(this.id, 0, 0, 1, new Vector3(0, 0, 0), this.scene);
    this.entity.lowerRadiusLimit = this.minZ;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('alpha') && this.evaluated.alpha != null) this.entity.alpha = (this.evaluated.alpha * Math.PI) / 180;
    if (changed.has('beta') && this.evaluated.beta != null) this.entity.beta = (this.evaluated.beta * Math.PI) / 180;
    if (changed.has('radius') && this.evaluated.radius != null) this.entity.radius = this.evaluated.radius;
    if (changed.has('lockedTarget')) this.entity.lockedTarget = this.evaluated.lockedTarget;
    if (changed.has('minZ') && this.evaluated.minZ != null) {
      this.entity.minZ = this.evaluated.minZ;
      this.entity.lowerRadiusLimit = this.evaluated.minZ;
    }
    if (changed.has('maxZ') && this.evaluated.maxZ != null) this.entity.maxZ = this.evaluated.maxZ;

    if (changed.has('attachControl')) {
      if (this.evaluated.attachControl) this.entity.attachControl();
      else this.entity.detachControl();
    }
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
