<script lang="ts">
import { defineComponent } from "vue";
import Text from "@/components/atoms/Text/index.vue";
import "./styles.vue";
import ImageCount from "@/components/molecules/ImageCount/index.vue";
import store from "@/store";

export default defineComponent({
  name: "headerSmartComponent",
  components: {
    Text,
    ImageCount,
  },
  computed: {
    getCountCart(): any {
      const cartCount = store?.getters?.getCartCount();
      return cartCount;
    },
  },
});
</script>

<template>
  <div id="header-container">
    <Text
      type="h1"
      :styles="{
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
      }"
      >☕ Coffee Shop</Text
    >
    <ImageCount
      :imageProps="{
        alt: 'cart',
        src: 'https://img.icons8.com/glyph-neue/44/ffffff/shopping-cart.png',
      }"
      :count="{
        text: getCountCart,
        color: '#FFFF',
        backgroundColor: 'red',
      }"
    />
  </div>
</template>
