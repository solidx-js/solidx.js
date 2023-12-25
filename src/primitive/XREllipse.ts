import { Quaternion, Vector3 } from '@babylonjs/core/Maths/math.vector';
import { Decorator, ITransformNodeLikeImpl } from '../core';
import { PrimitiveBase } from './PrimitiveBase';
import { html } from 'lit';

export class XREllipse extends PrimitiveBase implements ITransformNodeLikeImpl {
  @Decorator.property('Vector3', 'position', Vector3.Zero())
  position = Vector3.Zero();

  @Decorator.property('Vector3', 'rotation', new Vector3(0, 0, 0))
  rotation = new Vector3(0, 0, 0);

  @Decorator.property('Vector3', 'scale', Vector3.One())
  scale = Vector3.One();

  @Decorator.property('Number', 'layer', 0)
  layer = 0;

  @Decorator.property('Quaternion', 'quaternion', null)
  quaternion: Quaternion | null = null;

  @Decorator.property('Number', 'radius-x', 1)
  radiusX: number = 1;

  @Decorator.property('Number', 'radius-y', 1)
  radiusY: number = 1;

  connected(): void {
    super.connected();
  }

  disconnected(): void {
    super.disconnected();
  }

  render() {
    const { position, rotation, scale, layer, quaternion, radiusX: a, radiusY: b } = this.evaluated;

    const points: [number, number, number][] = [];

    // 根据椭圆的参数方程计算椭圆上的点
    for (let i = 0; i < 360; i += 2) {
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
      ></xr-line>
    `;
  }
}
