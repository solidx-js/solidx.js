import { ElementRegistry, Schema } from './src';
import fs from 'fs';
import Path from 'path';

const styleData: Record<string, string[]> = {};

// register CSS
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Types
const _cssProps = new Map<string, { syntax?: string; initialValue?: string }>();

// 记录 CSS 自定义属性
for (const name of ElementRegistry.Instance.keys()) {
  const Ele = ElementRegistry.Instance.get(name)!;
  const _styleContents: string[] = [];

  for (const [key, def] of Ele.elementProperties) {
    if (typeof key !== 'string' || def.state) continue;
    const propName = typeof def.attribute === 'string' ? def.attribute : key;

    let syntax: string | undefined;
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

    _cssProps.set(propName, { syntax, initialValue });

    if (def.initValue !== null) {
      _styleContents.push(`---${propName}: ${Schema.toCssLiteral(def.dType, def.initValue)}`);
    }
  }

  styleData[name] = _styleContents;
}

// 注册到 CSS 自定义属性, 用 --- 开头，禁用继承
for (const [_n, _def] of _cssProps) {
  if (!_def.syntax || !_def.initialValue) continue;
  styleData[`@property ---${_n}`] = [`syntax: "${_def.syntax}"`, `inherits: false`, `initial-value: ${_def.initialValue}`];
}

const extractedCssText = Object.entries(styleData).reduce((prev, [name, contents]) => {
  return prev + `${name} {\n${contents.map(c => `  ${c};`).join('\n')}\n}\n\n`;
}, '');

const presetCssText = fs.readFileSync(Path.join(process.cwd(), 'preset.base.css'), 'utf-8');
const finalCssText = [presetCssText, extractedCssText].join('\n\n');

fs.writeFileSync(Path.join(process.cwd(), 'assets/preset.css'), finalCssText, 'utf-8');
