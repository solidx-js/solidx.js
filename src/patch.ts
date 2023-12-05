import { Scene } from '@babylonjs/core/scene';
import { IEntityType } from './type';
import { CreateBoxVertexData } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { CreateSphereVertexData } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
import { CreatePlaneVertexData } from '@babylonjs/core/Meshes/Builders/planeBuilder';

Scene.prototype.waitFor = async function waitFor(type: IEntityType, id: string, abortSignal: AbortSignal): Promise<any> {
  abortSignal.throwIfAborted();

  let _getEntity: () => any;

  if (type === 'mesh') _getEntity = () => this.getMeshById(id);
  else if (type === 'material') _getEntity = () => this.getMaterialById(id);
  else if (type === 'geometry') _getEntity = () => this.getGeometryById(id);
  else if (type === 'animation') _getEntity = () => this.animations.find(a => a.name === id);
  else if (type === 'transformNode') _getEntity = () => this.getTransformNodeById(id);
  else if (type === 'transformNodeLike') {
    _getEntity = () => {
      return this.getMeshById(id) || this.getTransformNodeById(id);
    };
  } else throw new Error(`Unknown type: ${type}`);

  const _entity = _getEntity();
  if (_entity) return _entity;

  return new Promise((resolve, reject) => {
    const _handler = () => {
      const _entity = _getEntity!();
      if (_entity) {
        this.onAfterRenderObservable.removeCallback(_handler);
        resolve(_entity);
      }
    };
    this.onAfterRenderObservable.add(_handler);

    abortSignal.addEventListener('abort', () => {
      this.onAfterRenderObservable.removeCallback(_handler);
      reject(new DOMException('Aborted', 'AbortError'));
    });
  });
};

Scene.prototype.createVert = function createVert(arg: { type: 'box' } | { type: 'sphere' } | { type: 'plane' }): any {
  const { type, ...rest } = arg;

  switch (arg.type) {
    case 'box':
      return CreateBoxVertexData({ ...rest });

    case 'sphere':
      return CreateSphereVertexData({ diameter: 1, ...rest });

    case 'plane':
      return CreatePlaneVertexData({ size: 1, ...rest });
  }
};
