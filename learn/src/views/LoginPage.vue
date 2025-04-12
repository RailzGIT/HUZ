<template>
  <div class="login-container">
    <h2>🔐 Вхід до акаунту</h2>

    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="password">Пароль</label>
        <input v-model="password" type="password" id="password" required />
      </div>

      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>

      <button type="submit">Увійти</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    login() {
      if (this.email === "test@example.com" && this.password === "123456") {
        this.errorMessage = "";
        this.$router.push("/profile");
      } else {
        this.errorMessage = "❌ Неправильний email або пароль.";
      }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 60px auto;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
}

h2 {
  margin-bottom: 24px;
  color: #222;
  text-align: center;
}

.form-group {
  margin-bottom: 18px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
  color: #333;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  transition: border-color 0.2s ease;
}

input:focus {
  border-color: #007bff;
}

.error {
  color: red;
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #28a745;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.25s ease;
}

button:hover {
  background-color: #218838;
}
</style>
