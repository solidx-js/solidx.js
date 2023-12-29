import { viteBundler } from '@vuepress/bundler-vite';
import { defineUserConfig } from 'vuepress';
import { containerPlugin } from '@vuepress/plugin-container';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { searchPlugin } from '@vuepress/plugin-search';
import { autoCatalogPlugin } from 'vuepress-plugin-auto-catalog';
import { resolve } from 'path';

export const framework = defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
  }),
  templateDev: resolve(__dirname, './template.html'),
  templateBuild: resolve(__dirname, './template.html'),
  public: resolve(__dirname, '../public'),
  dest: resolve(__dirname, '../../website'),
  base: '/solidx.js/', // 这是发布到 github pages 的配置
  plugins: [
    backToTopPlugin(),
    searchPlugin(),
    autoCatalogPlugin({
      frontmatter: path => ({}),
    }),
    containerPlugin({
      type: 'demo',
      render: (tokens, idx) => {
        const token = tokens[idx];

        if (token.nesting === 1) {
          const argString = token.info.match(/.*\s+(.*)$/)?.[1] || '';

          // arg eg: height=300 width=300
          const arg = argString.split(/\s+/g).reduce(
            (acc, cur) => {
              const [key, value] = cur.split('=');
              acc[key] = value;
              return acc;
            },
            {} as Record<string, string>
          );

          const closeTypeName = token.type.replace('_open', '_close');
          const closeIdx = tokens.slice(idx).findIndex(t => t.type === closeTypeName);
          const contentTokens = tokens.slice(idx + 1, idx + closeIdx);
          const innerHTML = contentTokens.map(t => t.content).join('');

          const liveHeight = arg.height || '300px';

          return `
<p class="demo-block">
  <HtmlLive base64Html="${Buffer.from(innerHTML).toString('base64')}" height="${liveHeight}" />
  <div class="source">
          `;
        }

        return '</div></p>';
      },
    }),
  ],
});
