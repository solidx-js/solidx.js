import { Scene } from '@babylonjs/core/scene';
import { AssetContainer } from '@babylonjs/core/assetContainer';
import { SceneLoader } from '@babylonjs/core/Loading/sceneLoader';
import { InstancedMesh } from '@babylonjs/core/Meshes/instancedMesh';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { GLTFFileLoader, GLTFLoaderAnimationStartMode } from '@babylonjs/loaders/glTF';
import { UtilityLayerRenderer } from '@babylonjs/core/Rendering/utilityLayerRenderer';
import { Gizmo } from '@babylonjs/core/Gizmos/gizmo';
import { randomID } from './util';
import { Material } from '@babylonjs/core/Materials/material';
import { BaseTexture } from '@babylonjs/core/Materials/Textures/baseTexture';
import { Node } from '@babylonjs/core/node';

Gizmo.PreserveScaling = true;
Gizmo.UseAbsoluteScaling = false;

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

Object.defineProperty(Scene.prototype, 'defaultUtilityLayer', {
  get: function () {
    if (!this._defaultUtilityLayer) this._defaultUtilityLayer = new UtilityLayerRenderer(this, false);
    return this._defaultUtilityLayer;
  },
});

Object.defineProperty(Scene.prototype, 'defaultUtilityLayerWithEvents', {
  get: function () {
    if (!this._defaultUtilityLayerWithEvents) this._defaultUtilityLayerWithEvents = new UtilityLayerRenderer(this, true);
    return this._defaultUtilityLayerWithEvents;
  },
});

function patchID(Cls: any) {
  Object.defineProperty(Cls.prototype, 'ID', {
    get: function () {
      if (!this._ID) this._ID = randomID();
      return this._ID;
    },
  });
}

patchID(Node);
patchID(Material);
patchID(BaseTexture);
