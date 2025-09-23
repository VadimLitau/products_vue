<script setup>
import { computed } from 'vue';

const { size, name } = defineProps({
  size: {
    type: String,
    default: "icon-normal"
  },
  name: String,
});

const svgName = computed(() => `#${name}`)
  
</script>

<template>
  <svg class="icon" :class="size">
    <use :xlink:href="svgName"></use>
  </svg>
</template>


<style scoped>

</style>