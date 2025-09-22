<script setup>
import { ref } from 'vue';


const count = ref(1);

const increment = () => {
   count.value++
}
const decrement = () => {
   if (count.value > 1) {
      count.value--
   }
}
</script>
<template>
	<div class="card-counter">
		<button class="decrement" @click="decrement">-</button>
		<div class="quantity">{{ count }} кг</div>
		<button class="increment" @click="increment">+</button>
	</div>
</template>
<style scoped>
.card-counter {
   height: 40px;
   width: 100%;
   border-radius: 12px;
   background-color: #fff;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 0 18px;
   color: rgba(32, 54, 134, 1);
   font-size: 14px;
   margin-bottom: 8px;
}
.decrement,
.increment {
   background-color: transparent;
   font-size: 12px;
   border: none;
   padding: 8px;
   cursor: pointer;
}
.quantity {
   font-size: 14px;
}

</style>
