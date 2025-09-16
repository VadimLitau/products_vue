<script setup>
import UiButton from '@/shared/Ui/UiButton/UiButton.vue';
import { ref } from 'vue';


defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <UiButton>
    Перейти в каталог
  </UiButton>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
