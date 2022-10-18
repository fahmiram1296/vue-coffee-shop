<script lang="ts">
import { defineComponent, PropType } from "vue";
import "./styles.vue";
import CoffeePreview from "@/components/molecules/CoffeePreview/index.vue";
import ButtonList from "@/components/molecules/ButtonList/index.vue";
import { IPreviewProps } from "./model";
import { IListDataProps } from "@/components/molecules/ButtonList/model";

export default defineComponent({
  name: "catalogueOrganism",
  props: {
    previewData: {
      type: Object as PropType<IPreviewProps>,
    },
    listData: {
      type: Array as PropType<IListDataProps>,
      default() {
        return [];
      },
    },
    handleCatalogueClick: {
      type: Function,
      default: function () {
        return {};
      },
    },
  },
  components: { CoffeePreview, ButtonList },
});
</script>

<!-- Ui Render -->
<template>
  <section id="catalogue">
    <section class="catalogue-list">
      <ButtonList
        :listData="listData"
        :handleListClick="(data: any) => handleCatalogueClick('listClick', data)"
      />
    </section>
    <section class="catalogue-preview">
      <CoffeePreview
        :id="previewData?.id"
        :handlePreviewClick="
          (data: any) => handleCatalogueClick('previewClick', data)
        "
        :styles="{
          ...previewData?.styles,
        }"
        :image-props="
          previewData?.imageProps ?? {
            src: '',
            alt: '',
          }
        "
        :description="previewData?.description"
        :title="previewData?.title"
        :price="previewData?.price"
      />
    </section>
  </section>
</template>
