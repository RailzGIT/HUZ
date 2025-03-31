<template>
  <div>
    <SearchBar />
    <h1>Каталог товарів</h1>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue";

export default {
    name:"ProductsHZ",
  components: {
    SearchBar,
  },
};
</script>
