<script setup>
import UiSvg from '@/shared/Ui/UiSvg/UiSvg.vue';
import logo from "@/assets/images/header/logo.svg";


</script>

<template>
  <header class="header-wrap flex justify-center">
    
      <div class="head flex align-center g-10">
      <RouterLink to="/">
        <img :src="logo" alt="Compnay logo">
      </RouterLink>      
      <p class="text-small">Поставщик&nbsp;продуктов для HoReCa</p>
    </div>

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
  </header>
</template>

<style scoped>


.header-wrap{
  width: 100%;
  box-sizing: border-box;
  padding: 25px 0px 16px 14px;
  background: var(--bg-white);  

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
  
}

</style>