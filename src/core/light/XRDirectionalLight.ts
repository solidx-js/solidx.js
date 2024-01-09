import { Decorator } from '../Decorator';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Color3 } from '@babylonjs/core/Maths/math';
import { ElementUtil } from '../../util';
import { XRBaseLight } from './XRBaseLight';

export class XRDirectionalLight extends XRBaseLight<DirectionalLight> {
  @Decorator.property('Vector3', 'position', null)
  position: Vector3 | null = null;

  @Decorator.property('Color3', 'diffuse', null)
  diffuse: Color3 | null = null;

  @Decorator.property('Number', 'intensity', null)
  intensity: number | null = null;

  @Decorator.property('Number', 'alpha', 40)
  alpha: number | null = null;

  @Decorator.property('Number', 'beta', 30)
  beta: number | null = null;

  constructor() {
    super();
  }

  connected(): void {
    super.connected();
    this.entity = new DirectionalLight(this.id, new Vector3(0, -1, 0), this.scene);
    this.entity.position.set(0, 0, 0);
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);

    this.entity.autoUpdateExtends = true;
    this.entity.autoCalcShadowZBounds = true;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    // rotation
    if (typeof this.evaluated.alpha === 'number' && typeof this.evaluated.beta === 'number') {
      const alpha = this.evaluated.alpha * (Math.PI / 180);
      const beta = this.evaluated.beta * (Math.PI / 180);
      this.entity.direction.x = Math.sin(beta) * Math.cos(alpha);
      this.entity.direction.y = Math.cos(beta);
      this.entity.direction.z = Math.sin(beta) * Math.sin(alpha);
      this.entity.direction.scaleInPlace(-1); // direction 是从光源指向场景的，所以需要取反
    }
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
