import { Decorator } from '../core';
import { PrimitiveBase } from './PrimitiveBase';
import { html } from 'lit';

export class XRWorldAxis extends PrimitiveBase {
  @Decorator.property('Number', 'size', 100)
  size = 100;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    const { size } = this.evaluated;

    return html`
      <xr-node id="${this.id}-root">
        <xr-line disable-pointer-event id="${this.id}-x" points="-${size / 2} 0 0, ${size / 2} 0 0" colors="#ff0000"></xr-line>
        <xr-line disable-pointer-event id="${this.id}-y" points="0 -${size / 2} 0, 0 ${size / 2} 0" colors="#00ff00"></xr-line>
        <xr-line disable-pointer-event id="${this.id}-z" points="0 0 -${size / 2}, 0 0 ${size / 2}" colors="#0000ff"></xr-line>
      </xr-node>
    `;
  }
}
