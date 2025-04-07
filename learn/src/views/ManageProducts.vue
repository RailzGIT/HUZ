<template>
  <div class="manage-products">
    <h2>🔍 Пошук товарів</h2>
    <input
      v-model="searchQuery"
      placeholder="Введіть назву товару..."
      class="search-input"
    />

    <ManageCart />

    <ProductList :products="filteredProducts" />
  </div>
</template>

<script>
import { ref, computed, provide } from "vue";
import ManageCart from "@/components/ManageCart.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    ManageCart,
    ProductList,
  },
  setup() {
    const searchQuery = ref("");
    const cartItems = ref([]);
    const products = ref([
      { name: "Навушники", price: 1200 },
      { name: "Мишка", price: 700 },
      { name: "Клавіатура", price: 1000 },
      { name: "Монітор", price: 5000 },
      { name: "Ноутбук", price: 25000 },
    ]);

    const filteredProducts = computed(() => {
      return products.value.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });

    const totalPrice = computed(() => {
      return cartItems.value.reduce((sum, item) => sum + item.price, 0);
    });

    function addToCart(product) {
      cartItems.value.push(product);
    }

    function removeItem(index) {
      cartItems.value.splice(index, 1);
    }

    // Передаємо в дочірні компоненти
    provide("cartItems", cartItems);
    provide("totalPrice", totalPrice);
    provide("addToCart", addToCart);
    provide("removeItem", removeItem);

    return {
      searchQuery,
      products,
      filteredProducts,
      
    };
  },
};
</script>

<style scoped>
.manage-products {
  padding: 20px;
}

.search-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  margin: 15px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.search-input:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 4px #007bff50;
}
</style>
