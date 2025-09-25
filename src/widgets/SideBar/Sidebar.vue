<script setup>
import UiDropDown from '@/shared/Ui/UiDropDown/UiDropDown.vue';
import { setDatasets } from '@/shared/lib/dropdown';

const emits = defineEmits(['addFilter'])
const {  sidebarMenuDataset } = setDatasets();
</script>
<template>
    <div class="sidebar">
      <ui-drop-down 
        :dropdownData="sidebarMenuDataset.items" 
        :title="sidebarMenuDataset.title" 
        :icon="true"
        :iconName="'icon-products-fileSteyki'"
        @addFilter="(item) => emits('addFilter', item)"
      />
    </div>
</template>
<style scoped >
.sidebar {
   margin-right: 20px;
   min-width: 256px;
   min-height: 300px;
}
</style>