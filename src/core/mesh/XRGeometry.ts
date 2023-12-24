import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { Vector4 } from '@babylonjs/core/Maths/math.vector';
import { IGeometryImpl } from '../impl';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { CreateBoxVertexData } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { CreateSphereVertexData } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
import { CreateDiscVertexData } from '@babylonjs/core/Meshes/Builders/discBuilder';
import { CreateCylinderVertexData } from '@babylonjs/core/Meshes/Builders/cylinderBuilder';
import { CreatePlaneVertexData } from '@babylonjs/core/Meshes/Builders/planeBuilder';
import { CreateTorusVertexData } from '@babylonjs/core/Meshes/Builders/torusBuilder';

export class XRGeometry extends XRSceneScopeElement<Geometry> implements IGeometryImpl {
  static requiredAttrs: string[] = ['id', 'type'];

  @Decorator.property('String', 'type', 'box')
  type = 'box';

  @Decorator.property('Number', 'size', null)
  size: number | null = null;

  @Decorator.property('Number', 'width', null)
  width: number | null = null;

  @Decorator.property('Number', 'height', null)
  height: number | null = null;

  @Decorator.property('Number', 'depth', null)
  depth: number | null = null;

  @Decorator.property('Number', 'side-orientation', null)
  sideOrientation: number | null = null;

  @Decorator.property('Vector4', 'front-uvs', null)
  frontUVs: Vector4 | null = null;

  @Decorator.property('Vector4', 'back-uvs', null)
  backUVs: Vector4 | null = null;

  @Decorator.property('Boolean', 'wrap', null)
  wrap: boolean | null = null;

  @Decorator.property('Number', 'top-base-at', null)
  topBaseAt: number | null = null;

  @Decorator.property('Number', 'bottom-base-at', null)
  bottomBaseAt: number | null = null;

  @Decorator.property('Number', 'segments', null)
  segments: number | null = null;

  @Decorator.property('Number', 'diameter', null)
  diameter: number | null = null;

  @Decorator.property('Number', 'diameter-x', null)
  diameterX: number | null = null;

  @Decorator.property('Number', 'diameter-y', null)
  diameterY: number | null = null;

  @Decorator.property('Number', 'diameter-z', null)
  diameterZ: number | null = null;

  @Decorator.property('Number', 'arc', null)
  arc: number | null = null;

  @Decorator.property('Number', 'slice', null)
  slice: number | null = null;

  @Decorator.property('Boolean', 'dedup-top-bottom-indices', null)
  dedupTopBottomIndices: boolean | null = null;

  @Decorator.property('Number', 'diameter-top', null)
  diameterTop: number | null = null;

  @Decorator.property('Number', 'diameter-bottom', null)
  diameterBottom: number | null = null;

  @Decorator.property('Number', 'tessellation', null)
  tessellation: number | null = null;

  @Decorator.property('Number', 'subdivisions', null)
  subdivisions: number | null = null;

  @Decorator.property('Boolean', 'has-rings', null)
  hasRings: boolean | null = null;

  @Decorator.property('Boolean', 'enclose', null)
  enclose: boolean | null = null;

  @Decorator.property('Number', 'cap', null)
  cap: number | null = null;

  @Decorator.property('Number', 'thickness', null)
  thickness: number | null = null;

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
    if (!GEO_DEFS[this.evaluated.type]) return;

    const data = { ...this.evaluated };

    if (changed.has('type') || GEO_DEFS[data.type].props.some(p => changed.has(p))) {
      const vert = GEO_DEFS[data.type].factory(data);
      this.entity.setAllVerticesData(vert, true);
    }
  }
}

const GEO_DEFS: Record<string, { props: string[]; factory: (data: any) => VertexData }> = {
  box: {
    props: ['size', 'width', 'height', 'depth', 'sideOrientation', 'frontUVs', 'backUVs', 'wrap', 'topBaseAt', 'bottomBaseAt'],
    factory: CreateBoxVertexData,
  },
  sphere: {
    props: [
      'diameter',
      'diameterX',
      'diameterY',
      'diameterZ',
      'arc',
      'slice',
      'sideOrientation',
      'frontUVs',
      'backUVs',
      'dedupTopBottomIndices',
    ],
    factory: CreateSphereVertexData,
  },
  disc: {
    props: ['radius', 'tessellation', 'sideOrientation', 'frontUVs', 'backUVs'],
    factory: CreateDiscVertexData,
  },
  cylinder: {
    props: [
      'height',
      'diameterTop',
      'diameterBottom',
      'tessellation',
      'subdivisions',
      'hasRings',
      'enclose',
      'cap',
      'sideOrientation',
      'frontUVs',
      'backUVs',
    ],
    factory: CreateCylinderVertexData,
  },
  plane: {
    props: ['size', 'width', 'height', 'sideOrientation', 'frontUVs', 'backUVs'],
    factory: CreatePlaneVertexData,
  },
  torus: {
    props: ['diameter', 'thickness', 'tessellation', 'sideOrientation', 'frontUVs', 'backUVs'],
    factory: CreateTorusVertexData,
  },
};
