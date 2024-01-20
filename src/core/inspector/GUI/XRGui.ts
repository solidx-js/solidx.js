import { ElementRegistry, registerElement } from '../../../registry';
import { XRThinElement } from '../../XRElement';

@registerElement('xr-gui')
export class XRGui extends XRThinElement {
  connectedCallback(): void {
    super.connectedCallback();

    this.style.position = 'absolute';
    this.style.top = '0';
    this.style.right = '0';
    this.style.width = '300px';
    this.style.maxHeight = '100%';
    this.style.overflow = 'auto';
    this.style.zIndex = '9999';
    this.style.backgroundColor = '#fff';
    this.style.border = '1px solid #ddd';
    this.style.boxSizing = 'border-box';

    Promise.all([import('./XRGuiController'), import('./XRGuiFolder')]).then(() => {
      ElementRegistry.Instance.apply(true);
    });
  }
}
