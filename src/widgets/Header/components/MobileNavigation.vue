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
  <div class="mobile-nav flex align-center g-30" >
    <nav>
      <ul class="flex align-center g-16">
        <li>
          <RouterLink to="#">
            <UiSvg name="icon-header-search" size="icon-small"/>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            <UiSvg name="icon-header-profile" size="icon-small"/>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            <UiSvg name="icon-header-favorites" size="icon-small"/>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="#">
            <UiSvg name="icon-header-cart" size="icon-small"/>
          </RouterLink>
        </li>
      </ul>
    </nav>
    <button @click="handleToggle">
      <UiSvg name="icon-header-burgerBtn" size="icon-small"/>
    </button>
  </div>  
</template>

<style scoped>
.mobile-nav{
  a, 
  button{
    color: var(--text-blue);
  }

  button{
    background: none;
    cursor: pointer;
  }
}


</style>