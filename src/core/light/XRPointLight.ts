import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { Decorator } from '../Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { ElementUtil } from '../../util';
import { XRBaseLight } from './XRBaseLight';
import { ElementRegistry } from '../../registry';

export class XRPointLight extends XRBaseLight<PointLight> {
  @Decorator.position()
  position: Vector3 | null = null;

  connected(): void {
    super.connected();

    this.entity = new PointLight(this.id, Vector3.Zero(), this.scene);
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('position') && this.evaluated.position) this.entity.position.copyFrom(this.evaluated.position);
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
ElementRegistry.Instance.register('xr-point-light', XRPointLight as any);
