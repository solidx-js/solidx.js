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
      { text: '示例', link: '/examples/' },
      { text: '文档', link: '/docs/' },
    ],
    sidebar: {
      '/examples/': [{ text: '基础示例', children: list('examples/basic/*.md') }],
      '/docs/': [{ text: 'Class', children: list('docs/classes/*.md') }],
    },
    sidebarDepth: 0,
  }),
});
