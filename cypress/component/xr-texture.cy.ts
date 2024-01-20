import { html } from 'lit';
import '../../src';

describe('xr-texture', () => {
  it('load url', () => {
    cy.mount(html`
      <xr-scene style="width: 256px; height: 256px;">
        <xr-camera radius="2" alpha="-80"></xr-camera>
        <xr-texture id="tex" url="/lion.png" invert-y has-alpha></xr-texture>
        <xr-mesh geometry="primitive://plane" material="primitive://pbr?albedo-texture=#tex"></xr-mesh>

        <xr-mesh geometry="primitive://box" position="-0.5 0 1"></xr-mesh>
      </xr-scene>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('xr-scene').matchImageSnapshot();
  });

  it('coordinates-mode', () => {
    cy.mount(html`
      <style>
        xr-model xr-mesh[name='node_damagedHelmet_-6514'] {
          ---material: 'primitive://pbr?metallic=1&reflection-texture=#tex' !important;
        }
      </style>

      <xr-scene style="width: 256px; height: 256px;">
        <xr-camera radius="4" alpha="90" beta="75"></xr-camera>
        <xr-texture id="tex" url="/equirectangular.jpg" invert-y></xr-texture>
        <xr-model src="/DamagedHelmet.glb" rotation="0 -40 0"></xr-model>
      </xr-scene>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    for (let i = 0; i <= 9; i++) {
      cy.get('#tex').then($element => {
        $element.get(0).setAttribute('coordinates-mode', i.toString());
      });

      cy.wait(100);
      cy.get('xr-scene').matchImageSnapshot(`coordinates-mode-${i}`);
    }
  });
});
