import { Camera } from './Camera';
import { Mesh } from './Mesh';
import { Node } from './Node';
import { Scene } from './Scene';
import { IGlxInstance, glx } from './glx';
import { IGlslDefine, IGlslProp, glsl } from './glsl';

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
    });
  }

  render(scene: Scene) {
    const meshes: Mesh[] = [];
    const cameras: Camera[] = [];

    Node.walk(scene.root, n => {
      if (n instanceof Mesh) meshes.push(n);
      else if (n instanceof Camera) cameras.push(n);
    });

    const activeCamera = cameras[0];
    if (!activeCamera) throw new Error('No active camera');

    this.glx.clear({ color: [0, 0, 0, 1] });

    for (let i = 0; i < meshes.length; i++) {
      const mesh = meshes[i];

      this.glx.render(
        {
          HAS_ATTR_NORMAL: false,
          HAS_ATTR_UV: false,
          HAS_ATTR_COLOR: false,
          NUM_DIRECTIONAL_LIGHT: 0,
          NUM_POINT_LIGHT: 0,
        },
        {
          a_position: mesh.geometry.vertex,
          u_worldMatrix: new Float32Array(mesh.worldMatrix.asArray()),
          u_projectionMatrix: new Float32Array(activeCamera.projectionMatrix.asArray()),
          u_viewMatrix: new Float32Array(activeCamera.viewMatrix.asArray()),
        },
        mesh.geometry.element
      );
    }
  }
}
