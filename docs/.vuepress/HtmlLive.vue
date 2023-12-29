<template>
  <div :id="containerId" ref="container" :style="{ background: '#f0f0f0', height: height }"></div>
</template>

<script>
export default {
  props: {
    base64Html: { type: String, required: true },
    height: { type: String, default: '300px' },
  },

  data() {
    return {
      containerId: `html-live-${Math.random().toString(36).slice(2)}`,
    };
  },

  mounted() {
    this.updateContent();
  },

  unmounted() {
    const scope = window[this.containerId];
    if (scope) {
      scope.$disposes?.forEach(dispose => dispose());
      delete window[this.containerId];
    }
  },

  updated() {
    this.updateContent();
  },

  methods: {
    updateContent() {
      const root = this.$refs.container;
      root.innerHTML = '';

      let decodedHtml = atob(this.base64Html);
      decodedHtml = decodedHtml.replace(/__VUEPRESS_BASE__/g, __VUEPRESS_BASE__);

      const parser = new DOMParser();
      const doc = parser.parseFromString(decodedHtml, 'text/html');

      for (let i = 0; i < doc.body.childNodes.length; i++) {
        const node = doc.body.childNodes[i];
        if (node.nodeName === 'SCRIPT') continue;

        root.appendChild(node.cloneNode(true));
      }

      // append scripts
      const scripts = doc.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        root.appendChild(newScript);

        // 简单做个沙箱
        newScript.innerHTML = `
(function() {
  const root = document.getElementById('${this.containerId}');

  const $ = (selector) => root.querySelector(selector);
  const $$ = (selector) => root.querySelectorAll(selector);
  const $disposes = [];

  const scope = { $, $$, $disposes };
  window['${this.containerId}'] = scope;

  with (scope) {
    ${script.innerHTML}
  }
})();
`;
      });
    },
  },
};
</script>
