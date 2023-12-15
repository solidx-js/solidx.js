import { html } from 'lit';
import { Decorator, XRSceneScopeElement } from '../core';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class XRGround extends XRSceneScopeElement<any> {
  @Decorator.property('Vector3')
  position = Vector3.Zero();

  @Decorator.property('Vector3')
  rotation = new Vector3(90, 0, 0);

  @Decorator.property('Vector3')
  scale = Vector3.One().scale(100);

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    return html`
      <xr-grid-material></xr-grid-material>
      <xr-mesh id="ground" geometry="type: plane" .position=${this.position} .rotation=${this.rotation} .scale=${this.scale}></xr-mesh>
    `;
  }
}
