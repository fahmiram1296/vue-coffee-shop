<!-- Type like 'h1', 'h2', 'h3', or 'p' -->

<script lang="ts">
import { defineComponent } from "vue";
import "./styles.vue";

export default defineComponent({
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
});
</script>

<!-- Ui Render -->
<template>
  <component id="container-text" :is="customTag" :style="styles">
    <slot />
  </component>
</template>
