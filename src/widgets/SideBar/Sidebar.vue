<script setup>
import UiDropDown from '@/shared/Ui/UiDropDown/UiDropDown.vue';
import { dropdownData2 } from '@/utils/dropdown';


</script>
<template>
    <div class="sidebar">
      <ui-drop-down :dropdownData="dropdownData2" :title="'Филе рыбы, стейки, фарш'"/>
    </div>
</template>
<style scoped >
.sidebar {
   /* width: 100%; */
   min-width: 252px;
    height: 100vh;
    /* background-color: var(--bg-white); */
    margin-right: 50px;
}
</style>