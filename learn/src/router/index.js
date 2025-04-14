import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Products from '@/views/Products.vue';
import Admin from '@/views/Admin.vue';
import ProfilePage from '@/pages/ProfilePage.vue';
import LoginPage from '@/pages/LoginPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/admin', component: Admin },
  { path: '/profile', component: ProfilePage },
  { path: '/login', component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;