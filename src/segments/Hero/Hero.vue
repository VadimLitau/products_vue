<script setup>
import heroBg from '../../assets/images/aboutCompany/hero.png'
import {getCardDataset} from '@/shared/lib/card'
defineProps({
   router: String
})
const dataset = getCardDataset()
</script>

<template>
      <div class="hero w-100 flex g-20 mb-20 pb-20" v-if="router === '/production'">
         <div class="hero-item"
            v-for="item in dataset.imageDataset.data"
            :key="item.id"
         >
            <div class="hero-img mb-10">
               <img :src="item.image" alt="" class="br-10">
            </div>
            <div class="hero-title text-left">
               {{item.title}}
            </div>
         </div>
         <!-- <div class="hero-item">
            <div class="hero-img mb-10">
               <img :src="img" alt="" class="br-10">
            </div>
            <div class="hero-title text-left">
               Производим замороженную и готовую рыбную продукцию
            </div>
         </div>
         <div class="hero-item">
            <div class="hero-img mb-10">
               <img :src="img" alt="" class="br-10">
            </div>
            <div class="hero-title text-left">
               Производим замороженную и готовую рыбную продукцию
            </div>
         </div>
         <div class="hero-item">
            <div class="hero-img mb-10">
               <img :src="img" alt="" class="br-10">
            </div>
            <div class="hero-title text-left">
               Производим замороженную и готовую рыбную продукцию
            </div>
         </div> -->
      </div>
   
      <div class="hero-temp" v-else-if="router === '/company'">
         <img class="br-20" :src="heroBg" alt="">
      </div>
   
</template>
<style scoped>
.hero-item {
   width: 262px;
}
h1{
   color: var(--text-blue);
}
.hero-title {
   color: var(--text-blue);
   font-size: 18px;
   font-weight: 600;
   line-height: 120%;
}

.hero-img {
   height: 170px;
}

.hero-img img {
   width: 100%;
   height: 100%;
   object-fit: cover;
}
.hero-temp {
   height: 530px;
}
.hero-temp img{
   width: 100%;
   height: 100%;
   object-fit: cover;
}
</style>
