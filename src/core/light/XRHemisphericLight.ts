import { Decorator } from '../Decorator';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector2, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { LightController } from '../controller';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ElementUtil } from '../../util';

export class XRHemisphericLight extends XRSceneScopeElement<HemisphericLight> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Vector3', 'position', null)
  position: Vector3 | null = null;

  @Decorator.property('Color3', 'diffuse', null)
  diffuse: Color3 | null = null;

  @Decorator.property('Color3', 'specular', null)
  specular: Color3 | null = null;

  @Decorator.property('Number', 'intensity', null)
  intensity: number | null = null;

  @Decorator.property('Boolean', 'shadowEnabled', null)
  shadowEnabled: boolean | null = null;

  @Decorator.property('Number', 'alpha', 0)
  alpha: number | null = null;

  @Decorator.property('Number', 'beta', 0)
  beta: number | null = null;

  constructor() {
    super();
    new LightController(this);
  }

  connected(): void {
    super.connected();
    this.entity = new HemisphericLight(this.id, new Vector3(0, 1, 0), this.scene);
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    // rotation
    if (typeof this.evaluated.alpha === 'number' && typeof this.evaluated.beta === 'number') {
      const alpha = this.evaluated.alpha * (Math.PI / 180);
      const beta = this.evaluated.alpha * (Math.PI / 180);
      this.entity.direction.x = Math.sin(beta) * Math.cos(alpha);
      this.entity.direction.y = Math.cos(beta);
      this.entity.direction.z = Math.sin(beta) * Math.sin(alpha);
    }
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
