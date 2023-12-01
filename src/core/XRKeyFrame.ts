import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';
import { XRElement } from './XRElement';

export class XRKeyFrame extends XRElement {
  static requiredAttrs: string[] = ['frame', 'value'];

  @Decorator.scene()
  scene!: Scene;

  @Decorator.property_Number()
  frame: number = 0;

  @Decorator.property_String()
  value: string = '';

  connected(): void {
    super.connected();
  }

  remove(): void {
    super.remove();
  }

  render() {}
}
