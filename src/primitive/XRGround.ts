import { html } from 'lit';
import { Decorator, XRSceneScopeElement } from '../core';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class XRGround extends XRSceneScopeElement<any> {
  @Decorator.property('Vector3')
  position = Vector3.Zero();

  @Decorator.property('Vector3')
  rotation = new Vector3(90, 0, 0);

  @Decorator.property('Vector3')
  scale = Vector3.One();

  @Decorator.property('String')
  type = 'plane';

  @Decorator.property('Number')
  size = 100;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    return html`
      <xr-mesh
        id="ground"
        geometry="type: ${this.evaluated.type}; size: ${this.evaluated.size}"
        grid-material=""
        .position=${this.evaluated.position}
        .rotation=${this.evaluated.rotation}
        .scale=${this.evaluated.scale}
      ></xr-mesh>
    `;
  }
}
