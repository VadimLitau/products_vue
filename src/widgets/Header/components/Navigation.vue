<script setup>
 
</script>

<template>
  <nav>
    <ul class="flex align-center g-16">
      <li>
        <RouterLink to="#">Доставка</RouterLink>
      </li>
      <li>
        <RouterLink to="#">Прайс</RouterLink>
      </li>
      <li>
        <RouterLink to="/production">Производство</RouterLink>
      </li>
      <li>
        <RouterLink to="#">Оплата</RouterLink>
      </li>
      <li>
        <RouterLink to="/contacts">Контакты</RouterLink>
      </li>
      <li>
        <RouterLink to="/company">О компании</RouterLink>
      </li>
    </ul>
  </nav>
</template>



<style scoped>
nav{
  margin-left: 30px;
  margin-right: 63px;
  ul{
    padding-top: 2px;
    padding-left: 0;
    margin: 0;
    :deep(a){
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0;
      color: var(--text-blue);
    }      
  }
}
</style>