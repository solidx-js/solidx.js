import { html } from 'lit';
import '../../src';

describe('xr-node', () => {
  it('hierarchy transform', () => {
    cy.mount(html`
      <xr-scene style="width: 256px; height: 256px;">
        <xr-camera radius="2" beta="70"></xr-camera>

        <xr-mesh geometry="?type=box &size=0.5"></xr-mesh>

        <xr-node position="0.5 0 0" rotation="0 45 0">
          <xr-mesh geometry="?type=box &size=0.5"></xr-mesh>
        </xr-node>
      </xr-scene>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('xr-scene').matchImageSnapshot();
  });
});
