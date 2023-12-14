import { html } from 'lit';
import { XRSceneScopeElement } from '../core/XRSceneScopeElement';
import { Decorator } from '../core';
import { Vector3 } from '@babylonjs/core/Maths/math';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

export class XREnv extends XRSceneScopeElement<any> {
  // static defaultGroundTexture = new URL('../assets/Ground_2.0-256.png', import.meta.url).href;
  static defaultGroundTexture = 'https://rshop.tech/gw/assets/upload/202312111316365.png';

  @Decorator.property('Vector3')
  position = Vector3.Zero();

  @Decorator.property('Vector3')
  rotation = Vector3.Zero();

  @Decorator.property('Vector3')
  scale = Vector3.One();

  private _ground: Mesh | null = null;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    return html`
      <xr-node id="env" .position=${this.position} .rotation=${this.rotation} .scale=${this.scale}>
        <xr-point-light
          id="env-point-light-1"
          .inspect=${this.inspect}
          intensity="7"
          radius="7"
          .position=${new Vector3(-2, 2.5, 2)}
          shadow-enabled
        >
        </xr-point-light>

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

        <xr-material id="env-ground" backface-culling albedo-texture="url: ${XREnv.defaultGroundTexture}; has-alpha: true"></xr-material>
        <xr-mesh id="env-ground" geometry="type: plane" material="env-ground" scale="5 5 5" rotation="90 0 0"></xr-mesh>
      </xr-node>
    `;
  }
}
