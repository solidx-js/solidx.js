import { html } from 'lit';
import '../../src';

describe('xr-xxx-light', () => {
  it('directional', () => {
    cy.mount(html`
      <style>
        xr-directional-light {
          ---diffuse: red;
          ---alpha: 0;
        }
      </style>

      <xr-scene env-intensity="0.05" background="#000" style="width: 256px; height: 256px;">
        <xr-camera radius="2"></xr-camera>
        <xr-directional-light intensity="2"></xr-directional-light>
        <xr-mesh geometry="type: sphere"></xr-mesh>
      </xr-scene>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('xr-scene').matchImageSnapshot();
  });

  it('point', () => {
    cy.mount(html`
      <style>
        xr-point-light {
          ---diffuse: red;
        }
        xr-point-light:nth-of-type(2) {
          ---diffuse: green;
        }
      </style>

      <xr-scene env-intensity="0.05" background="#000" style="width: 256px; height: 256px;">
        <xr-camera radius="2"></xr-camera>
        <xr-point-light intensity="2" position="0 2 0"></xr-point-light>
        <xr-point-light intensity="2" position="0 -2 0"></xr-point-light>
        <xr-mesh geometry="type: sphere"></xr-mesh>
      </xr-scene>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('xr-scene').matchImageSnapshot();
  });

  it('hemispheric', () => {
    cy.mount(html`
      <style>
        xr-hemispheric-light {
          ---diffuse: red;
        }
        xr-hemispheric-light:nth-of-type(2) {
          ---diffuse: green;
        }
      </style>

      <xr-scene env-intensity="0.05" background="#000" style="width: 256px; height: 256px;">
        <xr-camera radius="2"></xr-camera>
        <xr-hemispheric-light intensity="2" alpha="0"></xr-hemispheric-light>
        <xr-hemispheric-light intensity="2" alpha="180"></xr-hemispheric-light>
        <xr-mesh geometry="type: sphere"></xr-mesh>
      </xr-scene>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('xr-scene').matchImageSnapshot();
  });

  it.only('shadow cast', () => {
    cy.mount(html`
      <style>
        xr-directional-light {
          ---diffuse: #fff;
          ---alpha: 0;
        }
      </style>

      <xr-scene env-intensity="0.05" background="#000" style="width: 256px; height: 256px;">
        <xr-camera radius="3"></xr-camera>
        <xr-directional-light intensity="2" shadow-enabled></xr-directional-light>
        <xr-mesh geometry="type: sphere"></xr-mesh>
        <xr-mesh geometry="type: plane; size: 10" position="0 -0.6 0" rotation="90 0 0"></xr-mesh>
      </xr-scene>
    `);

    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('xr-scene').screenshot();
  });
});
