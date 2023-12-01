import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';
import { XRElement } from './XRElement';
import type { XRAnimation } from './XRAnimation';

export class XRKeyFrame extends XRElement {
  static requiredAttrs: string[] = ['time', 'value'];

  @Decorator.scene()
  scene!: Scene;

  @Decorator.property_Number()
  time: number = 0;

  @Decorator.property_String()
  value: string = '';

  get aniEle() {
    return this.closest<XRAnimation>('xr-animation')!;
  }

  connected(): void {
    super.connected();
    this.aniEle.reloadFrames();
  }

  remove(): void {
    super.remove();
    this.aniEle.reloadFrames();
  }

  render() {}
}
