import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { LightController } from '../controller';
import { Decorator } from '../Decorator';
import { Color3, Vector3 } from '@babylonjs/core/Maths/math';
import { ElementUtil } from '../../util';

export class XRPointLight extends XRSceneScopeElement<PointLight> {
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

  constructor() {
    super();
    new LightController(this);
  }

  connected(): void {
    super.connected();

    this.entity = new PointLight(this.id, this.position, this.scene);
    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  disconnected(): void {
    super.disconnected();

    this.entity?.dispose();
    this.entity = null;
  }
}
