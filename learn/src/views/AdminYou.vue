<template>
  <div class="admin">
    <h1>Загрузка товаров (CSV)</h1>
    <input type="file" @change="handleFileUpload" accept=".csv" />
    <table v-if="products.length">
      <thead>
        <tr>
          <th>Название</th>
          <th>Цена</th>
          <th>Категория</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index">
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Papa from 'papaparse';

export default {
  name:"AdminYou",
  data() {
    return {
      products: [],
    };
  },
  methods: {
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (!file) return;

      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: (result) => {
          this.products = result.data.map((row) => ({
            name: row["Название"],
            price: row["Цена"],
            category: row["Категория"],
          }));
        },
      });
    },
  },
};
</script>

<style scoped>
.admin {
  padding: 20px;
}

input {
  margin-bottom: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f4f4f4;
}
</style>
