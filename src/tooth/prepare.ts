import { Matrix, Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { IOrthoData } from './type';

const authCode = '00a853d01f9f44cc97dbaaa9b3d9506a';

const fetchJson = async (name: string) => {
  const url = `https://ortho-web-base-yyyl.ing-club.com/share/${name}.json?authCode=${authCode}`;
  return fetch(url, { mode: 'cors' }).then(res => res.json());
};

export async function prepare() {
  const data: IOrthoData = {
    baseline: {
      jaws: [],
      toothList: [],
    },
  };

  const { jawMap, toothMap, toothList } = await fetchJson('treatmentPlanFirstStepTooth');

  data.baseline.jaws.push(
    { id: jawMap.LOWER.id, posType: jawMap.LOWER.jawType, resourceUrl: jawMap.LOWER.resourceUrl },
    { id: jawMap.UPPER.id, posType: jawMap.UPPER.jawType, resourceUrl: jawMap.UPPER.resourceUrl }
  );

  toothList.forEach((t: any) => {
    const slot = Object.entries(toothMap).find(([_, v]) => v === t.id)![0]!;

    data.baseline.toothList.push({
      id: t.id,
      posType: slot.startsWith('U') ? 'UPPER' : 'LOWER',
      slot,
      resourceUrl: t.ownerTypeAndResourceUrlMap.WITH_DENTAL_TOOTH,
      transform: transformDataToRTS(t).matrix,
      width: t.width,
    });
  });

  return data;
}

function transformDataToRTS(data: {
  positionX: number;
  positionY: number;
  positionZ: number;
  rotateX: number;
  rotateY: number;
  rotateZ: number;
  rotateAngle: number;
  scale?: number[];
}) {
  const scale = data.scale || [1, 1, 1];

  const matrix = Matrix.Compose(
    Vector3.FromArray(scale),
    Quaternion.RotationAxis(new Vector3(data.rotateX, data.rotateY, data.rotateZ), (data.rotateAngle / 180) * Math.PI),
    new Vector3(data.positionX, data.positionY, data.positionZ)
  );

  const rotQ = Quaternion.Identity();
  matrix.decompose(undefined, rotQ, undefined);

  const rot = rotQ.toEulerAngles().scale(180 / Math.PI);

  return {
    position: [data.positionX, data.positionY, data.positionZ],
    rotation: [rot.x, rot.y, rot.z],
    scale,
    matrix,
  };
}
