import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Decorator, ITransformNodeLikeImpl } from '../core';
import { PrimitiveBase } from './PrimitiveBase';
import { html } from 'lit';
import { Color3 } from '@babylonjs/core/Maths/math.color';
import { registerElement } from '../registry';

@registerElement('xr-ellipse')
export class XREllipse extends PrimitiveBase implements Omit<ITransformNodeLikeImpl, 'entityDelegated'> {
  @Decorator.position()
  position: Vector3 | null = null;

  @Decorator.rotation()
  rotation: Vector3 | null = null;

  @Decorator.scale()
  scale: Vector3 | null = null;

  @Decorator.layer()
  layer: number | null = null;

  @Decorator.quaternion()
  quaternion: Quaternion | null = null;

  @Decorator.property('Number', 'radius-x', 1)
  radiusX: number | null = null;

  @Decorator.property('Number', 'radius-y', 1)
  radiusY: number | null = null;

  @Decorator.property('Color3', 'color', null)
  color: Color3 | null = null;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    const { position, rotation, scale, layer, quaternion, radiusX: a, radiusY: b, color } = this.evaluated;
    if (!a || !b) return;

    const points: [number, number, number][] = [];

    // 根据椭圆的参数方程计算椭圆上的点
    for (let i = 0; i <= 360; i += 2) {
      const x = a * Math.cos((i * Math.PI) / 180);
      const y = b * Math.sin((i * Math.PI) / 180);
      points.push([x, y, 0]);
    }

    return html`
      <xr-line
        id=${this.id + '-ellipse'}
        .position=${position}
        .rotation=${rotation}
        .scale=${scale}
        .layer=${layer}
        .quaternion=${quaternion}
        .points=${points.map(p => p.join(' ')).join(', ')}
        .colors=${color?.toHexString()}
      ></xr-line>
    `;
  }
}
