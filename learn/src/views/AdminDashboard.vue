<template>
  <div class="admin-dashboard">
    <h2>⚙️ Панель адміністратора</h2>
    <input
      v-model="search"
      class="search-bar"
      placeholder="Пошук товарів або користувачів..."
    />
    <div class="admin-content">
      <p v-if="search">🔍 Ви шукаєте: <strong>{{ search }}</strong></p>
      <p v-else>Введіть щось для пошуку...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
    };
  },
};
</script>

<style scoped>
.admin-dashboard {
  background: #fff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
}

.search-bar {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin-top: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.search-bar:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px #007bff50;
}
</style>
