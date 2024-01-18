import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { Decorator } from '../Decorator';
import { IMaterialControllerHostType } from '../controller';
import { Material } from '@babylonjs/core/Materials/material';

export class XRBaseMaterial<T extends Material> extends XRSceneScopeElement<T> implements IMaterialControllerHostType {
  @Decorator.property('Boolean', 'backface-culling', null)
  backFaceCulling: boolean | null = null;

  @Decorator.property('Number', 'alpha', 1)
  alpha: number | null = null;

  @Decorator.property('Number', 'side-orientation', null)
  sideOrientation: number | null = null;

  @Decorator.property('Boolean', 'wireframe', null)
  wireframe: boolean | null = null;

  @Decorator.property('Number', 'alpha-mode', 2)
  alphaMode: number | null = null;

  @Decorator.property('Boolean', 'disable-depth-write', null)
  disableDepthWrite: boolean | null = null;

  @Decorator.property('Number', 'z-offset', null)
  zOffset: number | null = null;

  @Decorator.property('Boolean', 'entity-delegated', null)
  entityDelegated: boolean | null = null;
}
