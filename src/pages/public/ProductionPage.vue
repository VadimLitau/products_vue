<script setup>
import Hero from "@/segments/Hero/Hero.vue";
import Sidebar from "@/widgets/SideBar/Sidebar.vue";
import CardList from "@/segments/CardList/CardList.vue";
import Pagination from "@/widgets/Pagination/Pagination.vue";
import { getCardDataset } from "@/shared/lib/card";
import { pluralizeRu } from "@/shared/lib/pluralizeRu";
import { ref, onMounted, computed, watch } from "vue";
import { useRouter } from "vue-router";

const router = useRouter().currentRoute.value.path
const dataset = getCardDataset()
const quantity = ref(null)
const filters = ref([])
const currentPage = ref(1);
const itemsPerPage = ref(3); 


const paginatedProducts = computed(() => {
   const start = (currentPage.value - 1) * itemsPerPage.value;
   const end = start + itemsPerPage.value;
   return dataset.productsDataset.data.slice(start, end);
});

const totalPages = computed(() => {
   return Math.ceil(dataset.productsDataset.data.length / itemsPerPage.value);
});

const handlePageChange = (page) => {
   currentPage.value = page;
   window.scrollTo({ top: 0, behavior: 'smooth' });
};

watch(filters, () => {
   currentPage.value = 1;
});
const addFilter = (item) => {
   const filterExists = filters.value.some(filter => filter.item === item.item)

   if (filterExists) {
      return
   }

   filters.value.push({
      item: item.item
   })
}
const removeFilter = (item) => {
   filters.value = filters.value.filter((filter) => {
      return filter.item !== item.item
   })
}
onMounted(() => {
   quantity.value = pluralizeRu(
      dataset.productsDataset.data.length,
      ['товар', 'товара', 'товаров']
   )
})
</script>
<template>
   <div class="production-page">
      <div class="container">
         <h1 class="page-title text-left">Рыбоперерабатывающее предприятие ПТК Экор-Фиш</h1>
      </div>
      <div class="container">
         <Hero :router="router"></Hero>
      </div>
      <div class="container flex mt-20 pt-20">

         <sidebar @addFilter="addFilter" />

         <div class="side">
            <h2 class="text-left">Филе рыбы, стейки, фарш
               <span>{{ dataset.productsDataset.data.length + quantity }}</span></h2>
            <div class="filters flex">
               <div class="filters-item" v-for="filter in filters" :key="filter.item" :title="filter.item">
                  <span>
                     {{ filter.item }}
                  </span>
                  <span @click="removeFilter(filter)">&times;</span>
               </div>
            </div>
            <CardList :cardList="paginatedProducts" />
            <Pagination
               :current-page="currentPage"
               :total-pages="totalPages"
               @page-change="handlePageChange"
            ></Pagination>
         </div>
      </div>
   </div>
</template>
<style scoped>
.production-page {
   background-color: var(--bg-grey);
   /* background-color: rgba(235, 237, 240, 1); */
}

.side {
   flex: 1 1 auto;
}

.side h2 {
   color: var(--text-blue);
   font-size: 32px;
   font-weight: 600;
   line-height: 120%;
   margin: 0;
   margin-bottom: 20px;
}

.side h2 span {
   font-size: 14px;
   font-weight: 400;
   line-height: 130%;
   color: var(--text-grey);
}

.filters {
   min-height: 30px;
   margin-bottom: 20px;
   flex-wrap: wrap;
   gap: 10px;
}

.filters-item {
   margin-right: 10px;
   width: 125px;
   font-size: 14px;
   line-height: 130%;
   color: var(--text-blue);
   padding: 5px 10px;
   border: 1px solid var(--text-blue);
   border-radius: 8px;
   background-color: var(--bg-white);
   align-items: center;
   justify-content: space-between;
   display: flex;
}

.filters-item span:first-child {
   width: 100px;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
}

.filters-item span:last-child {
   cursor: pointer;
   font-size: 20px;
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