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

    let vert: VertexData | null = null;
    const data = { ...this.evaluated };

    // box
    if (
      (changed.has('type') && data.type === 'box') ||
      (data.type === 'box' &&
        (changed.has('size') ||
          changed.has('width') ||
          changed.has('height') ||
          changed.has('depth') ||
          changed.has('sideOrientation') ||
          changed.has('frontUVs') ||
          changed.has('backUVs') ||
          changed.has('wrap') ||
          changed.has('topBaseAt') ||
          changed.has('bottomBaseAt')))
    ) {
      vert = CreateBoxVertexData({ ...data } as any);
    }

    // sphere
    if (
      (changed.has('type') && data.type === 'sphere') ||
      (data.type === 'sphere' &&
        (changed.has('diameter') ||
          changed.has('diameterX') ||
          changed.has('diameterY') ||
          changed.has('diameterZ') ||
          changed.has('arc') ||
          changed.has('slice') ||
          changed.has('sideOrientation') ||
          changed.has('frontUVs') ||
          changed.has('backUVs') ||
          changed.has('dedupTopBottomIndices')))
    ) {
      vert = CreateSphereVertexData({ ...data } as any);
    }

    // Disc
    if (
      (changed.has('type') && data.type === 'disc') ||
      (data.type === 'disc' &&
        (changed.has('radius') ||
          changed.has('tessellation') ||
          changed.has('sideOrientation') ||
          changed.has('frontUVs') ||
          changed.has('backUVs')))
    ) {
      vert = CreateDiscVertexData({ ...data } as any);
    }

    // Cylinder
    if (
      (changed.has('type') && data.type === 'cylinder') ||
      (data.type === 'cylinder' &&
        (changed.has('height') ||
          changed.has('diameterTop') ||
          changed.has('diameterBottom') ||
          changed.has('tessellation') ||
          changed.has('subdivisions') ||
          changed.has('hasRings') ||
          changed.has('enclose') ||
          changed.has('cap') ||
          changed.has('sideOrientation') ||
          changed.has('frontUVs') ||
          changed.has('backUVs')))
    ) {
      vert = CreateCylinderVertexData({ ...data } as any);
    }

    // Plane
    if (
      (changed.has('type') && data.type === 'plane') ||
      (data.type === 'plane' &&
        (changed.has('size') ||
          changed.has('width') ||
          changed.has('height') ||
          changed.has('sideOrientation') ||
          changed.has('frontUVs') ||
          changed.has('backUVs')))
    ) {
      vert = CreatePlaneVertexData({ ...data } as any);
    }

    if (!vert) return;
    this.entity.setAllVerticesData(vert, true);
  }
}
