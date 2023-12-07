import { defineUserConfig } from 'vuepress';
import { viteBundler } from '@vuepress/bundler-vite';
import { containerPlugin } from '@vuepress/plugin-container';
import { backToTopPlugin } from '@vuepress/plugin-back-to-top';
import { searchPlugin } from '@vuepress/plugin-search';

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'BJS-Frame',
  description: 'BJS-Frame',
  head: [['script', { src: './build/index.js' }]],
  bundler: viteBundler({
    vuePluginOptions: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('xr-'),
        },
      },
    },
  }),
  plugins: [
    backToTopPlugin(),
    searchPlugin(),
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
<div class="demo-block">
  <div class="live" style="height: ${liveHeight}; border-radius: 8px; overflow: hidden;">${innerHTML}</div>
  <div class="source">
          `;
        }

        return '</div></div>';
      },
    }),
  ],
});
