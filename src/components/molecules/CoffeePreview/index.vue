<script lang="ts">
import { defineComponent, PropType } from "vue";
import Image from "@/components/atoms/Image/index.vue";
import Text from "@/components/atoms/Text/index.vue";
import Button from "@/components/atoms/Button/index.vue";
import "./styles.vue";
import { IImageProps } from "@/components/atoms/Image/model";

export default defineComponent({
  name: "coffeePreview",
  props: {
    styles: Object,
    id: String,
    imageProps: {
      type: Object as PropType<IImageProps>,
      required: true,
    },
    title: String,
    description: String,
    price: Number,
    handlePreviewClick: {
      type: Function,
      default: function () {
        return {};
      },
    },
  },
  components: { Image, Text, Button },
});
</script>

<!-- Ui Render -->
<template>
  <div id="coffeePreview" :style="styles">
    <Image
      :imageProps="imageProps"
      :styles="{
        width: '120px',
        maxWidth: '48vh',
        maxHeight: '36vh',
        margin: '0 auto',
      }"
    />
    <Text
      type="h1"
      :styles="{ fontWeight: 'bold', margin: '0 auto', fontSize: '2rem' }"
    >
      {{ title }}
    </Text>

    <Text> <strong>Description:</strong> {{ description }} </Text>
    <Text> <strong>Price:</strong> {{ price }} </Text>
    <Button
      :styles="{
        margin: '0 auto',
        width: '20%',
        padding: '12px',
        fontSize: '0.7rem',
        borderRadius: '10px',
        fontWeight: 'bold',
        backgroundColor: '#3B2F2F',
        color: '#FFFF',
      }"
      text="Add To Cart"
      :handleClick="() => handlePreviewClick(id)"
    />
  </div>
</template>
