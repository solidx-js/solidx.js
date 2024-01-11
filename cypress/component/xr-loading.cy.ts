import { html } from 'lit';
import '../../src';

describe('xr-loading', () => {
  it('toggle loading', () => {
    cy.mount(html`
      <xr-scene render-delay="1000">
        <xr-camera radius="3"></xr-camera>
        <xr-mesh geometry="type: box"></xr-mesh>
        <xr-loading style="background: red;">loading...</xr-loading>
      </xr-scene>
    `);

    cy.matchImageSnapshot('toggle loading: init');

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then({ timeout: 10e3 }, $element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.matchImageSnapshot('toggle loading: ready');
  });
});
