import { Vector3 } from '@babylonjs/core/Maths/math.vector';
import { registerElement } from '../../registry';
import { ParticleSystem } from '@babylonjs/core/Particles/particleSystem';
import { Texture } from '@babylonjs/core/Materials/Textures';
import { XRBaseParticle } from './XRBaseParticle';
import { Decorator } from '../Decorator';

@registerElement('xr-particle')
export class XRParticle extends XRBaseParticle<ParticleSystem> {
  // capacity
  @Decorator.property('Number', 'capacity', 2000, {
    title: '粒子容量',
    doc: process.env.NODE_ENV === 'development' ? '粒子容量' : '',
    min: 50,
    step: 50,
  })
  capacity: number | null = null;

  connected(): void {
    super.connected();

    this.entity = new ParticleSystem(this.id, this.evaluated.capacity || 2000, this.scene);
    this.entity.start();
  }

  protected willUpdate(changed: Map<string, any>): void {
    super.willUpdate(changed);

    if (changed.has('capacity') && this.evaluated.capacity && this.entity && this.entity.getCapacity() !== this.evaluated.capacity) {
      if (this.entity) {
        this.entity.dispose();
        this.entity = null;
      }

      this.entity = new ParticleSystem(this.id, this.evaluated.capacity, this.scene);
      this.entity.start();

      // 重置所有属性
      const _newChanged = new Map<string, any>();
      for (const key of this._Cls.elementProperties.keys()) {
        if (typeof key !== 'string') continue;
        _newChanged.set(key, null);
      }

      this.willUpdate(_newChanged);
    }
  }

  disconnected(): void {
    super.disconnected();

    if (this.entity) {
      this.entity.dispose();
      this.entity = null;
    }
  }
}
