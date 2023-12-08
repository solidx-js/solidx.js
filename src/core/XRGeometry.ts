import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { property } from 'lit/decorators.js';

export class XRGeometry extends XRSceneScopeElement<Geometry> {
  static requiredAttrs: string[] = ['id'];

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

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    const type = this.type;
    const vert = this.scene.createVert({ type: type as any });

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
