import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { IMaterialControllerHostType } from '../controller';
import { Material } from '@babylonjs/core/Materials/material';

export class XRBaseMaterial<T extends Material> extends XRSceneScopeElement<T> implements IMaterialControllerHostType {
  @Decorator.property('Boolean', 'backface-culling', false)
  backFaceCulling = false;

  @Decorator.property('Number', 'alpha', 1)
  alpha = 1;

  @Decorator.property('Number', 'side-orientation', 1)
  sideOrientation = 1;

  @Decorator.property('Boolean', 'wireframe', false)
  wireframe = false;

  @Decorator.property('Number', 'alpha-mode', 2)
  alphaMode = 2;

  @Decorator.property('Boolean', 'disable-depth-write', false)
  disableDepthWrite = false;

  @Decorator.property('Number', 'z-offset', 0)
  zOffset = 0;
}
