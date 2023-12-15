import { XRElement } from '../XRElement';
import { AttributeObserverController } from '../controller';

export class XRStyle extends XRElement<any> {
  static requiredAttrs: string[] = ['selector'];

  constructor() {
    super();
    new AttributeObserverController(this, () => {
      this.emit('change', {});
    });
  }
}
