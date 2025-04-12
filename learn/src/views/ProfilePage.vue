<template>
  <div class="profile-container">
    <h2>👤 Профіль користувача</h2>

    <div class="info-box">
      <p><strong>Ім'я:</strong> {{ user.name }}</p>
      <p><strong>Email:</strong> {{ user.email }}</p>
      <button @click="logout">🚪 Вийти</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Анна Коваленко",
        email: "anna@example.com",
      },
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.profile-container {
  max-width: 600px;
  margin: 40px auto;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.info-box p {
  font-size: 18px;
  margin: 10px 0;
}

button {
  margin-top: 20px;
  padding: 10px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #0056b3;
}
</style>
