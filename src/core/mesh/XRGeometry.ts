import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { Decorator } from '../Decorator';
import { Vector4 } from '@babylonjs/core/Maths/math.vector';

export class XRGeometry extends XRSceneScopeElement<Geometry> {
  static requiredAttrs: string[] = ['id', 'type'];

  @Decorator.property('String', 'type', 'box')
  type = 'box';

  @Decorator.property('Number', 'size', null)
  size!: number | null;

  @Decorator.property('Number', 'width', null)
  width!: number | null;

  @Decorator.property('Number', 'height', null)
  height!: number | null;

  @Decorator.property('Number', 'depth', null)
  depth!: number | null;

  @Decorator.property('Number', 'side-orientation', null)
  sideOrientation!: number | null;

  @Decorator.property('Vector4', 'front-uvs', null)
  frontUVs!: Vector4 | null;

  @Decorator.property('Vector4', 'back-uvs', null)
  backUVs!: Vector4 | null;

  @Decorator.property('Boolean', 'wrap', null)
  wrap!: boolean | null;

  @Decorator.property('Number', 'top-base-at', null)
  topBaseAt!: number | null;

  @Decorator.property('Number', 'bottom-base-at', null)
  bottomBaseAt!: number | null;

  @Decorator.property('Number', 'segments', null)
  segments!: number | null;

  @Decorator.property('Number', 'diameter', null)
  diameter!: number | null;

  @Decorator.property('Number', 'diameter-x', null)
  diameterX!: number | null;

  @Decorator.property('Number', 'diameter-y', null)
  diameterY!: number | null;

  @Decorator.property('Number', 'diameter-z', null)
  diameterZ!: number | null;

  @Decorator.property('Number', 'arc', null)
  arc!: number | null;

  @Decorator.property('Number', 'slice', null)
  slice!: number | null;

  @Decorator.property('Boolean', 'dedup-top-bottom-indices', null)
  dedupTopBottomIndices!: boolean | null;

  @Decorator.property('Number', 'diameter-top', null)
  diameterTop!: number | null;

  @Decorator.property('Number', 'diameter-bottom', null)
  diameterBottom!: number | null;

  @Decorator.property('Number', 'tessellation', null)
  tessellation!: number | null;

  @Decorator.property('Number', 'subdivisions', null)
  subdivisions!: number | null;

  @Decorator.property('Boolean', 'has-rings', null)
  hasRings!: boolean | null;

  @Decorator.property('Boolean', 'enclose', null)
  enclose!: boolean | null;

  @Decorator.property('Number', 'cap', null)
  cap!: number | null;

  constructor() {
    super();
  }

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

    const vert = this.scene.createVert({ ...this.evaluated } as any);
    this.entity.setAllVerticesData(vert, true);
  }
}
