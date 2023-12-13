<template>
  <div ref="container" style="background: #f0f0f0"></div>
</template>

<script>
export default {
  props: {
    base64Html: {
      type: String,
      required: true,
    },
  },

  mounted() {
    this.createShadowDOM();
  },

  methods: {
    createShadowDOM() {
      const decodedHtml = atob(this.base64Html);
      const parser = new DOMParser();
      const doc = parser.parseFromString(decodedHtml, 'text/html');

      const containerId = 'shadow-container-' + Math.random().toString(36).slice(2);
      this.$refs.container.id = containerId;
      const shadowRoot = this.$refs.container.attachShadow({ mode: 'open' });

      for (let i = 0; i < doc.body.childNodes.length; i++) {
        const node = doc.body.childNodes[i];
        if (node.nodeName === 'SCRIPT') continue;

        shadowRoot.appendChild(node.cloneNode(true));
      }

      // append scripts
      const scripts = doc.querySelectorAll('script');
      scripts.forEach(script => {
        const newScript = document.createElement('script');
        shadowRoot.appendChild(newScript);

        // 简单做个沙箱
        newScript.innerHTML = `
(function() {
  const shadowRoot = document.getElementById('${containerId}').shadowRoot;
  const scope = {
    document: shadowRoot
  };

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
