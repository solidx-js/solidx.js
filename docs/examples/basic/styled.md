# 样式选择器

## class 切换

::: demo

```html
<xr-scene auto-resize>
  <style>
    .red {
      ---material: 'albedo-color: #ff0000';
    }
    .green {
      ---material: 'albedo-color: #00ff00; alpha: 0.1';
    }
  </style>

  <xr-camera id="cam1" radius="6" beta="75"></xr-camera>
  <xr-mesh id="box1" class="red" geometry="type: box" position="-0.8 0 0"></xr-mesh>
  <xr-mesh id="box2" class="green" geometry="type: box" position="0.8 0 0"></xr-mesh>
</xr-scene>

<script>
  const box1 = $('#box1');
  const box2 = $('#box2');

  let i = 0;
  const timer = setInterval(() => {
    const _i = i % 2;

    box1.className = ['red', 'green'][_i];
    box2.className = ['green', 'red'][_i];

    i += 1;
  }, 200);

  $disposes.push(() => clearInterval(timer));
</script>
```

:::
