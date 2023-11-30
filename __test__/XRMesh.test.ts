import '../src';

describe('XRMesh', () => {
  test('normal', () => {
    document.body.innerHTML = `
<xr-engine width="1000" height="400">
  <xr-scene>
    <xr-geometry id="g1" type="box"></xr-geometry>
    <xr-material id="m1" emissiveColor="#ff0000"></xr-material>
    <xr-mesh geometry="#g1" material="#m1"></xr-mesh>
  </xr-scene>
</xr-engine>
    `;
  });
});
