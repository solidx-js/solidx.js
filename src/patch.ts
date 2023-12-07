import { Scene } from '@babylonjs/core/scene';
import { IEntityType } from './type';
import { CreateBoxVertexData } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { CreateSphereVertexData } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
import { CreatePlaneVertexData } from '@babylonjs/core/Meshes/Builders/planeBuilder';
import { AssetContainer } from '@babylonjs/core/assetContainer';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import { InstancedMesh } from '@babylonjs/core/Meshes/instancedMesh';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { GLTFFileLoader, GLTFLoaderAnimationStartMode } from '@babylonjs/loaders/glTF';
import { TransactionSystem } from './system';

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

Scene.prototype.loadModel = async function loadModel(url: string, forceExt?: string): Promise<AssetContainer> {
  return new Promise((resolve, reject) => {
    const lastSlashIdx = url.lastIndexOf('/');
    const rootUrl = url.slice(0, lastSlashIdx + 1);
    const sceneFilename = url.slice(lastSlashIdx + 1);

    const loader = SceneLoader.LoadAssetContainer(
      rootUrl,
      sceneFilename,
      this,
      // success
      container => {
        const { meshes, materials } = container;

        // 修正网格
        meshes.forEach(m => {
          if (m instanceof InstancedMesh) {
            // skip
          } else {
            m.receiveShadows = true;
          }
        });

        // 修正材质
        materials.forEach(m => {
          if (m instanceof PBRMaterial) {
            m.metallicF0Factor = 0;

            // cycle 下，blender 材质节点无透明通道贴图 & alpha < 1 的时候，不会设置 gltf 的 alphaMode。这里手动纠正。
            if (m.alpha < 1) {
              m.transparencyMode = 2; // ALPHABLEND
            }
          }

          if (m.needAlphaBlending()) {
            m.separateCullingPass = true;
          }
        });

        resolve(container);
      },
      undefined,
      // error
      (_s, _message, error) => reject(error),
      forceExt
    );

    if (loader instanceof GLTFFileLoader) {
      // 默认要先编译 Materials
      loader.compileMaterials = true;

      // 关掉动画自动播放
      loader.animationStartMode = GLTFLoaderAnimationStartMode.NONE;
    }
  });
};

Object.defineProperty(Scene.prototype, 'transactionSystem', {
  get() {
    if (!this._transactionSystem) {
      const ins = new TransactionSystem(this);
      this._transactionSystem = ins;
      this.onDisposeObservable.addOnce(() => ins.dispose());
    }
    return this._transactionSystem;
  },
});
