<template>
  <div class="search-container">
    <input
      type="text"
      v-model="searchQuery"
      placeholder="🔍 Введіть назву товару..."
      class="search-input"
    />
    <button class="search-button">Пошук</button>
  </div>
</template>

<script>
export default {
    name:"SearchBar",
  data() {
    return {
      searchQuery: "",
    };
  },
};
</script>

<style scoped>
/* Контейнер пошукового рядка */
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 20px auto;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  background: #f8f9fa;
  border-radius: 50px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
}

/* Поле вводу */
.search-input {
  flex: 1;
  padding: 12px 15px;
  border: none;
  border-radius: 50px;
  outline: none;
  font-size: 16px;
  transition: 0.3s;
}

/* Анімація при фокусі */
.search-input:focus {
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 123, 255, 0.4);
  transform: scale(1.05);
}

/* Кнопка пошуку */
.search-button {
  padding: 12px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.search-button:hover {
  background-color: #0056b3;
}
</style>
