import { html } from 'lit';
import { Decorator } from '../core';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { PrimitiveBase } from './PrimitiveBase';
import { registerElement } from '../registry';

@registerElement('xr-ground')
export class XRGround extends PrimitiveBase {
  @Decorator.position()
  position: Vector3 | null = null;

  @Decorator.rotation()
  rotation: Vector3 | null = null;

  @Decorator.scale()
  scale: Vector3 | null = null;

  @Decorator.property('String', 'type', 'plane')
  type: string | null = null;

  @Decorator.property('Number', 'size', 100)
  size: number | null = null;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    const { position, rotation, scale, type, size } = this.evaluated;

    return html`
      <xr-node id="${this.id}-root" .position=${position} .rotation=${rotation} .scale=${scale}>
        <xr-mesh
          id="${this.id}-plane"
          geometry="primitive://${type}?size=${size}"
          material="primitive://grid"
          rotation="90 0 0"
          disable-pointer-event
        ></xr-mesh>
      </xr-node>
    `;
  }
}
