import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { Decorator } from '../Decorator';
import { Color3, Vector3 } from '@babylonjs/core/Maths/math';
import { ElementUtil } from '../../util';
import { XRBaseLight } from './XRBaseLight';

export class XRPointLight extends XRBaseLight<PointLight> {
  @Decorator.property('Vector3', 'position', null)
  position: Vector3 | null = null;

  @Decorator.property('Color3', 'diffuse', null)
  diffuse: Color3 | null = null;

  @Decorator.property('Number', 'intensity', null)
  intensity: number | null = null;

  constructor() {
    super();
  }

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
