import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Підключаємо глобальні стилі
import './assets/styles.css'; // або styles.scss, якщо використовуєш SCSS

createApp(App)
  .use(router)
  .mount('#app');
