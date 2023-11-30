import { XRTransformNode } from '../core/XRTransformNode';
import { XRMesh } from '../core/XRMesh';

export const ElementUtil = {
  closestTransformNodeLike: (ele: HTMLElement) => {
    const target = ele.parentElement ? ele.parentElement.closest<XRTransformNode | XRMesh>('xr-transform-node, xr-mesh') : null;
    if (!target) return null;

    return (target as XRTransformNode).transformNode || (target as XRMesh).mesh;
  },
};
