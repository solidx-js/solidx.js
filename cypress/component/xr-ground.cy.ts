import { html } from 'lit';
import '../../src';

describe('xr-ground', () => {
  it('normal', () => {
    cy.mount(html`
      <xr-scene style="width: 256px; height: 256px;">
        <xr-camera radius="2" beta="70"></xr-camera>
        <xr-ground></xr-ground>
      </xr-scene>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('xr-scene').matchImageSnapshot();
  });
});
