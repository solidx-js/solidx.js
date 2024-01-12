import { html } from 'lit';
import '../../src';

describe('xr-texture', () => {
  it('load url', () => {
    cy.mount(html`
      <xr-scene style="width: 256px; height: 256px;">
        <xr-camera radius="2" alpha="-80"></xr-camera>
        <xr-texture id="tex" url="/lion.png" invert-y has-alpha></xr-texture>
        <xr-mesh geometry="type: plane" material="albedo-texture: #tex"></xr-mesh>

        <xr-mesh geometry="type: box" position="-0.5 0 1"></xr-mesh>
      </xr-scene>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('xr-scene').matchImageSnapshot();
  });
});
