import { Geometry } from './Geometry';
import { Node } from './Node';

export class Mesh extends Node {
  geometry: Geometry = Geometry.create('box', { width: 1, height: 1, depth: 1 });
}
