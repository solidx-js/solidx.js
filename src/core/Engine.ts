import { Camera } from './Camera';
import { Mesh } from './Mesh';
import { Node } from './Node';
import { Scene } from './Scene';
import { IGlxInstance, glx } from './glx';
import { IGlslDefine, IGlslProp, glsl } from './glsl';
import { DirectionalLight, PointLight } from './Light';

export class Engine {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private glx: IGlxInstance<Partial<IGlslDefine>, Partial<IGlslProp>>;

  constructor(canvas?: HTMLCanvasElement) {
    this.canvas = canvas || document.createElement('canvas');

    this.gl = this.canvas.getContext('webgl2') as WebGL2RenderingContext;
    if (!this.gl) throw new Error('WebGL2 not supported');

    this.glx = glx.of(this.gl, glsl.getFile('vertex.glsl'), glsl.getFile('fragment.glsl'), {
      attributes: {
        a_position: { itemType: 'vec3', required: true },
        a_normal: { itemType: 'vec3' },
        a_uv: { itemType: 'vec2' },
        a_color: { itemType: 'vec4' },
      },
      uniforms: {
        u_worldMatrix: { type: 'mat4' },
        u_projectionMatrix: { type: 'mat4' },
        u_viewMatrix: { type: 'mat4' },
      },
      uniformBlockArrays: {
        u_pointLights: { structure: { color: 'vec3', position: 'vec3', intensity: 'float' } },
        u_directionalLights: { structure: { color: 'vec3', direction: 'vec3', intensity: 'float' } },
      },
    });
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

    this.glx.clear({ color: [0, 0, 0, 1] });

    for (let i = 0; i < meshes.length; i++) {
      const mesh = meshes[i];

      const define: Partial<IGlslDefine> = {
        NUM_POINT_LIGHTS: pointLights.length,
        NUM_DIRECTIONAL_LIGHTS: directionalLights.length,
      };

      if (mesh.geometry.uvs) define.HAS_ATTR_UV = true;

      console.log('@@@', 'define ->', define);

      this.glx.render(
        define,
        {
          a_position: mesh.geometry.vertices,
          a_normal: mesh.geometry.normals || undefined,
          a_uv: mesh.geometry.uvs || undefined,
          u_worldMatrix: new Float32Array(mesh.worldMatrix.asArray()),
          u_projectionMatrix: new Float32Array(activeCamera.projectionMatrix.asArray()),
          u_viewMatrix: new Float32Array(activeCamera.viewMatrix.asArray()),

          u_pointLights: pointLights.map(l => ({
            color: new Float32Array(l.color.toArray()),
            position: new Float32Array(l.position.toArray()),
            intensity: l.intensity,
          })),
          u_directionalLights: directionalLights.map(l => ({
            color: new Float32Array(l.color.toArray()),
            direction: new Float32Array(l.direction.toArray()),
            intensity: l.intensity,
          })),
        },
        mesh.geometry.indices
      );
    }
  }
}
