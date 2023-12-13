<template>
  <div v-html="decodedHtml" style="background: #f0f0f0;"></div>
</template>

<script>
export default {
  props: {
    base64Html: {
      type: String,
      required: true,
    },
  },
  computed: {
    decodedHtml() {
      return atob(this.base64Html);
    },
  },
};
</script>
