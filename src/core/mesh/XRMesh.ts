import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { ElementUtil, IDataType, IDataTypeMap, Schema, URIUtil } from '../../util';
import { TagRefController, TransformLikeController } from '../controller';
import { Decorator } from '../Decorator';
import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { state } from 'lit/decorators.js';
import { ITransformNodeLikeImpl } from '../impl';
import { IMaterialImpl } from '../impl';
import { CreateBoxVertexData } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { CreateSphereVertexData } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
import { CreateDiscVertexData } from '@babylonjs/core/Meshes/Builders/discBuilder';
import { CreateCylinderVertexData } from '@babylonjs/core/Meshes/Builders/cylinderBuilder';
import { CreatePlaneVertexData } from '@babylonjs/core/Meshes/Builders/planeBuilder';
import { CreateTorusVertexData } from '@babylonjs/core/Meshes/Builders/torusBuilder';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import camelCase from 'lodash/camelCase';
import { Tags } from '@babylonjs/core/Misc/tags';
import { ElementRegistry, PrimitiveMap } from '../../registry';
import { Color4 } from '@babylonjs/core/Maths/math.color';

export type IXRMeshProps = ITransformNodeLikeImpl & {
  geometry: IDataTypeMap['URI'] | null;
  material: IDataTypeMap['URI'] | null;

  // 边缘渲染
  enableEdges: boolean | null;
  edgesWidth: number | null;
  edgesColor: Color4 | null;

  // 轮廓渲染
  enableOutline: boolean | null;
};

export class XRMesh extends XRSceneScopeElement<Mesh> implements IXRMeshProps {
  static getPropsFrom(mesh: Mesh) {
    const props: IXRMeshProps = {
      entity: mesh,
      position: mesh.position,
      rotation: mesh.rotation,
      quaternion: mesh.rotationQuaternion || null,
      scale: mesh.scaling,
      layer: mesh.renderingGroupId,
      entityDelegated: null,
      geometry: null,
      material: mesh.material ? URIUtil.parse(`link://tag?selector=[entity-id="${mesh.material.ID}"]`) : null,
      enableEdges: !!mesh._edgesRenderer,
      edgesWidth: mesh.edgesWidth ?? null,
      edgesColor: mesh.edgesColor ?? null,
      enableOutline: mesh.renderOutline,
    };

    return props;
  }

  @Decorator.property('URI', 'geometry', null, {
    uriPreset: {
      box: {
        protocol: 'primitive:',
        host: 'box',
        query: {
          size: { dType: 'Number', min: 0, step: 0.1 },
          width: { dType: 'Number', min: 0, step: 0.1 },
          height: { dType: 'Number', min: 0, step: 0.1 },
          depth: { dType: 'Number', min: 0, step: 0.1 },
        },
      },
      sphere: {
        protocol: 'primitive:',
        host: 'sphere',
        query: {
          diameter: { dType: 'Number', min: 0, step: 0.1 },
          'diameter-x': { dType: 'Number', min: 0, step: 0.1 },
          'diameter-y': { dType: 'Number', min: 0, step: 0.1 },
          'diameter-z': { dType: 'Number', min: 0, step: 0.1 },
          arc: { dType: 'Number', min: 0, max: 1, step: 0.01 },
          slice: { dType: 'Number', min: 0, max: 1, step: 0.01 },
        },
      },
      disc: {
        protocol: 'primitive:',
        host: 'disc',
        query: {
          radius: { dType: 'Number', min: 0, step: 0.1 },
          tessellation: { dType: 'Number', min: 0, step: 1 },
        },
      },
      cylinder: {
        protocol: 'primitive:',
        host: 'cylinder',
        query: {
          height: { dType: 'Number', min: 0, step: 0.1 },
          'diameter-top': { dType: 'Number', min: 0, step: 0.1 },
          'diameter-bottom': { dType: 'Number', min: 0, step: 0.1 },
          tessellation: { dType: 'Number', min: 0, step: 1 },
          subdivisions: { dType: 'Number', min: 0, step: 1 },
          'has-rings': { dType: 'Boolean' },
          enclose: { dType: 'Boolean' },
          cap: { dType: 'Number', enums: [Mesh.NO_CAP, Mesh.CAP_START, Mesh.CAP_END, Mesh.CAP_ALL] },
        },
      },
      plane: {
        protocol: 'primitive:',
        host: 'plane',
        query: {
          size: { dType: 'Number', min: 0, step: 0.1 },
          width: { dType: 'Number', min: 0, step: 0.1 },
          height: { dType: 'Number', min: 0, step: 0.1 },
        },
      },
      torus: {
        protocol: 'primitive:',
        host: 'torus',
        query: {
          diameter: { dType: 'Number', min: 0, step: 0.1 },
          thickness: { dType: 'Number', min: 0, step: 0.1 },
          tessellation: { dType: 'Number', min: 0, step: 1 },
        },
      },
    },
  })
  geometry: IDataTypeMap['URI'] | null = null;

