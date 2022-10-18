<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";
import Catalogue from "@/components/organism/Catalogue/index.vue";
import coffeeDataJson from "@/static/coffeeshop-data.json";
import store from "@/store/index";

export default defineComponent({
  name: "home-page",
  components: { Catalogue },
  data: function () {
    return {
      selectedCoffee: 0,
      coffeeData: coffeeDataJson,
    };
  },
  computed: {
    getCatalogueData(): any {
      const selectedCoffee = this?.selectedCoffee;
      const coffeeData = this?.coffeeData ?? [];
      const image = {
        src: coffeeData[selectedCoffee]?.poster,
        alt: coffeeData[selectedCoffee]?.name,
      };
      return {
        styles: {},
        id: coffeeData[selectedCoffee]?.id,
        imageProps: image,
        description: coffeeData[selectedCoffee]?.description,
        title: coffeeData[selectedCoffee]?.name,
        price: Number(coffeeData[selectedCoffee]?.price),
      };
    },
    getListData(): any {
      const putSelectedData = this?.coffeeData?.map(
        (item: any, index: number) => ({
          ...item,
          selected: index === this.selectedCoffee,
        })
      );
      return putSelectedData;
    },
  },
  methods: {
    ...mapActions(["addToCart"]),
    handleClick: function (type: string, data: any) {
      if (type === "previewClick") {
        const selectedCoffee = this?.coffeeData?.find(
          (item) => item?.id === data
        );
        store.dispatch("addToCart", selectedCoffee);
        alert("Success Add To Cart");
      } else {
        const getIdByIndex = this?.coffeeData?.findIndex(
          (item) => item?.id === data?.id
        );
        this.selectedCoffee = getIdByIndex;
      }
    },
  },
});
</script>

<template>
  <div id="homepage">
    <Catalogue
      :previewData="getCatalogueData"
      :listData="getListData"
      :handleCatalogueClick="handleClick"
    />
  </div>
</template>
