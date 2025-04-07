<template>
  <div class="product-list">
    <div class="product" v-for="(product, index) in products" :key="index">
      <h4>{{ product.name }}</h4>
      <p>Ціна: {{ product.price }} грн</p>
      <button @click="addToCart(product)">Додати в кошик</button>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  props: ["products"],
  setup() {
    const addToCart = inject("addToCart");
    return { addToCart };
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.product {
  background: #fff;
  padding: 16px;
  border-radius: 10px;
  width: 200px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}
button {
  margin-top: 10px;
  padding: 8px;
  width: 100%;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
