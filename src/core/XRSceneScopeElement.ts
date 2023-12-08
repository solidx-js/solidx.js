import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';
import { XRElement } from './XRElement';

export class XRSceneScopeElement<T = any> extends XRElement<T> {
  @Decorator.scene()
  scene!: Scene;
}
