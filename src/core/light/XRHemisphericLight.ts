import { Decorator } from '../Decorator';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector2, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { LightController } from '../controller';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { ElementUtil } from '../../util';

export class XRHemisphericLight extends XRSceneScopeElement<HemisphericLight> {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Vector3')
  position = Vector3.Zero();

  @Decorator.property('Color3')
  diffuse = new Color3(1, 1, 1);

  @Decorator.property('Color3')
  specular = new Color3(1, 1, 1);

  @Decorator.property('Number')
  intensity = 1;

  @Decorator.property('Boolean')
  shadowEnabled = false;

  @Decorator.property('Vector2')
  rotation = new Vector2(40, 30);

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
    const alpha = this.rotation.x * (Math.PI / 180);
    const beta = this.rotation.y * (Math.PI / 180);
    this.entity.direction.x = Math.sin(beta) * Math.cos(alpha);
    this.entity.direction.y = Math.cos(beta);
    this.entity.direction.z = Math.sin(beta) * Math.sin(alpha);
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
