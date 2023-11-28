import { PBRMaterial } from '@babylonjs/core/Materials/PBR';
import { ISchema } from '../util';
import { Component } from './Component';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Color3 } from '@babylonjs/core/Maths/math.color';

export class MaterialComponent extends Component<{ albedoColor?: string; emissiveColor?: string }> {
  static schema: ISchema = {
    type: 'object',
    properties: {
      albedoColor: { type: 'string', default: '#ffffff' },
      emissiveColor: { type: 'string', default: '#000000' },
    },
  };

  private _material: PBRMaterial | null = null;

  get name(): string {
    return 'MaterialComponent';
  }

  private _applyToMesh() {
    if (this.el.node && this.el.node instanceof AbstractMesh) {
      this.el.node.material = this._material;
    }
  }

  private _removeFromMesh() {
    if (this.el.node && this.el.node instanceof AbstractMesh && this.el.node.material === this._material) {
      this.el.node.material = null;
    }
  }

  init(): void {
    super.init();

    this._material = new PBRMaterial('Material', this.scene);
    this._applyToMesh();
  }

  update(): void {
    super.update();

    if (!this._material) return;

    if (this.prevData?.albedoColor !== this.data?.albedoColor) {
      this._material.albedoColor = this.data?.albedoColor ? Color3.FromHexString(this.data.albedoColor) : Color3.White();
    }

    if (this.prevData?.emissiveColor !== this.data?.emissiveColor) {
      this._material.emissiveColor = this.data?.emissiveColor ? Color3.FromHexString(this.data.emissiveColor) : Color3.Black();
    }
  }

  remove(): void {
    super.remove();

    this._removeFromMesh();

    this._material?.dispose();
    this._material = null;
  }
}
