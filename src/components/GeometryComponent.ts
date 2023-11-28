import { CreateBoxVertexData, CreateSphereVertexData } from '@babylonjs/core/Meshes/Builders';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { ISchema } from '../util';
import { Component } from './Component';
import { Mesh } from '@babylonjs/core/Meshes/mesh';

export class GeometryComponent extends Component<{
  primitive?: string;
  size?: number;
  width?: number;
  height?: number;
  depth?: number;
}> {
  static schema: ISchema = {
    type: 'object',
    properties: {
      primitive: { type: 'string', default: 'box' },

      // common
      size: { type: 'number' },
      width: { type: 'number' },
      height: { type: 'number' },
      depth: { type: 'number' },
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

  private _createVert(): void {
    if (!this.data) return;

    const { primitive, ...extra } = this.data;

    switch (primitive) {
      case 'box':
        this._vert = CreateBoxVertexData(extra);
        break;

      case 'sphere':
        this._vert = CreateSphereVertexData({ diameter: extra.size });
        break;
    }
  }

  update(): void {
    const lastPrimitive = this.prevData?.primitive;
    const curPrimitive = this.data?.primitive;

    if (lastPrimitive !== curPrimitive) {
      if (curPrimitive) this._createVert();
      else {
        this._vert = null;
      }
    }

    if (this._vert) {
      if (!this.el.node) this.el.node = new Mesh('mesh', this.scene);
      if (this.el.node instanceof Mesh) this._vert.applyToMesh(this.el.node, true);
    }
  }

  remove(): void {
    super.remove();
    this._vert = null;
  }
}
