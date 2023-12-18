import { Matrix } from '@babylonjs/core/Maths/math.vector';

export type IPosType = 'UPPER' | 'LOWER';

export type IJatDataItem = { id: number; posType: IPosType; resourceUrl: string };
export type IToothDataItem = { id: number; slot: string; posType: IPosType; width: number; resourceUrl: string; transform: Matrix };
export type IAttachmentDataItem = { id: number; slot: string; posType: IPosType; resourceUrl: string; transform: Matrix; typeCode: string };

export type IOrthoData = {
  jaw: Record<IPosType, IJatDataItem>;
  toothList: IToothDataItem[];
  attachments: IAttachmentDataItem[];
};
