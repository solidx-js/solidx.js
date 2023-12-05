import { CreateBoxVertexData } from '@babylonjs/core/Meshes/Builders/boxBuilder';
import { System } from './System';
import { CreateSphereVertexData } from '@babylonjs/core/Meshes/Builders/sphereBuilder';
import { CreatePlaneVertexData } from '@babylonjs/core/Meshes/Builders/planeBuilder';
import { VertexData } from '@babylonjs/core/Meshes/mesh.vertexData';

export class MeshSystem extends System {
  get name() {
    return 'MeshSystem';
  }

  createVert(arg: { type: 'box' } | { type: 'sphere' } | { type: 'plane' }): VertexData {
    switch (arg.type) {
      case 'box':
        return CreateBoxVertexData({});

      case 'sphere':
        return CreateSphereVertexData({ diameter: 1 });

      case 'plane':
        return CreatePlaneVertexData({ size: 1 });
    }
  }
}
