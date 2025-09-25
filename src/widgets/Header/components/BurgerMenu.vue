<script setup>
import { ref, watch} from 'vue';
import UiSvg from '@/shared/Ui/UiSvg/UiSvg.vue';

const emit = defineEmits(['toggle-menu']) 

const { isOpen } = defineProps({
  isOpen: Boolean,
})

const handleToggle = () => {
  emit('toggle-menu')
}
</script>

<template>
  <aside class="side-menu" :class="{ open: isOpen }">
    <button class="close-btn" @click="handleToggle">×qqqqqqqqqq</button>
    <ul>
      <li><RouterLink to="/">Главная</RouterLink></li>
      <li><RouterLink to="/catalog">Каталог</RouterLink></li>
      <li><RouterLink to="/about">О нас</RouterLink></li>
    </ul>
  </aside>
</template>

<style scoped>

</style>