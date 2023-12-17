import { html } from 'lit';
import { Decorator } from '../core';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { PrimitiveBase } from './PrimitiveBase';

export class XRGround extends PrimitiveBase {
  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position = Vector3.Zero();

  @Decorator.property('Vector3', 'rotation', new Vector3(0, 0, 0))
  rotation = new Vector3(0, 0, 0);

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale = Vector3.One();

  @Decorator.property('String', 'type', 'plane')
  type = 'plane';

  @Decorator.property('Number', 'size', 100)
  size = 100;

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
          geometry="type: ${type}; size: ${size}"
          grid-material=""
          rotation="90 0 0"
          disable-pointer-event
        ></xr-mesh>
      </xr-node>
    `;
  }
}
