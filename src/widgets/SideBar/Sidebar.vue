<script setup>
import UiDropDown from '@/shared/Ui/UiDropDown/UiDropDown.vue';
import { setDatasets } from '@/utils/dropdown';

const {  sidebarMenuDataset } = setDatasets();
</script>
<template>
    <div class="sidebar">
      <ui-drop-down :dropdownData="sidebarMenuDataset.items" :title="sidebarMenuDataset.title"/>
    </div>
</template>
<style scoped >
.sidebar {
   margin-right: 32px;
   /* width: 256px; */
   min-width: 256px;
   min-height: 300px;
   background-color: blueviolet;
   /* min-height:calc(100vh - 100px); */
}
</style>