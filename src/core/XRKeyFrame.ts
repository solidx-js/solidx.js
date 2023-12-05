import { Decorator } from './Decorator';
import { XRSceneScopeElement } from './XRSceneScopeElement';
import type { XRAnimation } from './XRAnimation';

export class XRKeyFrame extends XRSceneScopeElement {
  static requiredAttrs: string[] = ['time', 'value'];

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
}
