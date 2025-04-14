<template>
  <div class="profile-page">
    <h2>Адмін-панель</h2>
    <p class="avatar">{{ userStore.avatar }}</p>
    <p>Вітаємо, {{ userStore.username }}!</p>
    <button @click="logout">Вийти</button>
  </div>
</template>

<script>
import { useUserStore } from '@/store/user';

export default {
  setup() {
    const userStore = useUserStore();

    function logout() {
      userStore.logout();
      window.location.href = '/login';
    }

    if (!userStore.username) {
      window.location.href = '/login';
    }

    return { userStore, logout };
  },
};
</script>

<style scoped>
.profile-page {
  max-width: 500px;
  margin: 60px auto;
  padding: 30px;
  background: #fff;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 0 12px rgba(0,0,0,0.1);
}
.avatar {
  font-size: 64px;
  margin-bottom: 15px;
}
button {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 10px 25px;
  border-radius: 8px;
  cursor: pointer;
}
</style>
