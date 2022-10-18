<script lang="ts">
import { defineComponent } from "vue";
import "./styles.vue";

export default defineComponent({
  name: "AtomsButton",
  props: {
    styles: Object,
    text: String,
    handleClick: {
      type: Function,
      required: true,
    },
  },
});
</script>

<!-- Ui Render -->
<template>
  <button
    id="button-container"
    :style="styles"
    @click="(e: MouseEvent) => handleClick(e)"
  >
    {{ text }}
  </button>
</template>
