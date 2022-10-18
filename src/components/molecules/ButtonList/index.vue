<script lang="ts">
import { defineComponent, PropType } from "vue";
import "./styles.vue";
import Text from "@/components/atoms/Text/index.vue";
import { IListDataProps } from "./model";

export default defineComponent({
  name: "ButtonListMolecule",
  components: { Text },
  props: {
    styles: Object,
    listData: {
      type: Array as PropType<IListDataProps>,
    },
    handleListClick: {
      type: Function,
      default: function () {
        return {};
      },
    },
  },
});
</script>

<!-- Ui Render -->
<template>
  <ul id="container-list" :style="styles">
    <li
      :class="data?.selected ? 'selected' : 'unselected'"
      role="button"
      v-for="data in listData"
      :key="data?.id"
      @click="() => handleListClick(data)"
      :data-testId="data?.id"
    >
      <Text type="h2" :styles="{ fontSize: '1.2rem' }">
        {{ data?.name }}
      </Text>
    </li>
  </ul>
</template>
