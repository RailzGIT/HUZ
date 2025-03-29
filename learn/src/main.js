import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/style.css'; // Подключаем глобальные стили

const app = createApp(App);
app.use(router);
app.mount('#app');