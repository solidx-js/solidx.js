import { Camera } from './Camera';
import { Mesh } from './Mesh';
import { Node } from './Node';
import { Scene } from './Scene';
import { ShaderFragment, ShaderVertex } from './Shader';

export class Engine {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;

  private _shaderVertex = new ShaderVertex();
  private _shaderFragment = new ShaderFragment();

  private _glVertexShader: WebGLShader;
  private _glFragmentShader: WebGLShader;
  private _glProgram: WebGLProgram;

  constructor() {
    this.canvas = document.createElement('canvas');

    this.gl = this.canvas.getContext('webgl2') as WebGL2RenderingContext;
    if (!this.gl) throw new Error('WebGL2 not supported');

    this._glVertexShader = this.gl.createShader(this.gl.VERTEX_SHADER)!;
    if (!this._glVertexShader) throw new Error('create vertex shader failed');

    this._glFragmentShader = this.gl.createShader(this.gl.FRAGMENT_SHADER)!;
    if (!this._glFragmentShader) throw new Error('create fragment shader failed');

    this._glProgram = this.gl.createProgram()!;
    if (!this._glProgram) throw new Error('create program failed');
  }

  render(scene: Scene) {
    const meshes: Mesh[] = [];
    const cameras: Camera[] = [];

    Node.walk(scene.root, n => {
      if (n instanceof Mesh) meshes.push(n);
      else if (n instanceof Camera) cameras.push(n);
    });

    const gl = this.gl;

    // 顶点着色器
    gl.shaderSource(this._glVertexShader, this._shaderVertex.toString());
    gl.compileShader(this._glVertexShader);

    // 片元着色器
    gl.shaderSource(this._glFragmentShader, this._shaderFragment.toString());
    gl.compileShader(this._glFragmentShader);

    // 着色器程序
    gl.attachShader(this._glProgram, this._glVertexShader);
    gl.attachShader(this._glProgram, this._glFragmentShader);
    gl.linkProgram(this._glProgram);

    if (!gl.getProgramParameter(this._glProgram, gl.LINK_STATUS)) {
      throw new Error('link failed: ' + gl.getProgramInfoLog(this._glProgram));
    }

    // 使用着色器程序
    gl.useProgram(this._glProgram);

    // 绑定 attribute 变量
    for (const [attr, dType] of Object.entries(this._shaderVertex.attributes)) {
      const location = gl.getAttribLocation(this._glProgram, attr);
      if (location < 0) continue;

      const buffer = gl.createBuffer();
      if (!buffer) throw new Error('create buffer failed');

      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, dType.size, dType.type, dType.normalize, dType.stride, dType.offset);

      gl.bufferData(gl.ARRAY_BUFFER, dType.data, gl.STATIC_DRAW);
    }
  }
}
