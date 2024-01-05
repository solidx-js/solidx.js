# 组件

## xr-scene 场景

3D场景是一个复杂的环境，其中包含各种对象、光源、摄像机和其他元素。这些元素被放置在三维空间中，并可以相互交互。

场景由组件 `xr-scene` 进行渲染，渲染引擎计算摄像机从其视角看到的每个对象的方式，同时考虑到光照、阴影和其他效果，形成对3D场景的真实或风格化的表现。

### API

| 属性名             | 描述             | 类型      | 默认值           |
| ------------------ | ---------------- | --------- | ---------------- |
| **width**          | 宽度             | `Number`  | `600`            |
| **height**         | 高度             | `Number`  | `400`            |
| **env-url**        | 环境贴图         | `String`  | 内置 Studio 光照 |
| **env-rotation-y** | 环境贴图旋转角度 | `Number`  | `0`              |
| **contrast**       | 对比度           | `Number`  | `1.2`            |
| **exposure**       | 曝光度           | `Number`  | `1.2`            |
| **auto-resize**    | 自动调整大小     | `Boolean` | `false`          |

## xr-camera 相机

相机是3D场景中的一个重要元素，它决定了我们如何观察场景中的对象。

在3D编程中，相机并不是一个实际的对象，而是一个视点和视线的抽象。通过调整相机的位置、角度和其他属性，我们可以从不同的角度和距离观察场景。

### API

| 属性名     | 描述                   | 类型      | 默认值  |
| ---------- | ---------------------- | --------- | ------- |
| **alpha**  | 水平旋转角度           | `Number`  | `-90`   |
| **beta**   | 垂直旋转角度           | `Number`  | `90`    |
| **radius** | 到目标点的距离         | `Number`  | `10`    |
| **target** | 观察的目标点           | `Vector3` | `0 0 0` |
| **min-z**  | 视域体近裁平面距离 [1] | `Number`  | `0.1`   |
| **max-z**  | 视域体远裁平面距离     | `Number`  | `100`   |

1. 视域体概念参考: [视域体](/wiki/viewing-frustum.html)

## xr-mesh 网格

网格是3D场景中的基本元素，它由顶点和面组成。网格可以用来表示各种物体，比如地形、建筑、人物、动物等。

网格通常需要指定以下两种数据：

1. **geometry** 网格数据源，用来描述网格的顶点和面，例如形状、法线、UV等。
2. **material** 材质数据源，用来描述网格的材质，例如颜色、纹理、光照等。

### API

| 属性名         | 描述              | 类型               | 默认值    |
| -------------- | ----------------- | ------------------ | --------- |
| **geometry**   | 网格 [1]          | `Object`           | -         |
| **material**   | 材质数据源 [2][3] | `String`、`Object` | -         |
| **position**   | 位置              | `Vector3`          | `0 0 0`   |
| **rotation**   | 旋转              | `Vector3`          | `0 0 0`   |
| **scale**      | 缩放              | `Vector3`          | `1 1 1`   |
| **quaternion** | 四元数 [4]        | `Vector4`          | `0 0 0 1` |
| **layer**      | 渲染层            | `Number`           | `0`       |

1. 如果没有指定网格，mesh 将不会被渲染。
1. 如果没有指定材质，则使用内部的默认材质（呈现灰色）。
1. 数据源概念参见 [数据源](/wiki/数据源.md)。
1. 四元数概念参见 [四元数](/wiki/四元数.md)。

`geometry` 是一个按 type 分类的对象，每种类型都有不同的属性：

- **type: box** 立方体

  | 属性名     | 描述 | 类型     |
  | ---------- | ---- | -------- |
  | **width**  | 宽度 | `Number` |
  | **height** | 高度 | `Number` |
  | **depth**  | 深度 | `Number` |

- **type: sphere** 球体

  | 属性名        | 描述  | 类型     |
  | ------------- | ----- | -------- |
  | **diameter**  | 直径  | `Number` |
  | **diameterX** | 直径X | `Number` |
  | **diameterY** | 直径Y | `Number` |
  | **diameterZ** | 直径Z | `Number` |
  | **arc**       | 弧度  | `Number` |
  | **slice**     | 切片  | `Number` |

- **type: cylinder** 圆柱体

  | 属性名             | 描述     | 类型      |
  | ------------------ | -------- | --------- |
  | **height**         | 高度     | `Number`  |
  | **diameterTop**    | 顶部直径 | `Number`  |
  | **diameterBottom** | 底部直径 | `Number`  |
  | **tessellation**   | 细分数   | `Number`  |
  | **subdivisions**   | 细分数   | `Number`  |
  | **hasRings**       | 是否有环 | `Boolean` |
  | **enclose**        | 是否封闭 | `Boolean` |
  | **cap**            | 是否封顶 | `Boolean` |

- **type: disc** 圆盘

  | 属性名           | 描述   | 类型     |
  | ---------------- | ------ | -------- |
  | **radius**       | 半径   | `Number` |
  | **tessellation** | 细分数 | `Number` |

- **type: plane** 平面

  | 属性名     | 描述 | 类型     |
  | ---------- | ---- | -------- |
  | **size**   | 尺寸 | `Number` |
  | **width**  | 宽度 | `Number` |
  | **height** | 高度 | `Number` |

- **type: torus** 圆环

  | 属性名           | 描述   | 类型     |
  | ---------------- | ------ | -------- |
  | **diameter**     | 直径   | `Number` |
  | **thickness**    | 厚度   | `Number` |
  | **tessellation** | 细分数 | `Number` |