  @Decorator.property('URI', 'material', null)
  material: IDataTypeMap['URI'] | null = null;

  @Decorator.property('Vector3', 'position', null)
  position: Vector3 | null = null;

  @Decorator.property('Vector3', 'rotation', null)
  rotation: Vector3 | null = null;

  @Decorator.property('Quaternion', 'quaternion', null)
  quaternion: Quaternion | null = null;

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale: Vector3 | null = null;

  @Decorator.property('Boolean', 'disable-pointer-event', null, { hidden: true })
  disablePointerEvent: boolean | null = null;

  @Decorator.property('Number', 'layer', null)
  layer: number | null = null;

  @Decorator.property('Boolean', 'entity-delegated', null, { hidden: true })
  entityDelegated: boolean | null = null;

  @Decorator.property('Boolean', 'enable-edges', null)
  enableEdges: boolean | null = null;

  @Decorator.property('Number', 'edges-width', 1)
  edgesWidth: number | null = null;

  @Decorator.property('Color4', 'edges-color', new Color4(1, 0, 0, 1))
  edgesColor: Color4 | null = null;

  @Decorator.property('Boolean', 'enable-outline', null)
  enableOutline: boolean | null = null;

  @Decorator.property('Boolean', 'flat-shading', null)
  flatShading: boolean | null = null;

  @state()
  _material: (HTMLElement & IMaterialImpl) | null = null;

  constructor() {
    super();

    new TransformLikeController(this);
    new TagRefController(this, 'material', '_material', PrimitiveMap.material);
  }

  connected(): void {
    super.connected();

    if (!this.entityDelegated) {
      this.entity = new Mesh(this.id, this.scene, ElementUtil.closestTransformNodeLike(this));
      this.entity.receiveShadows = true;
      Tags.AddTagsTo(this.entity, 'self-created');
    }
  }

  onAncestorCoordinate(): void {
    super.onAncestorCoordinate();

    if (!this.entity) return;

    this.entity.parent = ElementUtil.closestTransformNodeLike(this);
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) {
      if (Tags.MatchesQuery(this.entity, 'self-created')) this.entity.dispose();
      this.entity = null;
    }
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;

    let isVertexDirty = false;

    if ((changed.has('geometry') || changed.has('flatShading')) && this.evaluated.geometry) {
      const _vertexData = getVertexDataFromGeometryArg(this.evaluated.geometry, true);
      if (_vertexData) {
        _vertexData.applyToMesh(this.entity);
        isVertexDirty = true;

        // flat shading
        if (this.evaluated.flatShading) this.entity.convertToFlatShadedMesh();
      }
    }

    if (changed.has('_material')) {
      this.entity.material = this._material?.entity || (this.entityDelegated ? this.entity.material : this.scene.defaultMaterial);
    }

