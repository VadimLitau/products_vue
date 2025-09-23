<script setup>
import Sidebar from "@/widgets/SideBar/Sidebar.vue";
import CardList from "@/segments/CardList/CardList.vue";
import { getCardDataset } from "@/utils/card";


const dataset = getCardDataset()
</script>
<template>
    <div class="production-page">
      <div class="page-container flex">
         
            <sidebar/>
         
         <div>
            <h1 class="page-title text-left">Рыбоперерабатывающее предприятие ПТК Экор-Фиш</h1>
            <CardList :cardList="dataset.productsDataset.data" />
         </div>
      </div>
    </div>
</template>
<style scoped >
.production-page{
   background-color: var(--bg-grey);
   /* background-color: rgba(235, 237, 240, 1); */
}
.page-container {
   max-width: 1763px;
   width: 1763px;
   margin: 0 auto;
   border: 5px solid blue;
}
.page-title {
width: 840px;
color: var(--text-blue);
}
</style>