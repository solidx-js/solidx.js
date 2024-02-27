import { Camera } from './Camera';
import { Mesh } from './Mesh';
import { Node } from './Node';
import { Scene } from './Scene';
import { DirectionalLight, PointLight } from './Light';
import { GlxStore, IGlslDefine } from './GlxStore';

export class Engine {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private glxMng: GlxStore;

  constructor(canvas?: HTMLCanvasElement) {
    this.canvas = canvas || document.createElement('canvas');

    this.gl = this.canvas.getContext('webgl2') as WebGL2RenderingContext;
    if (!this.gl) throw new Error('WebGL2 not supported');

    this.glxMng = new GlxStore(this.gl);
  }

  async init() {
    await this.glxMng.init();
  }

  render(scene: Scene) {
    const meshes: Mesh[] = [];
    const pointLights: PointLight[] = [];
    const directionalLights: DirectionalLight[] = [];
    const cameras: Camera[] = [];

    Node.walk(scene.root, n => {
      if (n instanceof Mesh) meshes.push(n);
      else if (n instanceof Camera) cameras.push(n);
      else if (n instanceof PointLight) pointLights.push(n);
      else if (n instanceof DirectionalLight) directionalLights.push(n);
    });

    const activeCamera = cameras[0];
    if (!activeCamera) throw new Error('No active camera');

    for (let i = 0; i < meshes.length; i++) {
      const mesh = meshes[i];

      const defines: Partial<IGlslDefine> = {
        NUM_POINT_LIGHTS: pointLights.length,
        NUM_DIRECTIONAL_LIGHTS: directionalLights.length,
      };

      if (mesh.geometry.uvs) defines.HAS_ATTR_UV = true;

      const glx = this.glxMng.use(defines);
      console.log('@@@', 'glx ->', glx.vert);
      console.log('@@@', 'glx.frag ->', glx.frag);

      glx.clear({ color: [0, 0, 0, 1] });
      glx.render(
        {
          a_position: { data: mesh.geometry.vertices },
          a_normal: mesh.geometry.normals ? { data: mesh.geometry.normals } : undefined,
          a_uv: mesh.geometry.uvs ? { data: mesh.geometry.uvs } : undefined,
          u_worldMatrix: { data: new Float32Array(mesh.worldMatrix.asArray()) },
          u_projectionMatrix: { data: new Float32Array(activeCamera.projectionMatrix.asArray()) },
          u_viewMatrix: { data: new Float32Array(activeCamera.viewMatrix.asArray()) },

          u_pointLights: pointLights.map(l => ({
            color: { data: new Float32Array(l.color.toArray()) },
            position: { data: new Float32Array(l.position.toArray()) },
            intensity: { data: l.intensity },
          })),
          u_directionalLights: directionalLights.map(l => ({
            color: { data: new Float32Array(l.color.toArray()) },
            direction: { data: new Float32Array(l.direction.toArray()) },
            intensity: { data: l.intensity },
          })),
        },
        mesh.geometry.indices
      );
    }
  }
}
