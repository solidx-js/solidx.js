import { html } from 'lit';
import { PrimitiveBase } from './PrimitiveBase';
import { Decorator } from '../core';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { registerElement } from '../registry';

@registerElement('xr-arrow')
export class XRArrow extends PrimitiveBase {
  @Decorator.property('Number', 'thickness', null)
  thickness: number | null = null;

  @Decorator.position()
  position: Vector3 | null = null;

  @Decorator.rotation()
  rotation: Vector3 | null = null;

  @Decorator.scale()
  scale: Vector3 | null = null;

  @Decorator.property('Color3', 'color', null)
  color: Vector3 | null = null;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    const thickness = this.evaluated.thickness || 1;

    const material = html`<xr-material id="${this.id}-material" .albedoColor=${this.evaluated.color} unlit></xr-material> `;

    const arrow = html`
      <xr-mesh
        id="${this.id}-arrow"
        geometry="primitive://cylinder?diameter-top=0&height=0.075&diameter-bottom=${0.0375 * (1 + (thickness - 1) / 4)}&tessellation=96"
        material="${this.id}-material"
        rotation="90 0 0"
        position="0 0 0.3"
      ></xr-mesh>
    `;

    const line = html`
      <xr-mesh
        id="${this.id}-line"
        geometry="primitive://cylinder?diameter-top=${0.005 * thickness}&height=0.275&diameter-bottom=${0.005 * thickness}&tessellation=96"
        material="${this.id}-material"
        rotation="90 0 0"
        position="0 0 ${0.275 / 2}"
      ></xr-mesh>
    `;

    return html`
      <xr-node
        id="${this.id}-root"
        .position=${this.evaluated.position}
        .rotation=${this.evaluated.rotation}
        .scale=${this.evaluated.scale}
      >
        ${material}${arrow}${line}
      </xr-node>
    `;
  }
}
