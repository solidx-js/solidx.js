import { PickingInfo } from '@babylonjs/core/Collisions/pickingInfo';
import { Ray } from '@babylonjs/core/Culling/ray';
import { PointerEventTypes } from '@babylonjs/core/Events/pointerEvents';
import { Light } from '@babylonjs/core/Lights/light';
import { PointLight } from '@babylonjs/core/Lights/pointLight';
import { PBRMaterial } from '@babylonjs/core/Materials/PBR/pbrMaterial';
import { Color3, Matrix, Vector3 } from '@babylonjs/core/Maths/math';
import { Scalar } from '@babylonjs/core/Maths/math.scalar';
import { Scene } from '@babylonjs/core/scene';

export class RayTracer {
  private _tickOb: any;
  private _ctx: CanvasRenderingContext2D;
  private _imageData: ImageData;

  constructor(
    private scene: Scene,
    private canvas: HTMLCanvasElement
  ) {
    this._ctx = canvas.getContext('2d')!;
    this._imageData = this._ctx.getImageData(0, 0, canvas.width, canvas.height);
  }

  private task = (function* (self) {
    while (1) {
      if (!self.scene.isReady()) continue;

      // 这里用一个最简单光线追踪算法，每个像素都发射一条射线，看看是否碰撞到物体
      const w = self.canvas.width;
      const h = self.canvas.height;

      const px = Math.floor(self.scene.pointerX);
      const py = Math.floor(self.scene.pointerY);

      for (let x = 0; x < w; x++) {
        for (let y = 0; y < h; y++) {
          // if (px !== x || py !== y) continue;

          const ray = self.scene.createPickingRay(x, y, Matrix.Identity(), self.scene.activeCamera);
          const color = traceRay(self.scene, ray, 0);
          // console.log('@@@', 'pk ->', x, y, color);

          // const pk = self.scene.pick(x, y);
          // const color = pk?.pickedPoint ? Color3.Red() : Color3.Green();
          // console.log('@@@', 'pk ->', x, y, pk, color);

          self._imageData.data[(y * w + x) * 4 + 0] = color.r * 255;
          self._imageData.data[(y * w + x) * 4 + 1] = color.g * 255;
          self._imageData.data[(y * w + x) * 4 + 2] = color.b * 255;
          self._imageData.data[(y * w + x) * 4 + 3] = 255;
        }
      }

      self._ctx.putImageData(self._imageData, 0, 0);
      yield;
    }
  })(this);

  start() {
    this._tickOb = this.scene.onPointerObservable.add(() => this.task.next(), PointerEventTypes.POINTERTAP);
  }

  stop() {
    if (this._tickOb) {
      this._tickOb.remove();
      this._tickOb = null;
    }
  }
}

function traceRay(scene: Scene, ray: Ray, depth: number): Color3 {
  if (depth > 10) return Color3.Black();

  // 光线与场景相交测试
  const pk = scene.pickWithRay(ray);

  if (pk && pk.pickedMesh && pk.pickedPoint) {
    // 根据相交点的材质计算颜色
    let color = computeLighting(scene, pk);

    // 递归发射新的光线
    const nextRay = computeNextRay(scene, ray, pk);
    const indirectColor = traceRay(scene, nextRay, depth + 1);

    color = combineColor(color, indirectColor);
    return color;
  }

  // 没有相交，返回背景色
  return Color3.Black();
}

function computeLighting(scene: Scene, pk: PickingInfo): Color3 {
  const mesh = pk.pickedMesh;
  if (!mesh) throw new Error('no mesh');

  const material = mesh.material;
  if (!material || !(material instanceof PBRMaterial)) return Color3.Black();

  const point = pk.pickedPoint!;
  const normal = pk.getNormal(true)!;
  const color = Color3.Black();

  // 处理直接光照
  for (const light of scene.lights) {
    if (light instanceof PointLight) {
      const _lightDirection = light.getAbsolutePosition().subtract(point).normalize();
      const _lightIntensity = computeLightIntensity(light, point);

      // 漫反射
      const _diffuseFactor = Math.max(0, _lightDirection.dot(normal));
      const _diffuseColor = material.albedoColor.scale(_diffuseFactor * _lightIntensity);
      color.addToRef(_diffuseColor, color);

      // TODO: 镜面反射
      // TODO: 间接光照
    }
  }

  return color;
}

function computeNextRay(scene: Scene, ray: Ray, pk: PickingInfo) {
  const normal = pk.getNormal(true);
  if (!normal) throw new Error('no normal');

  const point = pk.pickedPoint;
  if (!point) throw new Error('no point');

  const dir = ray.direction;
  const reflectDir = normal.scale(2).addInPlace(dir.normalizeToNew()).normalize();

  const newPoint = point.add(reflectDir.scale(0.001)); // 避免自相交
  return new Ray(newPoint, reflectDir.scale(512));
}

function combineColor(color: Color3, indirectColor: Color3) {
  let { r, g, b } = color.add(indirectColor.scale(0.5));

  r = Scalar.Clamp(r, 0, 1);
  g = Scalar.Clamp(g, 0, 1);
  b = Scalar.Clamp(b, 0, 1);

  return new Color3(r, g, b);
}

function computeLightIntensity(light: Light, point: Vector3) {
  if (light instanceof PointLight) {
    const distance = light.getAbsolutePosition().subtract(point).length();
    return light.intensity / (distance * distance * distance);
  }

  return 0;
}

class HitRecord {
  static fromPickingInfo(pk: PickingInfo) {
    const point = pk.pickedPoint;
    if (!point) throw new Error('no point');

    const normal = pk.getNormal(true);
    if (!normal) throw new Error('no normal');

    return new HitRecord(pk.distance, point, normal, normal.dot(pk.ray!.direction) < 0);
  }

  constructor(
    public readonly t: number,
    public readonly p: Vector3,
    public readonly normal: Vector3,
    public readonly frontFace?: boolean
  ) {}
}
