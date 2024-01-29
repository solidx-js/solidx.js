import { PointerEventTypes } from '@babylonjs/core/Events/pointerEvents';
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

      // for (let x = 0; x < w; x++) {
      //   for (let y = 0; y < h; y++) {

      const x = Math.floor(self.scene.pointerX);

      for (let y = 0; y < h; y++) {
        const pk = self.scene.pick(x, y);
        const color = pk?.pickedPoint ? [255, 0, 0, 255] : [0, 255, 0, 255];

        // console.log('@@@', 'pk ->', x, y, pk, color);

        self._imageData.data[(y * w + x) * 4 + 0] = color[0];
        self._imageData.data[(y * w + x) * 4 + 1] = color[1];
        self._imageData.data[(y * w + x) * 4 + 2] = color[2];
        self._imageData.data[(y * w + x) * 4 + 3] = color[3];
      }

      self._ctx.putImageData(self._imageData, 0, 0);
      yield;
    }
  })(this);

  start() {
    this._tickOb = this.scene.onPointerObservable.add(() => this.task.next(), PointerEventTypes.POINTERDOWN);
  }

  stop() {
    if (this._tickOb) {
      this._tickOb.remove();
      this._tickOb = null;
    }
  }
}
