declare module '*.vue' {
  import { ComponentOptions } from 'vue';
  const component: ComponentOptions;
  export default component;
}

declare module 'vuepress-plugin-auto-catalog/client' {
  export const defineAutoCatalogGetter;
}
