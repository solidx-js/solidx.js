import { consume } from '@lit/context';
import { XRElement } from './XRElement';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { Context } from './Context';
import { Scene } from '@babylonjs/core/scene';
import { property } from 'lit/decorators';

export class XRGeometry extends XRElement<Geometry> {
  static requiredAttrs: string[] = ['id'];

  @consume({ context: Context.Scene, subscribe: true })
  @property({ attribute: false })
  scene!: Scene;

  @property({ type: String })
  type = 'custom';

  connected(): void {
    super.connected();
    this.render();
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }

  render() {
    const type = this.type;
    const vert = this.scene.systems.mesh.createVert({ type: type as any });

    if (!this.entity) {
      this.entity = new Geometry(this.id, this.scene, vert, true);
      this.scene.addGeometry(this.entity);
    }
    //
    else {
      this.entity.setAllVerticesData(vert, true);
    }
  }
}
