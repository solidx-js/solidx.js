import { tpl, ITpl, ITplResolver } from 'tiny-tpl';

export interface IGlslDefine {}
export interface IGlslProp {}

export type IGlslTpl = ITpl<IGlslDefine>;

export function glsl() {}

glsl.files = new Map<string, IGlslTpl>();

glsl.getFile = function (name: string): IGlslTpl {
  const file = glsl.files.get(name);
  if (!file) throw new Error(`glsl file ${name} not found`);
  return file;
};

glsl.toTpl = function (content: string | IGlslTpl): IGlslTpl {
  if (typeof content === 'string') return tpl.print(() => content);
  return content;
};

glsl.register = function <T extends `${string}.glsl`>(name: T, content: string | IGlslTpl) {
  glsl.files.set(name, glsl.toTpl(content));
  return glsl;
};

glsl.$printDefines = function (): ITplResolver<IGlslDefine> {
  return ctx => {
    return Object.entries(ctx)
      .map(([k, v]) => `#define ${k} ${v};`)
      .join('\n');
  };
};

glsl.$ifdef = function (name: keyof IGlslDefine, a: string | IGlslTpl, b: string | IGlslTpl): IGlslTpl {
  return tpl.print(ctx => (typeof ctx[name] !== 'undefined' ? a : b));
};

glsl.$include = function (name: string): ITplResolver<IGlslDefine> {
  const file = glsl.getFile(name);

  return ctx => {
    const content = file.render(ctx);

    return `
// include from ${name}
// =======================================
${content}
// end include from ${name}
    
    `;
  };
};