    if (changed.has('disablePointerEvent')) {
      this.entity.isPickable = !this.disablePointerEvent;
    }

    if (changed.has('enableEdges') || isVertexDirty) {
      if (this.evaluated.enableEdges) {
        if (isVertexDirty) this.entity.disableEdgesRendering();
        this.entity.enableEdgesRendering();
      } else {
        this.entity.disableEdgesRendering();
      }
    }

    if (changed.has('edgesWidth') && this.evaluated.edgesWidth !== null) this.entity.edgesWidth = this.evaluated.edgesWidth;
    if (changed.has('edgesColor') && this.evaluated.edgesColor !== null) this.entity.edgesColor.copyFrom(this.evaluated.edgesColor);

    if (changed.has('enableOutline')) {
      this.entity.renderOutline = !!this.evaluated.enableOutline;
    }
  }
}

ElementRegistry.Instance.register('xr-mesh', XRMesh as any);

function getVertexDataFromGeometryArg(uri: IDataTypeMap['URI'], useCamelCase = false): VertexData | null {
  const type = uri.query.type || uri.host; // query.type 是为了兼容旧版本

  const geoDef = GEO_DEFS[type];
  if (!geoDef) return null;

  const _vertArgs: any = {};

  for (let [_key, _value] of Object.entries(uri.query)) {
    if (_key === 'type') continue; // type is not a prop

    if (useCamelCase) _key = camelCase(_key);

    const _dType = geoDef.props[_key];
    if (!_dType) continue; // unknown prop

    const _data = Schema.fromAttr(_dType, _value);
    if (_data === null) continue; // invalid prop

    _vertArgs[_key] = _data;
  }

  return geoDef.factory(_vertArgs);
}

const GEO_DEFS: Record<string, { props: Record<string, IDataType>; factory: (data: any) => VertexData }> = {
  box: {
    props: {
      size: 'Number',
      width: 'Number',
      height: 'Number',
      depth: 'Number',
      sideOrientation: 'Number',
      frontUVs: 'Vector4',
      backUVs: 'Vector4',
      wrap: 'Boolean',
      topBaseAt: 'Number',
      bottomBaseAt: 'Number',
    },
    factory: CreateBoxVertexData,
  },
  sphere: {
    props: {
      diameter: 'Number',
      diameterX: 'Number',
      diameterY: 'Number',
      diameterZ: 'Number',
      arc: 'Number',
      slice: 'Number',
      sideOrientation: 'Number',
      frontUVs: 'Vector4',
      backUVs: 'Vector4',
      dedupTopBottomIndices: 'Boolean',
    },
    factory: CreateSphereVertexData,
  },
  disc: {
    props: {
      radius: 'Number',
      tessellation: 'Number',
      sideOrientation: 'Number',
      frontUVs: 'Vector4',
      backUVs: 'Vector4',
    },
    factory: CreateDiscVertexData,
  },
  cylinder: {
    props: {
      height: 'Number',
      diameterTop: 'Number',
      diameterBottom: 'Number',
      tessellation: 'Number',
      subdivisions: 'Number',
      hasRings: 'Boolean',
      enclose: 'Boolean',
      cap: 'Number',
      sideOrientation: 'Number',
      frontUVs: 'Vector4',
      backUVs: 'Vector4',
    },
    factory: CreateCylinderVertexData,
  },
  plane: {
    props: {
      size: 'Number',
      width: 'Number',
      height: 'Number',
      sideOrientation: 'Number',
      frontUVs: 'Vector4',
      backUVs: 'Vector4',
    },
    factory: CreatePlaneVertexData,
  },
  torus: {
    props: {
      diameter: 'Number',
      thickness: 'Number',
      tessellation: 'Number',
      sideOrientation: 'Number',
      frontUVs: 'Vector4',
      backUVs: 'Vector4',
    },
    factory: CreateTorusVertexData,
  },
};
