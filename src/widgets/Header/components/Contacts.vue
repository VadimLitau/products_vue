<script setup>  
import UiSvg from '@/shared/Ui/UiSvg/UiSvg.vue';
</script>

<template>
  <div class="head-contacts flex align-center g-10">
    <a target="_blank" href="https://t.me/#">
      <UiSvg name="icon-header-telegram"/>
    </a>      
    <a target="_blank" href="https://wa.me/+74956378228" >
      <UiSvg name="icon-header-whatsapp"/>
    </a>
    <div class="head-phone flex-col align-start">
      <a class="phone" href="tel:+74956378228">8 (495) 637-82-28</a>
      <p class="phone-small">заказать звонок</p>
    </div>
  </div>
</template>

<style scoped>
.head-contacts{
  margin-top: -8px;

  a{
    display: flex;
  }
}  

.head-phone{
  margin-left: 10px;

  a{
    color: var(--text-blue);
    margin-bottom: 6px;
  }

  p{
    color: var(--text-grey);
  }
}
</style>