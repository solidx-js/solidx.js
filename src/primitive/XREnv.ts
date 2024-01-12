import { html } from 'lit';
import { Decorator } from '../core';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { PrimitiveBase } from './PrimitiveBase';
import { AssetsURLs } from '../AssetsURLs';
import { registerElement } from '../registry';

@registerElement('xr-env')
export class XREnv extends PrimitiveBase {
  static defaultSkyBoxTexture = AssetsURLs.DEFAULT_SKY_TEXTURE;
  static defaultGroundTexture = AssetsURLs.DEFAULT_GROUND_TEXTURE;

  @Decorator.property('Vector3', 'position', null)
  position: Vector3 | null = null;

  @Decorator.property('Vector3', 'rotation', null)
  rotation: Vector3 | null = null;

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale: Vector3 | null = null;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  private _renderLights() {
    return html`
      <xr-point-light
        id="env-point-light-1"
        .inspect=${this.inspect}
        intensity="7"
        radius="7"
        .position=${new Vector3(-2, 2.5, 2)}
        shadow-enabled
      ></xr-point-light>

      <xr-point-light
        id="env-point-light-2"
        .inspect=${this.inspect}
        intensity="7"
        radius="0.4"
        .position=${new Vector3(4, 3, -0.5)}
      ></xr-point-light>

      <xr-point-light
        id="env-point-light-3"
        .inspect=${this.inspect}
        intensity="1"
        radius="0.5"
        .position=${new Vector3(-1, 3, -3)}
      ></xr-point-light>
    `;
  }

  private _renderSkyBox() {
    return html`
      <xr-background-material
        id="env-sky-box"
        enable-noise
        reflection-texture="url: ${XREnv.defaultSkyBoxTexture}; coordinates-mode: 5"
      ></xr-material>
      <xr-mesh disable-pointer-event id="env-sky-box" geometry="type: sphere" material="#env-sky-box" scale="100 100 100"></xr-mesh>
    `;
  }

  private _renderGround() {
    return html`
      <xr-material
        id="env-ground"
        unlit
        backface-culling
        albedo-texture="url: ${XREnv.defaultGroundTexture}; has-alpha: true"
      ></xr-material>
      <xr-mesh
        disable-pointer-event
        id="env-ground"
        geometry="type: plane"
        material="#env-ground"
        scale="5 5 5"
        rotation="90 0 0"
      ></xr-mesh>
    `;
  }

  render() {
    return html`
      <xr-node id="env" .position=${this.position} .rotation=${this.rotation} .scale=${this.scale}>
        ${this._renderLights()}${this._renderSkyBox()}${this._renderGround()}
      </xr-node>
    `;
  }
}
