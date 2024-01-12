import { Decorator } from '../core';
import { registerElement } from '../registry';
import { PrimitiveBase } from './PrimitiveBase';
import { html } from 'lit';

@registerElement('xr-world-axis')
export class XRWorldAxis extends PrimitiveBase {
  @Decorator.property('Number', 'size', 100)
  size: number | null = null;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    const { size } = this.evaluated;
    if (!size) return;

    return html`
      <xr-node id="${this.id}-root">
        <xr-line disable-pointer-event id="${this.id}-x" points="-${size / 2} 0 0, ${size / 2} 0 0" colors="#ff0000"></xr-line>
        <xr-line disable-pointer-event id="${this.id}-y" points="0 -${size / 2} 0, 0 ${size / 2} 0" colors="#00ff00"></xr-line>
        <xr-line disable-pointer-event id="${this.id}-z" points="0 0 -${size / 2}, 0 0 ${size / 2}" colors="#0000ff"></xr-line>
      </xr-node>
    `;
  }
}
