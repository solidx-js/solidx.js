import { createContext } from '@lit/context';
import type { Scene } from '@babylonjs/core/scene';
import type { Engine } from '@babylonjs/core/Engines/engine';
import type { TransformNode } from '@babylonjs/core/Meshes/transformNode';
import type { AssetContainer } from '@babylonjs/core/assetContainer';

export const Context = {
  Engine: createContext<Engine>('Engine'),
  Scene: createContext<Scene>('Scene'),
  TransformNode: createContext<TransformNode>('TransformNode'),
  AssetContainer: createContext<AssetContainer>('AssetContainer'),
};
