<template>
  <div class="cart-box">
    <h3>🛒 Кошик</h3>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} — {{ item.price }} грн
        <button @click="removeItem(index)">❌</button>
      </li>
    </ul>
    <p v-if="cartItems.length">💰 Загальна сума: {{ totalPrice }} грн</p>
    <p v-else>Ваш кошик порожній</p>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const cartItems = inject("cartItems");
    const totalPrice = inject("totalPrice");
    const removeItem = inject("removeItem");

    return {
      cartItems,
      totalPrice,
      removeItem,
    };
  },
};
</script>

<style scoped>
.cart-box {
  background: #fff;
  padding: 15px;
  margin: 20px 0;
  border: 1px solid #eee;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}
button {
  background: red;
  color: white;
  border: none;
  border-radius: 4px;
  margin-left: 10px;
  padding: 4px 8px;
  cursor: pointer;
}
</style>
