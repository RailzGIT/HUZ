<template>
  <nav class="admin-nav">
    <ul>
      <li><router-link to="/">Главная</router-link></li>
      <li><router-link to="/products">Товары</router-link></li>
      <li><router-link to="/admin">Админ</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.admin-nav {
  background-color: #333;
  padding: 10px;
}

.admin-nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.admin-nav li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>
