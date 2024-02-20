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
  if (typeof content === 'string') {
    return tpl.print(ctx => {
      const c2 = content.replace(/#include\s+<(.*)>;/g, (_substring: string, match: string) => {
        let _included = '';

        if (match === '_defines.glsl') {
          // print defines
          _included = Object.entries(ctx)
            .map(([key, value]) => `#define ${key} ${value}`)
            .join('\n');
        } else {
          _included = glsl.getFile(match).render(ctx);
        }

        return `// include from ${match}\n// =============================\n\n${_included}\n\n`;
      });

      return c2;
    });
  }

  return content;
};

glsl.register = function <T extends `${string}.glsl`>(name: T, content: string | IGlslTpl) {
  glsl.files.set(name, glsl.toTpl(content));
  return glsl;
};
