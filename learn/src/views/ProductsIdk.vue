<template>
  <div class="products">
    <div v-for="(product, index) in products" :key="index" class="product">
      <img :src="getImagePath(product.image)" :alt="product.name" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    name:"ProductsIdk"
    return {
      products: [
        { name: "Ноутбук", image: "laptop.jpg" },
        { name: "Смартфон", image: "phone.jpg" },
        { name: "Наушники", image: "headphones.jpg" },
      ],
    };
  },
  methods: {
    getImagePath(imageName) {
      return new URL(`@/assets/images/${imageName}`, import.meta.url).href;
    },
  },
};
</script>
