import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { framework } from './framework';
import * as glob from 'glob';
import { resolve } from 'path';
import pkg from '../../package.json';

function list(pattern: string) {
  return glob
    .sync(pattern, { cwd: resolve(__dirname, '..'), nodir: true })
    .map(p => '/' + p.replace('./', ''))
    .sort((a, b) => a.localeCompare(b));
}

export default defineUserConfig({
  ...framework,

  lang: 'zh-CN',
  title: pkg.name,
  description: pkg.description,

  theme: defaultTheme({
    navbar: [
      { text: '组件', link: '/component' },
      { text: '示例', link: '/examples/' },
      { text: '文档', link: '/docs/' },
    ],
    contributors: false,
    lastUpdated: false,
  }),
});
