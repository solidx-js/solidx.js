import { Material } from '@babylonjs/core/Materials/material';
import { System } from './System';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { Geometry } from '@babylonjs/core/Meshes/geometry';
import { Animation } from '@babylonjs/core/Animations/animation';

export class EntitySystem extends System {
  get name() {
    return 'EntitySystem';
  }

  async waitFor(type: 'mesh', id: string, abortSignal: AbortSignal): Promise<Mesh>;
  async waitFor(type: 'material', id: string, abortSignal: AbortSignal): Promise<Material>;
  async waitFor(type: 'geometry', id: string, abortSignal: AbortSignal): Promise<Geometry>;
  async waitFor(type: 'animation', id: string, abortSignal: AbortSignal): Promise<Animation>;
  async waitFor(type: string, id: string, abortSignal: AbortSignal): Promise<any> {
    abortSignal.throwIfAborted();

    let _getEntity: (() => any) | null = null;

    if (type === 'mesh') _getEntity = () => this.scene.getMeshById(id);
    else if (type === 'material') _getEntity = () => this.scene.getMaterialById(id);
    else if (type === 'geometry') _getEntity = () => this.scene.getGeometryById(id);
    else if (type === 'animation') _getEntity = () => this.scene.animations.find(a => a.name === id);

    if (!_getEntity) throw new Error(`Unknown type: ${type}`);

    const _entity = _getEntity();
    if (_entity) return _entity;

    return new Promise((resolve, reject) => {
      const _handler = () => {
        const _entity = _getEntity!();
        if (_entity) {
          this.scene.onAfterRenderObservable.removeCallback(_handler);
          resolve(_entity);
        }
      };
      this.scene.onAfterRenderObservable.add(_handler);

      abortSignal.addEventListener('abort', () => {
        this.scene.onAfterRenderObservable.removeCallback(_handler);
        reject(new DOMException('Aborted', 'AbortError'));
      });
    });
  }
}
