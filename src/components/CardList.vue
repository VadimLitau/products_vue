<script setup>
import Card from './Card.vue';

defineProps({
  cardList: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="cards-list">
    <Card 
      v-for="card in cardList" 
      :key="card.id" 
      :card="card" 
      class="card-item"
    />
  </div>
</template>

<style scoped>
/* .cards-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px;
  padding: 20px 0;
} */


.cards-list {
   width: 100%;
   max-width: 1458px;
   display: flex;
   flex-wrap: wrap;
   gap: 50px;
   background: rgb(236, 237, 240);
}
.card-item {
   border: 1px solid #e5e7eb;
   /* border-radius: 12px; */
   overflow: hidden;
   /* background: white; */
   transition: box-shadow 0.3s ease;
   /* margin: 0 auto; */
   /* max-width: 250px; */
}
</style>