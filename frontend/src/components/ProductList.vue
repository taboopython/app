<template>
  <div class="container">
    <h1>商品一覧</h1>
    <ul>
      <li v-for="product in products" :key="product.id" class="product-item">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}円</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: '商品1', price: 1000 },
        { id: 2, name: '商品2', price: 2000 },
        { id: 3, name: '商品3', price: 3000 },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

@media screen and (min-width: 768px) {
  .product-item {
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>