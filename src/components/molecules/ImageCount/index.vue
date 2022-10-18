<script lang="ts">
import { defineComponent, PropType } from "vue";
import "./styles.vue";
import Image from "@/components/atoms/Image/index.vue";
import Text from "@/components/atoms/Text/index.vue";
import { IImageProps } from "@/components/atoms/Image/model";
import { ICountProps } from "./model";

export default defineComponent({
  name: "ImageCountMolecules",
  props: {
    styles: Object,
    imageProps: {
      type: Object as PropType<IImageProps>,
      default() {
        return {
          src: "",
          alt: "",
        };
      },
    },
    count: {
      type: Object as PropType<ICountProps>,
    },
  },
  components: { Image, Text },
});
</script>

<!-- Ui Render -->
<template>
  <div
    id="image-count"
    :style="styles"
    v-on:click="$emit('handleClick', $event)"
    role="button"
  >
    <Image :imageProps="imageProps" />
    <div
      class="container-count"
      :style="{ backgroundColor: count?.backgroundColor }"
    >
      <Text
        type="h3"
        :styles="{
          color: count?.color,
          fontSize: '1rem',
        }"
      >
        {{ count?.text }}
      </Text>
    </div>
  </div>
</template>
