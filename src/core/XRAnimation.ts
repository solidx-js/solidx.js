import { Scene } from '@babylonjs/core/scene';
import { Decorator } from './Decorator';
import { XRElement } from './XRElement';
import { Animation } from '@babylonjs/core/Animations/animation';
import { XRKeyFrame } from './XRKeyFrame';
import { IAnimationKey } from '@babylonjs/core/Animations/animationKey';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';

export class XRAnimation extends XRElement {
  static requiredAttrs: string[] = ['id'];

  @Decorator.scene()
  scene!: Scene;

  @Decorator.property_String()
  targetProperty: string = '';

  @Decorator.property_String()
  dataType: 'color3' | 'float' | 'vector2' | 'vector3' = 'float';

  @Decorator.property_String()
  loopMode: 'cycle' | 'constant' | 'relative' | 'yoyo' = 'cycle';

  animation: Animation | null = null;

  connected(): void {
    super.connected();

    this.animation = new Animation(
      this.id,
      this.targetProperty,
      60,
      dataTypeStringToAnimationType(this.dataType),
      loopModeStringToAnimationLoopMode(this.loopMode)
    );

    this.scene.addAnimation(this.animation);

    this.reloadFrames();
  }

  remove(): void {
    super.remove();

    if (this.animation) {
      this.scene.removeAnimation(this.animation);
    }

    this.animation = null;
  }

  /**
   * Reloads the frames of the animation.
   */
  reloadFrames() {
    if (!this.animation) return;

    const keys: IAnimationKey[] = [];

    // 遍历直接子元素 XRAnimationFrame, 收集 frame 和 value, 然后设置到 animation 中
    Array.from(this.children).forEach(ele => {
      console.log('@@@', 'ele ->', ele, ele.constructor.name);
      if (!(ele instanceof XRKeyFrame)) return;

      const frame = ele.frame;
      const value = parseValueString(this.dataType, ele.value);
      keys.push({ frame, value });
    });

    // sort by frame
    keys.sort((a, b) => a.frame - b.frame);

    console.log('@@@', 'keys ->', keys);

    this.animation.setKeys(keys);
  }
}

function dataTypeStringToAnimationType(dataType: 'color3' | 'float' | 'vector2' | 'vector3') {
  switch (dataType) {
    case 'color3':
      return Animation.ANIMATIONTYPE_COLOR3;
    case 'float':
      return Animation.ANIMATIONTYPE_FLOAT;
    case 'vector2':
      return Animation.ANIMATIONTYPE_VECTOR2;
    case 'vector3':
      return Animation.ANIMATIONTYPE_VECTOR3;
    default:
      return Animation.ANIMATIONTYPE_FLOAT;
  }
}

function loopModeStringToAnimationLoopMode(loopMode: 'cycle' | 'constant' | 'relative' | 'yoyo') {
  switch (loopMode) {
    case 'cycle':
      return Animation.ANIMATIONLOOPMODE_CYCLE;
    case 'constant':
      return Animation.ANIMATIONLOOPMODE_CONSTANT;
    case 'relative':
      return Animation.ANIMATIONLOOPMODE_RELATIVE;
    case 'yoyo':
      return Animation.ANIMATIONLOOPMODE_YOYO;
    default:
      return Animation.ANIMATIONLOOPMODE_CYCLE;
  }
}

function parseValueString(dataType: 'color3' | 'float' | 'vector2' | 'vector3', value: string) {
  switch (dataType) {
    case 'color3':
      return Color3.FromHexString(value);

    case 'float':
      return parseFloat(value);

    case 'vector2':
      return Vector3.FromArray(value.split(' ').map(v => parseFloat(v)));

    case 'vector3':
      return Vector3.FromArray(value.split(' ').map(v => parseFloat(v)));

    default:
      return parseFloat(value);
  }
}
