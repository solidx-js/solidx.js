import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { IMaterialControllerHostType } from '../controller';
import { Material } from '@babylonjs/core/Materials/material';

export class XRBaseMaterial<T extends Material> extends XRSceneScopeElement<T> implements IMaterialControllerHostType {
  @Decorator.property('Boolean', 'backface-culling')
  backFaceCulling: boolean = false;

  @Decorator.property('Number', 'alpha', 1)
  alpha: number = 1;

  @Decorator.property('Number', 'side-orientation')
  sideOrientation: number = 1;

  @Decorator.property('Boolean', 'wireframe')
  wireframe: boolean = false;

  @Decorator.property('Number', 'alpha-mode')
  alphaMode: number = 2;

  @Decorator.property('Boolean', 'disable-depth-write')
  disableDepthWrite: boolean = false;

  @Decorator.property('Number', 'z-offset')
  zOffset: number = 0;
}
