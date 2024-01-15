import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { ElementUtil, IDataType, Schema } from '../../util';
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
import { ElementRegistry } from '../../registry';

export type IXRMeshProps = ITransformNodeLikeImpl & {
  geometry: Record<string, IDataType> | null;
  material: string | null;
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
      material: mesh.material ? `[entity-id="${mesh.material.ID}"]` : null,
    };

    return props;
  }

  @Decorator.property('Object', 'geometry', null)
  geometry: Record<string, IDataType> | null = null;

  @Decorator.property('String', 'material', null)
  material: string | null = null;

  @Decorator.property('Vector3', 'position', null)
  position: Vector3 | null = null;

  @Decorator.property('Vector3', 'rotation', null)
  rotation: Vector3 | null = null;

  @Decorator.property('Quaternion', 'quaternion', null)
  quaternion: Quaternion | null = null;

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale: Vector3 | null = null;

  @Decorator.property('Boolean', 'disable-pointer-event', null)
  disablePointerEvent: boolean | null = null;

  @Decorator.property('Number', 'layer', null)
  layer: number | null = null;

  @Decorator.property('Boolean', 'entity-delegated', null)
  entityDelegated: boolean | null = null;

  @state()
  _material: (HTMLElement & IMaterialImpl) | null = null;

  constructor() {
    super();

    new TransformLikeController(this);
    new TagRefController(this, 'material', '_material', 'xr-material');
  }

  connected(): void {
    super.connected();

    if (!this.entityDelegated) {
      this.entity = new Mesh(this.id, this.scene, ElementUtil.closestTransformNodeLike(this));
      this.entity.receiveShadows = true;
      Tags.AddTagsTo(this.entity, 'self-created');
    }
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

    if (changed.has('geometry') && this.evaluated.geometry) {
      const _vertexData = getVertexDataFromGeometryArg(this.evaluated.geometry, true);
      if (_vertexData) {
        _vertexData.applyToMesh(this.entity);
      }
    }

    if (changed.has('_material')) {
      this.entity.material = this._material?.entity || (this.entityDelegated ? this.entity.material : this.scene.defaultMaterial);
    }

    if (changed.has('disablePointerEvent')) {
      this.entity.isPickable = !this.disablePointerEvent;
    }
  }
}

ElementRegistry.Instance.register('xr-mesh', XRMesh as any);

function getVertexDataFromGeometryArg(arg: Record<string, IDataType>, useCamelCase = false): VertexData | null {
  if (!arg.type) return null;

  const geoDef = GEO_DEFS[arg.type];
  if (!geoDef) return null;

  const _vertArgs: any = {};

  for (let [_key, _value] of Object.entries(arg)) {
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
