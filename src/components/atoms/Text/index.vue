<!-- Type like 'h1', 'h2', 'h3', or 'p' -->

<script>
import "./styles.vue";

export default {
  name: "AtomsText",
  props: {
    styles: Object,
    type: String,
  },
  computed: {
    customTag: function () {
      const tag = this?.type ?? "p";
      return tag;
    },
  },
};
</script>

<!-- Ui Render -->
<template>
  <component id="container-text" :is="customTag" :style="styles">
    <slot />
  </component>
</template>
