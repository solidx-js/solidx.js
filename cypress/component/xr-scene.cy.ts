import { html } from 'lit';
import '../../src';

describe('xr-scene', () => {
  it('resize', () => {
    cy.mount(html`
      <div id="root" style="width: 100px; height: 50px;">
        <xr-scene background="#ff0000">
          <xr-camera radius="3"></xr-camera>
          <xr-mesh geometry="primitive://box"></xr-mesh>
        </xr-scene>
      </div>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('.xr-canvas').should('have.prop', 'width', 100).and('have.prop', 'height', 50);
    cy.matchImageSnapshot('init');

    // 切换尺寸
    cy.get('#root').invoke('css', 'width', '200px').invoke('css', 'height', '100px');
    cy.get('.xr-canvas').should('have.prop', 'width', 200).and('have.prop', 'height', 100);
    cy.matchImageSnapshot('resized');
  });
});
