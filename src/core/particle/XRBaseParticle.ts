import { Decorator } from '../Decorator';
import { XRSceneScopeElement } from '../XRSceneScopeElement';
import { BaseParticleSystem } from '@babylonjs/core/Particles/baseParticleSystem';
import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Texture } from '@babylonjs/core/Materials/Textures';
import { ElementUtil } from '../../util';
import { Color4 } from '@babylonjs/core/Maths/math.color';

export class XRBaseParticle<T extends BaseParticleSystem> extends XRSceneScopeElement<T> {
  @Decorator.property('Vector3', 'emitter', null, { title: '发射位置' })
  emitter: Vector3 | null = null;

  @Decorator.property('String', 'img', null, { title: '粒子纹理' })
  img: string | null = null;

  // emitRate
  @Decorator.property('Number', 'emit-rate', 10, {
    title: '发射速率',
    doc: process.env.NODE_ENV === 'development' ? '每秒发射的粒子数' : '',
    min: 1,
  })
  emitRate: number | null = null;

  // updateSpeed
  @Decorator.property('Number', 'update-speed', 0.01, {
    title: '更新速率',
    doc: process.env.NODE_ENV === 'development' ? '整体运动速率' : '',
    min: 0,
    step: 0.01,
  })
  updateSpeed: number | null = null;

  // minEmitPower
  @Decorator.property('Number', 'min-emit-power', 1, {
    title: '最小初始速度',
    doc: process.env.NODE_ENV === 'development' ? '最小初始速度。当粒子被发射时，它的初始速度将在最小和最大值之间随机选择。' : '',
    min: 0,
  })
  minEmitPower: number | null = null;

  // maxEmitPower
  @Decorator.property('Number', 'max-emit-power', 1, {
    title: '最大初始速度',
    doc: process.env.NODE_ENV === 'development' ? '最大初始速度。当粒子被发射时，它的初始速度将在最小和最大值之间随机选择。' : '',
    min: 0,
  })
  maxEmitPower: number | null = null;

  // minLifeTime
  @Decorator.property('Number', 'min-life-time', 1, {
    title: '最小生命周期',
    doc: process.env.NODE_ENV === 'development' ? '最小生命周期。当粒子被发射时，它的生命周期将在最小和最大值之间随机选择。' : '',
    min: 0,
  })
  minLifeTime: number | null = null;

  // maxLifeTime
  @Decorator.property('Number', 'max-life-time', 1, {
    title: '最大生命周期',
    doc: process.env.NODE_ENV === 'development' ? '最大生命周期。当粒子被发射时，它的生命周期将在最小和最大值之间随机选择。' : '',
    min: 0,
  })
  maxLifeTime: number | null = null;

  // minSize
  @Decorator.property('Number', 'min-size', 1, {
    title: '最小粒子大小',
    doc: process.env.NODE_ENV === 'development' ? '最小粒子大小。当粒子被发射时，它的大小将在最小和最大值之间随机选择。' : '',
    min: 0,
  })
  minSize: number | null = null;

  // maxSize
  @Decorator.property('Number', 'max-size', 1, {
    title: '最大粒子大小',
    doc: process.env.NODE_ENV === 'development' ? '最大粒子大小。当粒子被发射时，它的大小将在最小和最大值之间随机选择。' : '',
    min: 0,
  })
  maxSize: number | null = null;

  // gravity
  @Decorator.property('Vector3', 'gravity', null, { title: '重力' })
  gravity: Vector3 | null = null;

  // worldOffset
  @Decorator.property('Vector3', 'world-offset', null, {
    title: '世界偏移',
    doc:
      process.env.NODE_ENV === 'development'
        ? 'worldOffset 是粒子系统在世界坐标系中的偏移量，它决定了粒子系统整体的位置。当你改变 worldOffset 时，粒子系统中所有的粒子（包括已经存在的粒子和新产生的粒子）的位置都会相应地改变。'
        : '',
  })
  worldOffset: Vector3 | null = null;

  // direction1
  @Decorator.property('Vector3', 'direction1', null, {
    title: '方向1',
    doc: process.env.NODE_ENV === 'development' ? '当粒子被发射时，它的初始方向会在 direction1 和 direction2 定义的范围内随机选择。' : '',
  })
  direction1: Vector3 | null = null;

  // direction2
  @Decorator.property('Vector3', 'direction2', null, {
    title: '方向2',
    doc: process.env.NODE_ENV === 'development' ? '当粒子被发射时，它的初始方向会在 direction1 和 direction2 定义的范围内随机选择。' : '',
  })
  direction2: Vector3 | null = null;

  // color1
  @Decorator.property('Color4', 'color1', new Color4(1.0, 1.0, 1.0, 1.0), {
    title: '颜色1',
    doc: process.env.NODE_ENV === 'development' ? '当粒子被发射时，它的初始颜色会在 color1 和 color2 定义的范围内随机选择。' : '',
  })
  color1: Vector3 | null = null;

  // color2
  @Decorator.property('Color4', 'color2', new Color4(1.0, 1.0, 1.0, 1.0), {
    title: '颜色2',
    doc: process.env.NODE_ENV === 'development' ? '当粒子被发射时，它的初始颜色会在 color1 和 color2 定义的范围内随机选择。' : '',
  })
  color2: Vector3 | null = null;

  // colorDead
  @Decorator.property('Color4', 'color-dead', new Color4(0, 0, 0, 1), {
    title: '死亡颜色',
    doc: process.env.NODE_ENV === 'development' ? '当粒子死亡时的颜色。' : '',
  })
  colorDead: Vector3 | null = null;

  // textureMask
  @Decorator.property('Color4', 'texture-mask', new Color4(1.0, 1.0, 1.0, 1.0), {
    title: '纹理遮罩',
    doc:
      process.env.NODE_ENV === 'development'
        ? '如果你想让纹理中的红色通道被忽略，你可以将 textureMask 设置为 (0, 1, 1, 1)。如果你想让纹理中的透明度通道被忽略，你可以将 textureMask 设置为 (1, 1, 1, 0)。'
        : '',
    linerSpace: true,
  })
  textureMask: Color4 | null = null;

  constructor() {
    super();
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (!this.entity) return;
    const particle = this.entity;

    if (changed.has('emitRate') && this.evaluated.emitRate) particle.emitRate = this.evaluated.emitRate;
    if (changed.has('updateSpeed') && this.evaluated.updateSpeed) particle.updateSpeed = this.evaluated.updateSpeed;

    ElementUtil.updateTarget(particle, this.evaluated as any, {
      emitter: ['Vector3'],
      img: [
        'String',
        (data: string) => {
          if (particle.particleTexture && particle.particleTexture instanceof Texture) {
            particle.particleTexture.updateURL(data);
          } else {
            particle.particleTexture = new Texture(data, this.scene);
          }
        },
      ],
      emitRate: ['Number'],
      updateSpeed: ['Number'],
      minEmitPower: ['Number'],
      maxEmitPower: ['Number'],
      minLifeTime: ['Number'],
      maxLifeTime: ['Number'],
      minSize: ['Number'],
      maxSize: ['Number'],
      gravity: ['Vector3'],
      worldOffset: ['Vector3'],
      direction1: ['Vector3'],
      direction2: ['Vector3'],
      color1: ['Color4'],
      color2: ['Color4'],
      colorDead: ['Color4'],
      textureMask: ['Color4'],
    });
  }
}
