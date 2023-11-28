import { CreateBoxVertexData } from '@babylonjs/core/Meshes/Builders';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { ISchema } from '../util';
import { Component } from './Component';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

export class GeometryComponent extends Component<{ primitive?: string }> {
  static schema: ISchema = {
    type: 'object',
    properties: {
      primitive: { type: 'string', default: 'box' },
    },
  };

  private _vert: VertexData | null = null;

  get name() {
    return 'GeometryComponent';
  }

  get vert() {
    return this._vert;
  }

  init(): void {
    super.init();
    this._vert = new VertexData();
  }

  update(): void {
    const lastPrimitive = this.prevData?.primitive;
    const curPrimitive = this.data?.primitive;

    if (lastPrimitive !== curPrimitive) {
      if (curPrimitive) {
        if (curPrimitive === 'box') {
          this._vert = CreateBoxVertexData({});
          const mesh = new Mesh('box', this.scene);
          this._vert.applyToMesh(mesh);
        }
      } else {
        this._vert = null;
      }
    }
  }

  remove(): void {
    super.remove();
    this._vert = null;
  }
}
