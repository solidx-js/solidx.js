import { Matrix } from '@babylonjs/core/Maths/math.vector';

export type IPosType = 'UPPER' | 'LOWER';

export type IToothDataItem = {
  id: number;
  slot: string;
  posType: IPosType;
  width: number;
  resourceUrl: string;
  transform: Matrix;
};

export type IOrthoData = {
  baseline: {
    jaws: { id: number; posType: IPosType; resourceUrl: string }[];
    toothList: IToothDataItem[];
  };
};
