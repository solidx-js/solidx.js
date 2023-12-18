import { html } from 'lit';
import { Decorator } from '../core';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { PrimitiveBase } from './PrimitiveBase';

export class XREnv extends PrimitiveBase {
  static defaultSkyBoxTexture = new URL('../assets/Skybox_2.0-256.dds', import.meta.url).href;
  static defaultGroundTexture = new URL('../assets/Ground_2.0-256.png', import.meta.url).href;

  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position = Vector3.Zero();

  @Decorator.property('Vector3', 'rotation', Vector3.Zero())
  rotation = Vector3.Zero();

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale = Vector3.One();

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
      <xr-mesh disable-pointer-event id="env-sky-box" geometry="type: sphere" material="env-sky-box" scale="100 100 100"></xr-mesh>
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
      <xr-mesh disable-pointer-event id="env-ground" geometry="type: plane" material="env-ground" scale="5 5 5" rotation="90 0 0"></xr-mesh>
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
