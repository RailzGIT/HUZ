<template>
  <div class="home">
    <h2>🛍️ Вітання у HUZ Shop</h2>
    <p>Перегляньте наші найпопулярніші товари:</p>

    <div class="product-list">
      <div class="product" v-for="(product, index) in products" :key="index">
        <h3>{{ product.name }}</h3>
        <p>Ціна: {{ product.price }} грн</p>
        <button @click="addToCart(product)">Додати в кошик</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { name: "Навушники", price: 1200 },
        { name: "Мишка", price: 800 },
        { name: "Ноутбук", price: 25000 },
      ],
    };
  },
  methods: {
    addToCart(product) {
      alert(`Товар "${product.name}" додано в кошик (поки що без збереження)`);
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}

.product-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 20px;
}

.product {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  width: 200px;
  margin: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.product h3 {
  margin: 0;
}

button {
  margin-top: 10px;
  padding: 8px 12px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #0056b3;
}
</style>
