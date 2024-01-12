import { Decorator } from '../Decorator';
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { ElementUtil } from '../../util';
import { XRBaseLight } from './XRBaseLight';
import { Color3 } from '@babylonjs/core/Maths/math';
import { ElementRegistry } from '../../registry';

export class XRHemisphericLight extends XRBaseLight<HemisphericLight> {
  @Decorator.property('Number', 'alpha', 0)
  alpha: number | null = null;

  @Decorator.property('Number', 'beta', 0)
  beta: number | null = null;

  @Decorator.property('Color3', 'ground-color', null)
  groundColor: Color3 | null = null;

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
      const beta = this.evaluated.beta * (Math.PI / 180);
      this.entity.direction.x = Math.sin(beta) * Math.cos(alpha);
      this.entity.direction.y = Math.cos(beta);
      this.entity.direction.z = Math.sin(beta) * Math.sin(alpha);
    }

    if (changed.has('groundColor') && this.evaluated.groundColor) {
      this.entity.groundColor.copyFrom(this.evaluated.groundColor);
    }
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }
}
ElementRegistry.Instance.register('xr-hemispheric-light', XRHemisphericLight as any);
