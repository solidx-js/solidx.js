import { ElementRegistry, IDataType, Schema } from './src';
import fs from 'fs';
import { PropertyDeclaration } from 'lit';
import Path from 'path';

function emitStyle() {
  const styleData: Record<string, string[]> = {};

  // register CSS
  // https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types
  const _cssProps = new Map<string, { syntax: string; initialValue?: string }>();

  // 记录 CSS 自定义属性
  for (const name of ElementRegistry.Instance.keys()) {
    const Ele = ElementRegistry.Instance.get(name)!;
    const _styleContents: string[] = [];

    for (const [key, def] of Ele.elementProperties) {
      if (typeof key !== 'string' || def.state) continue;
      const propName = typeof def.attribute === 'string' ? def.attribute : key;

      let syntax: string = '*';
      let initialValue: string | undefined;

      if (def.dType === 'Color3' || def.dType === 'Color4') {
        syntax = '<color>';
        initialValue = '#000000';
      }
      //
      else if (def.dType === 'Number' || def.dType === 'Vector2' || def.dType === 'Vector3' || def.dType === 'Vector4') {
        syntax = '<number>+';
        initialValue = '0';
      }

      // 相同属性名的不可存在不同语法
      if (_cssProps.has(propName) && _cssProps.get(propName)!.syntax !== syntax) {
        throw new Error(`CSS property "${propName}" has different syntax: ${syntax} vs ${_cssProps.get(propName)!.syntax}: ${name}`);
      }

      _cssProps.set(propName, { syntax, initialValue });

      if (def.initValue !== null) {
        _styleContents.push(`---${propName}: ${Schema.toCssLiteral(def.dType, def.initValue)}`);
      }
    }

    styleData[name] = _styleContents;
  }

  // 注册到 CSS 自定义属性, 用 --- 开头，禁用继承
  // @property 规则中 syntax 和 inherits 描述符是必需的; 如果其中任何一项缺失，整条规则都将失效并且会被忽略。
  for (const [_n, _def] of _cssProps) {
    styleData[`@property ---${_n}`] = [
      `syntax: "${_def.syntax}"`,
      `inherits: false`,
      ...(typeof _def.initialValue !== 'undefined' ? [`initial-value: ${_def.initialValue}`] : []),
    ];
  }

  const extractedCssText = Object.entries(styleData).reduce((prev, [name, contents]) => {
    return prev + `${name} {\n${contents.map(c => `  ${c};`).join('\n')}\n}\n\n`;
  }, '');

  const presetCssText = fs.readFileSync(Path.join(process.cwd(), 'preset.base.css'), 'utf-8');
  const finalCssText = [presetCssText, extractedCssText].join('\n\n');

  fs.writeFileSync(Path.join(process.cwd(), 'assets/preset.css'), finalCssText, 'utf-8');
}

function emitMeta() {
  const metadata: {
    element: Record<
      string,
      {
        cls: string;
        attribute: Record<string, { prop: string; initValue: string | null; dType: IDataType; extra?: PropertyDeclaration['extra'] }>;
      }
    >;
  } = { element: {} };

  for (const tag of ElementRegistry.Instance.keys()) {
    const Ele = ElementRegistry.Instance.get(tag)!;
    metadata.element[tag] = { cls: Ele.name, attribute: {} };

    for (const [prop, def] of Ele.elementProperties) {
      if (typeof prop !== 'string' || def.state) continue;

      const attrName = typeof def.attribute === 'string' ? def.attribute : prop;
      metadata.element[tag].attribute[attrName] = {
        prop,
        initValue: def.initValue !== null ? Schema.toCssLiteral(def.dType, def.initValue) : null,
        dType: def.dType,
        extra: def.extra,
      };
    }
  }

  fs.writeFileSync(Path.join(process.cwd(), 'assets/metadata.json'), JSON.stringify(metadata, null, 2), 'utf-8');
}

emitStyle();
emitMeta();
