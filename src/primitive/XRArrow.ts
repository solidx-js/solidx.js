import { html } from 'lit';
import { PrimitiveBase } from './PrimitiveBase';
import { Decorator } from '../core';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Color3 } from '@babylonjs/core/Maths/math';

export class XRArrow extends PrimitiveBase {
  static requiredAttrs: string[] = ['id'];

  @Decorator.property('Number', 'thickness', 1)
  thickness!: number;

  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position!: Vector3;

  @Decorator.property('Vector3', 'rotation', Vector3.Zero())
  rotation!: Vector3;

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale!: Vector3;

  @Decorator.property('Color3', 'color', Color3.Red())
  color!: Color3;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    const thickness = this.thickness;

    const material = html`<xr-material id="${this.id}-material" .albedoColor=${this.color} unlit></xr-material> `;

    const arrow = html`
      <xr-mesh
        id="${this.id}-arrow"
        geometry="type: cylinder; diameter-top: 0; height: 0.075; diameter-bottom: ${0.0375 * (1 + (thickness - 1) / 4)}; tessellation: 96"
        material="${this.id}-material"
        rotation="90 0 0"
        position="0 0 0.3"
      ></xr-mesh>
    `;

    const line = html`
      <xr-mesh
        id="${this.id}-line"
        geometry="type: cylinder; diameter-top: ${0.005 * thickness}; height: 0.275; diameter-bottom: ${0.005 *
        thickness}; tessellation: 96"
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
