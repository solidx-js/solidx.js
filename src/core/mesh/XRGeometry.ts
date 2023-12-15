import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { Decorator } from '../Decorator';
import { Vector4 } from '@babylonjs/core/Maths/math.vector';

export class XRGeometry extends XRSceneScopeElement<Geometry> {
  static requiredAttrs: string[] = ['id', 'type'];

  @Decorator.property('String', 'type')
  type = 'box';

  @Decorator.property('Number', 'size')
  size?: number;

  @Decorator.property('Number', 'width')
  width?: number;

  @Decorator.property('Number', 'height')
  height?: number;

  @Decorator.property('Number', 'depth')
  depth?: number;

  @Decorator.property('Number', 'side-orientation')
  sideOrientation?: number;

  @Decorator.property('Vector4', 'front-uvs')
  frontUVs?: Vector4;

  @Decorator.property('Vector4', 'back-uvs')
  backUVs?: Vector4;

  @Decorator.property('Boolean', 'wrap')
  wrap?: boolean;

  @Decorator.property('Number', 'top-base-at')
  topBaseAt?: number;

  @Decorator.property('Number', 'bottom-base-at')
  bottomBaseAt?: number;

  @Decorator.property('Number', 'segments')
  segments?: number;

  @Decorator.property('Number', 'diameter')
  diameter?: number;

  @Decorator.property('Number', 'diameter-x')
  diameterX?: number;

  @Decorator.property('Number', 'diameter-y')
  diameterY?: number;

  @Decorator.property('Number', 'diameter-z')
  diameterZ?: number;

  @Decorator.property('Number', 'arc')
  arc?: number;

  @Decorator.property('Number', 'slice')
  slice?: number;

  @Decorator.property('Boolean', 'dedup-top-bottom-indices')
  dedupTopBottomIndices?: boolean;

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

    const vert = this.scene.createVert({
      type: this.evaluated.type,
      size: this.evaluated.size,
      width: this.evaluated.width,
      height: this.evaluated.height,
      depth: this.evaluated.depth,
      sideOrientation: this.evaluated.sideOrientation,
      frontUVs: this.evaluated.frontUVs,
      backUVs: this.evaluated.backUVs,
      wrap: this.evaluated.wrap,
      topBaseAt: this.evaluated.topBaseAt,
      bottomBaseAt: this.evaluated.bottomBaseAt,
      segments: this.evaluated.segments,
      diameter: this.evaluated.diameter,
      diameterX: this.evaluated.diameterX,
      diameterY: this.evaluated.diameterY,
      diameterZ: this.evaluated.diameterZ,
      arc: this.evaluated.arc,
      slice: this.evaluated.slice,
      dedupTopBottomIndices: this.evaluated.dedupTopBottomIndices,
    } as any);
    this.entity.setAllVerticesData(vert, true);
  }
}
