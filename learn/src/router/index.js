import { createRouter, createWebHistory } from 'vue-router';

// Імпорти сторінок
import Home from '@/views/Home.vue';
import CartView from '@/views/CartView.vue';
import AdminDashboard from '@/views/AdminDashboard.vue';
import ManageProducts from '@/views/ManageProducts.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/admin', name: 'AdminDashboard', component: AdminDashboard },
  { path: '/products', name: 'ManageProducts', component: ManageProducts }, // ✅ Додано!
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

