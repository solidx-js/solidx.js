import { XRElement } from './XRElement';
import { consume } from '@lit/context';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class XRNode extends XRElement {
  @consume({ context: Context.Scene, subscribe: true })
  scene!: Scene;

  @Decorator.property_Vector3(Vector3.Zero())
  position: Vector3 = Vector3.Zero();

  @Decorator.property_Vector3(Vector3.Zero())
  rotation: Vector3 = Vector3.Zero();

  @Decorator.property_Vector3(Vector3.One())
  scaling: Vector3 = Vector3.One();
}
