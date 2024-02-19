import { Camera } from './Camera';
import { Mesh } from './Mesh';
import { Node } from './Node';
import { Scene } from './Scene';
import { IMainFragmentShaderProp, IMainVertexShaderProp, MainFragmentShader, MainVertexShader } from './Shader';
import { IGlxInstance, glx } from './glx';

export class Engine {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private glx: IGlxInstance<IMainVertexShaderProp | IMainFragmentShaderProp>;

  constructor() {
    this.canvas = document.createElement('canvas');

    this.gl = this.canvas.getContext('webgl2') as WebGL2RenderingContext;
    if (!this.gl) throw new Error('WebGL2 not supported');

    this.glx = glx.of(this.gl, MainVertexShader.tpl, MainFragmentShader.tpl, {
      attributes: MainVertexShader.attributes,
      uniforms: { ...MainVertexShader.uniforms, ...MainFragmentShader.uniforms },
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
