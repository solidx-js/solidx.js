import { html } from 'lit';
import { PrimitiveBase } from './PrimitiveBase';

export class XRArrow extends PrimitiveBase {
  static requiredAttrs: string[] = ['id'];

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    return html`
      <xr-node>
        <xr-mesh geometry="type: box; size: 0.2" material="albedo-color: #ff0000"></xr-mesh>
      </xr-node>
    `;
  }
}
