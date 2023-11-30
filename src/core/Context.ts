import { Scene } from '@babylonjs/core/scene';
import { Engine } from '@babylonjs/core/Engines/engine';
import { createContext } from '@lit/context';
import { TransformNode } from '@babylonjs/core/Meshes/transformNode';

export const Context = {
  Engine: createContext<Engine>('Engine'),
  Scene: createContext<Scene>('Scene'),
  TransformNode: createContext<TransformNode>('TransformNode'),
};
