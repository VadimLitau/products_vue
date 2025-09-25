<script setup>  
import logo from "@/assets/images/header/logo.svg";

</script>

<template>
  <div class="head flex align-center g-10">
    <RouterLink to="/">
      <img :src="logo" alt="Compnay logo">
    </RouterLink>      
    <p class="text-small">Поставщик&nbsp;продуктов для HoReCa</p>
  </div>
</template>



<style scoped>
.head{
  p{
    color: var(--text-grey);
    max-width: 148px;
    text-align: left;
    line-height: 14px;
    margin-bottom: 6px;
    letter-spacing: 0;
  }
}

</style>