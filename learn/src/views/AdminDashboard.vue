<template>
  <nav class="admin-nav">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
      <span>Shop Admin</span>
    </div>
    <ul>
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/products">Товары</router-link></li>
      <li><router-link to="/admin">Админ</router-link></li>
      <li><router-link to="/profile">Профиль</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.admin-nav {
  background-color: #2c3e50;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}
.admin-nav .logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.admin-nav .logo img {
  width: 40px;
  height: 40px;
  border-radius: 8px;
}
.admin-nav .logo span {
  color: white;
  font-weight: bold;
  font-size: 1.2em;
}
.admin-nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
  margin: 0;
  padding: 0;
}
.admin-nav li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}
.admin-nav li a:hover {
  color: #f39c12;
}
@media (max-width: 600px) {
  .admin-nav ul {
    flex-direction: column;
    gap: 10px;
  }
}
</style>