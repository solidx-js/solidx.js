import { html } from 'lit';
import _ from 'lodash';
import '../../src';
import { XRMaterial, XRModel } from '../../src';

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

  it('virtual node', () => {
    cy.mount(html`
      <xr-scene style="width: 256px; height: 256px;">
        <xr-camera radius="4" target="0 1 0" alpha="90" beta="75"></xr-camera>
        <xr-model src="/DamagedHelmet.glb" rotation="0 -40 0" position="0 1 0"></xr-model>
      </xr-scene>
    `);

    // 等待 xr-model 的 load 事件
    cy.get('xr-model').then($element => {
      return new Cypress.Promise(resolve => $element.on('load', resolve));
    });

    cy.get('xr-scene').matchImageSnapshot();

    cy.get('xr-model').then($ele => {
      const _model = $ele.get(0) as XRModel;
      const container = _model.container!;

      for (const mat of container.materials) {
        cy.get(`xr-model xr-material[name="${mat.name}"]`).should('exist').and('have.attr', 'entity-delegated');
      }

      for (const tex of container.textures) {
        cy.get(`xr-model xr-texture[name="${tex.name}"]`).should('exist').and('have.attr', 'entity-delegated');
      }

      for (const mesh of container.meshes) {
        cy.get(`xr-model xr-mesh[name="${mesh.name}"]`).should('exist').and('have.attr', 'entity-delegated');
      }

      for (const node of container.transformNodes) {
        if (node === _model.entity) continue;
        cy.get(`xr-model xr-node[name="${node.name}"]`).should('exist').and('have.attr', 'entity-delegated');
      }
    });
  });
});
