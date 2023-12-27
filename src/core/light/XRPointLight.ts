import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { LightController } from '../controller';
import { Decorator } from '../Decorator';
import { Color3, Vector3 } from '@babylonjs/core/Maths/math';
import { ElementUtil } from '../../util';

export class XRPointLight extends XRSceneScopeElement<PointLight> {
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

  constructor() {
    super();
    new LightController(this);
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
