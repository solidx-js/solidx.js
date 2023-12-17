import { Decorator } from '../Decorator';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { DirectionalLight } from '@babylonjs/core/Lights/directionalLight';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { LightController } from '../controller';
import { Color3 } from '@babylonjs/core/Maths/math';
import { ElementUtil } from '../../util';

export class XRDirectionalLight extends XRSceneScopeElement<DirectionalLight> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position!: Vector3;

  @Decorator.property('Color3', 'diffuse', new Color3(1, 1, 1))
  diffuse!: Color3;

  @Decorator.property('Color3', 'specular', new Color3(1, 1, 1))
  specular!: Color3;

  @Decorator.property('Number', 'intensity', 1)
  intensity!: number;

  @Decorator.property('Boolean', 'shadowEnabled', false)
  shadowEnabled!: boolean;

  @Decorator.property('Number', 'alpha', 40)
  alpha = 40;

  @Decorator.property('Number', 'beta', 30)
  beta = 30;

  constructor() {
    super();
    new LightController(this);
  }

  connected(): void {
    super.connected();
    this.entity = new DirectionalLight(this.id, new Vector3(0, -1, 0), this.scene);
    this.entity.position.set(0, 0, 0);
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    // rotation
    const alpha = this.alpha * (Math.PI / 180);
    const beta = this.beta * (Math.PI / 180);
    this.entity.direction.x = Math.sin(beta) * Math.cos(alpha);
    this.entity.direction.y = Math.cos(beta);
    this.entity.direction.z = Math.sin(beta) * Math.sin(alpha);
    this.entity.direction.scaleInPlace(-1); // direction 是从光源指向场景的，所以需要取反
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
