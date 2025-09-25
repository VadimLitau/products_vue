<script setup>
import {ref, onMounted, onUnmounted} from 'vue';
import DesktopHeader from '@/widgets/Header/components/DesktopHeader.vue';
import MobileHeader from '@/widgets/Header/components/MobileHeader.vue';

const isMobile = ref(false);

let mediaQuery;



onMounted(() => {  
  mediaQuery = window.matchMedia('(max-width: 1240px)');
  isMobile.value = mediaQuery.matches;

  mediaQuery.addEventListener('change', (e) => {
    isMobile.value = e.matches;
  })
})

onUnmounted(() => {
  mediaQuery?.removeEventListener('change', () => {})
})
</script>

<template>
  <header class="header-wrap flex justify-center">
    <DesktopHeader v-if="!isMobile"/>    
    <MobileHeader v-else />
  </header>
</template>

<style scoped>


.header-wrap{
  width: 100%;
  box-sizing: border-box;
  padding: 25px 0px 16px 14px;
  background: var(--bg-white); 
  
}

@media(max-width:1240px){ 

  .header-wrap{
    padding: 25px 14px 16px 14px;
    justify-content: space-between;
  }
}

</style>