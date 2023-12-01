import { consume } from '@lit/context';
import { XRElement } from './XRElement';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';
import { customElement, property } from 'lit/decorators';

export class XRGeometry extends XRElement<Geometry> {
  static requiredAttrs: string[] = ['id'];

  @consume({ context: Context.Scene, subscribe: true })
  @property({ attribute: false })
  scene!: Scene;

  private _geometry: Geometry | null = null;

  @property({ type: String })
  type = 'custom';

  get geometry() {
    return this._geometry;
  }

  get entity() {
    return this._geometry;
  }

  connected(): void {
    super.connected();
    this.render();
  }

  disconnected(): void {
    super.disconnected();
    this._geometry?.dispose();
    this._geometry = null;
  }

  render() {
    const type = this.type;
    const vert = this.scene.systems.mesh.createVert({ type: type as any });

    if (!this._geometry) {
      this._geometry = new Geometry(this.id, this.scene, vert, true);
      this.scene.addGeometry(this._geometry);
    }
    //
    else {
      this._geometry.setAllVerticesData(vert, true);
    }
  }
}
