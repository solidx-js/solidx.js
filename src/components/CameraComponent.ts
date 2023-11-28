import { Vector3 } from '@babylonjs/core';
import { Component } from './Component';
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera';
import { ISchema } from '../util';

export class CameraComponent extends Component {
  static schema: ISchema = {
    type: 'object',
    properties: {
      far: { type: 'number', default: 10000 },
      fov: { type: 'number', default: 80, min: 0 },
      near: { type: 'number', default: 0.005, min: 0 },
      spectator: { type: 'boolean', default: false },
      zoom: { type: 'number', default: 1, min: 0 },
    },
    default: {},
  };

  private _camera: ArcRotateCamera | null = null;

  get camera() {
    return this._camera;
  }

  init(): void {
    super.init();
    this._camera = new ArcRotateCamera('Camera', 0, 0, 10, new Vector3(0, 0, 0), this.scene);
  }

  remove(): void {
    super.remove();

    this._camera?.dispose();
  }
}
