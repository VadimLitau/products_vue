<script setup>
import { ref, watch } from 'vue';
import Logo from '@/widgets/Header/components/Logo.vue';
import MobileNavigation from '@/widgets/Header/components/MobileNavigation.vue';
import BurgerMenu from './BurgerMenu.vue';
 
const isOpen = ref(false);

const toggleOpen = () => {
  isOpen.value = !isOpen.value;
  }

watch(isOpen, (val) => {
  if (val) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Logo/>
  <MobileNavigation @toggle-menu="toggleOpen" :isOpen="isOpen"/>
  <BurgerMenu @toggle-menu="toggleOpen" :isOpen="isOpen"/>
</template>

<style scoped>
.side-menu {
  box-sizing: border-box;
  position: fixed;
  top: 60px; 
  right: -100%;
  width: 100%;
  height: calc(100vh - 60px);
  background: #fff;
  transition: right 0.3s linear;
  z-index: 10;
  padding: 20px;
  box-shadow: -2px 0 8px rgba(0,0,0,0.2);
  overflow-y: auto;
}

.side-menu.open {
  right: 0;
}

.close-btn {
  background: none;
  border: none;
  font-size: 24px;
  margin-bottom: 20px;
}
</style>