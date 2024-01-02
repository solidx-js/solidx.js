import { html } from 'lit';
import '../../src';

describe('xr-geometry', () => {
  const geoTypes = ['box', 'sphere', 'disc', 'cylinder', 'plane', 'torus'];

  geoTypes.forEach(type => {
    it(type, () => {
      cy.bootstrap();

      cy.mount(html`
        <xr-scene>
          <xr-camera radius="3"></xr-camera>
          <xr-mesh geometry="type: ${type}" rotation="0 45 0"></xr-mesh>
        </xr-scene>
      `);

      cy.wait(800);
      cy.get('xr-scene').matchImageSnapshot();
    });
  });
});
