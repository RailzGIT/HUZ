import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import CartView from '@/views/CartView.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/admin', name: 'Admin', component: AdminDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
