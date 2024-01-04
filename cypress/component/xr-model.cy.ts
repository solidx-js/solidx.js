import { html } from 'lit';
import '../../src';
import _ from 'lodash';

describe('xr-model', () => {
  const srcList = ['/DamagedHelmet.glb', '/DamagedHelmet/DamagedHelmet.gltf'];

  for (const src of srcList) {
    it(src, () => {
      cy.mount(html`
        <xr-scene style="width: 256px; height: 256px;">
          <xr-camera radius="5"></xr-camera>
          <xr-model src="${src}"></xr-model>
        </xr-scene>
      `);

      // 等待 xr-model 的 load 事件
      cy.get('xr-model').then($element => {
        return new Cypress.Promise(resolve => $element.on('load', resolve));
      });

      cy.get('xr-scene').matchImageSnapshot(_.snakeCase(src));
    });
  }
});
