import { XRSceneScopeElement } from './XRSceneScopeElement';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { Decorator } from './Decorator';

export class XRGeometry extends XRSceneScopeElement<Geometry> {
  static requiredAttrs: string[] = ['id', 'type'];

  @Decorator.property('String')
  type = 'box';

  connected(): void {
    super.connected();
    this.entity = new Geometry(this.id, this.scene, undefined, true);
    this.scene.addGeometry(this.entity);
  }

  disconnected(): void {
    super.disconnected();
    this.entity?.dispose();
    this.entity = null;
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    if (changed.has('type')) {
      const vert = this.scene.createVert({ type: this.evaluated.type as any });
      this.entity.setAllVerticesData(vert, true);
    }
  }
}
