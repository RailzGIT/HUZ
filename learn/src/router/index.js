import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/HomeBase.vue';
import Products from '@/views/ProductsIdk.vue';
import Admin from '@/views/AdminYou.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/admin', component: Admin },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;