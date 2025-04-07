<template>
  <div>
    <nav>
      <router-link to="/">🏠 Головна</router-link>
      <router-link to="/cart">🛒 Кошик</router-link>
      <router-link to="/admin">⚙️ Адмін</router-link>
      <router-link to="/products">📦 Продукти</router-link> <!-- ✅ нове посилання -->
    </nav>
    <router-view />
  </div>
</template>
