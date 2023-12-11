import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Decorator } from './Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { CreateDecal } from '@babylonjs/core/Meshes/Builders/decalBuilder';
import { ElementUtil } from '../util/ElementUtil';

export class XRDecal extends XRSceneScopeElement<Mesh> {
  @Decorator.property_Vector3()
  size = Vector3.One();

  @Decorator.property_Vector3()
  position = Vector3.Zero();

  @Decorator.property_Vector3()
  normal = Vector3.Up();

  connected(): void {
    super.connected();
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    const shouldRecreate = changed.has('size');

    if (shouldRecreate) {
      if (this.entity) this.entity.dispose();

      const parent = ElementUtil.closestTransformNodeLike(this);

      if (parent && parent instanceof Mesh) {
        const worldMatrix = parent.getWorldMatrix();

        const position = Vector3.TransformCoordinates(this.position, worldMatrix);
        const normal = Vector3.TransformNormal(this.normal, worldMatrix);

        this.entity = CreateDecal(parent.name + '_decal', parent, {
          localMode: true,
          position,
          normal,
          size: this.size,
        });
      }
    }
  }

  remove(): void {
    super.remove();

    if (this.entity) this.entity.dispose();
    this.entity = null;
  }
}
