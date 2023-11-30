import { Scene } from '@babylonjs/core/scene';
import { Engine } from '@babylonjs/core/Engines/engine';
import { createContext } from '@lit/context';
import { Logger } from 'ah-logger';

export const Context = {
  Engine: createContext<Engine>('Engine'),
  Scene: createContext<Scene>('Scene'),
};
