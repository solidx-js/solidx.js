import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { framework } from './framework';
import * as glob from 'glob';
import { resolve } from 'path';

function list(pattern: string) {
  return glob
    .sync(pattern, { cwd: resolve(__dirname, '..'), nodir: true })
    .map(p => '/' + p.replace('./', ''))
    .sort((a, b) => a.localeCompare(b));
}

export default defineUserConfig({
  ...framework,

  lang: 'zh-CN',
  title: 'BJS-Frame',
  description: 'BJS-Frame',

  theme: defaultTheme({
    navbar: [
      { text: '组件', link: '/components/' },
      { text: '示例', link: '/examples/' },
      { text: 'WiKi', link: '/wiki/' },
      { text: '文档', link: '/docs/' },
    ],
    sidebar: {
      '/components/': [{ text: '基础', children: list('components/basic/*.md') }],
      '/examples/': [
        { text: '基础', children: list('examples/basic/*.md') },
        { text: '交互', children: list('examples/interactive/*.md') },
      ],
      '/wiki/': list('wiki/*.md'),
      '/docs/': [{ text: 'Class', children: list('docs/classes/*.md') }],
    },
    sidebarDepth: 2,
    contributors: false,
    lastUpdated: false,
  }),
});
