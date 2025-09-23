import { createWebHistory, createRouter } from 'vue-router';
import { PAGES_PATHS } from '@/shared/lib/constants';
import MainPage from '@/pages/public/MainPage.vue';
import CompanyPage from '@/pages/public/CompanyPage.vue'
import ContactsPage from '@/pages/public/ContactsPage.vue';
import ProductionPage from '@/pages/public/ProductionPage.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const routes = [
  {
    path: PAGES_PATHS.MAIN, 
    component: MainPage,
    meta:{
      forUnauthorized: true,
      layout: DefaultLayout
    }
  },
  {
    path: PAGES_PATHS.COMPANY, 
    component: CompanyPage,
    meta:{
      forUnauthorized: true,
      layout: DefaultLayout
    }
  },
  {
    path: PAGES_PATHS.CONTACTS, 
    component: ContactsPage,
    meta:{
      forUnauthorized: true,
      layout: DefaultLayout
    }
  },
  {
    path: PAGES_PATHS.PRODUCTION, 
    component: ProductionPage,
    meta:{
      forUnauthorized: true,
      layout: DefaultLayout
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;