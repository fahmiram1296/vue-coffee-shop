<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IImageProps } from "./model";

export default defineComponent({
  name: "ImageAtom",
  props: {
    styles: Object,
    imageProps: {
      type: Object as PropType<IImageProps>,
      required: true,
    },
  },
  computed: {
    imageQuery: function () {
      const query = `${this?.imageProps?.src}?q=80`;
      return query;
    },
  },
});
</script>

<!-- Ui Render -->
<template>
  <img :src="imageQuery" :style="styles" :alt="imageProps?.alt" />
</template>
