import { XREntity } from './XREntity';
import { XRScene } from './XRScene';

export class XRAssets extends XREntity {
  get name() {
    return 'XRAssets';
  }

  init(): void {
    super.init();

    if (!(this.parentElement instanceof XRScene)) {
      throw new Error('XRAssets must be a child of XRScene');
    }
  }
}
