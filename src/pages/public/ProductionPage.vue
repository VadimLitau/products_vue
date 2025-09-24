<script setup>
import Sidebar from "@/widgets/SideBar/Sidebar.vue";
import CardList from "@/segments/CardList/CardList.vue";
import { getCardDataset } from "@/utils/card";
import { pluralizeRu } from "@/utils/pluralizeRu";
import { onMounted } from "vue";
import { ref } from "vue";


const dataset = getCardDataset()
const quantity = ref(null)

onMounted(() => {
   quantity.value = pluralizeRu(
      dataset.productsDataset.data.length,
      ['товар', 'товара', 'товаров']
   )
})
</script>
<template>
    <div class="production-page">
      <div class="page-container">
         <h1 class="page-title text-left">Рыбоперерабатывающее предприятие ПТК Экор-Фиш</h1>
      </div>
       <div class="page-container flex">
          
            <sidebar/>
            
            <div class="side">
               <h2 class="text-left">Филе рыбы, стейки, фарш <span>{{dataset.productsDataset.data.length + quantity }}</span></h2>
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
.side{
   flex:1 1 auto;
}
.side h2{
   color:var(--text-blue);
   font-size: 32px;
   font-weight: 600;
   line-height: 120%;
}
.side h2 span{
   font-size: 14px;
   font-weight: 400;
   line-height: 130%;
   color: var(--text-grey);
}
.page-container {
   max-width: 1120px;
   /* width: 1763px; */
   margin: 0 auto;
   /* border: 5px solid blue; */
}
.page-title {
width: 840px;
color: var(--text-blue);
}
</style>