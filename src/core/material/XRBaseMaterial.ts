import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { IMaterialControllerHostType } from '../controller';
import { Material } from '@babylonjs/core/Materials/material';

export class XRBaseMaterial<T extends Material> extends XRSceneScopeElement<T> implements IMaterialControllerHostType {
  @Decorator.property('Boolean', 'backface-culling', false)
  backFaceCulling!: boolean;

  @Decorator.property('Number', 'alpha', 1)
  alpha!: number;

  @Decorator.property('Number', 'side-orientation', 1)
  sideOrientation!: number;

  @Decorator.property('Boolean', 'wireframe', false)
  wireframe!: boolean;

  @Decorator.property('Number', 'alpha-mode', 2)
  alphaMode!: number;

  @Decorator.property('Boolean', 'disable-depth-write', false)
  disableDepthWrite!: boolean;

  @Decorator.property('Number', 'z-offset', 0)
  zOffset!: number;
}
