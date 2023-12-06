import { ISceneLoaderPlugin, ISceneLoaderPluginExtensions } from '@babylonjs/core/Loading/sceneLoader';
import { AssetContainer } from '@babylonjs/core/assetContainer';
import type { Scene, Nullable } from '@babylonjs/core';
import { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh';
import { Mesh } from '@babylonjs/core/Meshes/mesh';
import { VertexBuffer } from '@babylonjs/core/Meshes/buffer';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';
import { CTM } from './CTM';

export class CTMFileLoader implements ISceneLoaderPlugin {
  public scene!: Scene;
  public name = 'ctm';

  public extensions: ISceneLoaderPluginExtensions = {
    '.ctm': {
      isBinary: true,
    },
  };

  /**
   * Defines if Y and Z axes are swapped or not when loading an STL file.
   * The default is false to maintain backward compatibility. When set to
   * true, coordinates from the STL file are used without change.
   */
  public static DO_NOT_ALTER_FILE_COORDINATES = true;

  /**
   * Import meshes into a scene.
   * @param meshesNames An array of mesh names, a single mesh name, or empty string for all meshes that filter what meshes are imported
   * @param scene The scene to import into
   * @param data The data to import
   * @param rootUrl The root url for scene and resources
   * @param meshes The meshes array to import into
   * @param particleSystems The particle systems array to import into
   * @param skeletons The skeletons array to import into
   * @param onError The callback when import fails
   * @returns True if successful or false otherwise
   */
  public importMesh(meshesNames: any, scene: Scene, data: any, rootUrl: string, meshes: Nullable<AbstractMesh[]>): boolean {
    if (!meshesNames) meshesNames = ['DefaultMesh']; // 必须有一个名字
    if (!Array.isArray(meshesNames)) meshesNames = [meshesNames];

    this.scene = scene;

    const _loadedMeshes: AbstractMesh[] = [];

    for (let i = 0; i < meshesNames.length; i++) {
      const name = meshesNames[i];
      const mesh = this.parse(name, scene, data);
      _loadedMeshes.push(mesh);
    }

    if (meshes) {
      _loadedMeshes.forEach(mesh => meshes.push(mesh));
    }

    return true;
  }

  public load(scene: Scene, data: any, rootUrl: string): boolean {
    const result = this.importMesh(null, scene, data, rootUrl, null);
    return result;
  }

  /**
   * Load into an asset container.
   * @param scene The scene to load into
   * @param data The data to import
   * @param rootUrl The root url for scene and resources
   * @returns The loaded asset container
   */
  public loadAssetContainer(scene: Scene, data: string, rootUrl: string): AssetContainer {
    const container = new AssetContainer(scene);

    scene._blockEntityCollection = true;
    this.importMesh(null, scene, data, rootUrl, container.meshes);
    scene._blockEntityCollection = false;

    return container;
  }

  private parse(name: string, scene: Scene, data: any): Mesh {
    const file = new CTM.File(new CTM.Stream(data));
    const mesh = new Mesh(name, scene);

    const { indices, vertices } = file.body;

    if (!scene.useRightHandedSystem) {
      for (let i = 0; i < indices.length; i += 3) {
        const _t = indices[i + 2];
        indices[i + 2] = indices[i + 1];
        indices[i + 1] = _t;
      }
    }

    mesh.setIndices(indices);
    mesh.setVerticesData(VertexBuffer.PositionKind, vertices);

    const normals: number[] = [];
    VertexData.ComputeNormals(vertices, indices, normals);
    mesh.setVerticesData(VertexBuffer.NormalKind, normals);

    mesh.computeWorldMatrix(true);
    mesh.name = name;

    return mesh;
  }
}
