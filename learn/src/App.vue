<template>
  <div id="app">
    <nav class="navbar">
      <h1 class="logo">🛍️ HUZ Shop</h1>
      <router-link to="/" class="nav-link">🏠 Головна</router-link>
      <router-link to="/cart" class="nav-link">🛒 Кошик</router-link>
      <router-link to="/admin" class="nav-link">⚙️ Адмінка</router-link>
    </nav>

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f5f7fa;
  min-height: 100vh;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 30px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 10;
}

.logo {
  font-size: 22px;
  font-weight: bold;
  color: #007bff;
}

.nav-link {
  margin-left: 15px;
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #007bff;
}

.main-content {
  padding: 30px 20px;
  max-width: 960px;
  margin: auto;
}
</style>

