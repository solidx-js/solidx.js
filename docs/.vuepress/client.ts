/// <reference types="./declare.d.ts" />

import { defineClientConfig } from '@vuepress/client';
import { defineAutoCatalogGetter } from 'vuepress-plugin-auto-catalog/client';
import '../../src/max';
import HtmlLive from './HtmlLive.vue';

export default defineClientConfig({
  enhance({ app }) {
    app.component('HtmlLive', HtmlLive);
  },
  setup: () => {
    defineAutoCatalogGetter();
  },
});
