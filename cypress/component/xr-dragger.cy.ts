import { html } from 'lit';
import '../../src';

describe('xr-dragger', () => {
  it('normal', () => {
    cy.mount(html`
      <style>
        .box {
          ---geometry: 'primitive://box';
        }
        xr-dragger {
          ---target: '#root';
          ---enable-position: true;
          ---enable-rotation: true;
          ---enable-scale: true;
          ---scale: 2 2 2;
        }
      </style>
      
      <xr-scene background="#000">
        <xr-camera radius="4" beta="75" alpha="-115"></xr-camera>
        <xr-ground></xr-ground>
      
        <xr-mesh id="root" geometry="primitive://sphere?diameter=0.2" material="primitive://pbr?albedo-color=#CCDFFB">
          <xr-mesh class="box" id="box1" position="-2 0 0"></xr-mesh>
          <xr-mesh class="box" id="box2" position="0 0 1"></xr-mesh>
          <xr-mesh class="box" id="box3" position="2 0 0"></xr-mesh>
        </xr-mesh>
      
        <xr-dragger></xr-dragger>
      </xr-scene>
    `);


    // 等待 xr-scene 的 load 事件
    cy.get('xr-scene').then({ timeout: 10e3 }, $element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.matchImageSnapshot();
  });
});
