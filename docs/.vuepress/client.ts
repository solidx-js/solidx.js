/// <reference types="./declare.d.ts" />

import { defineClientConfig } from '@vuepress/client';
import { defineAutoCatalogGetter } from 'vuepress-plugin-auto-catalog/client';
import HtmlLive from './HtmlLive.vue';

export default defineClientConfig({
  async enhance({ app }) {
    app.component('HtmlLive', HtmlLive);

    if (!__VUEPRESS_SSR__) {
      // 不支持 ssr 的模块放这里
      await import('../../src');
    }
  },
  setup: () => {
    defineAutoCatalogGetter();
  },
});
