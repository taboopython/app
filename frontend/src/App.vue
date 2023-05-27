<template>
  <div>
    <h1>商品一覧</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}円</p>
        <button @click="handleProductClick(product)">アフィリエイトリンク</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      // ここで実際のAPI呼び出しを行うコードを追加する
      // レスポンスから商品データを取得し、this.productsに代入する
      const dummyProducts = [
        { id: 1, name: '商品1', price: 1000 },
        { id: 2, name: '商品2', price: 2000 },
        { id: 3, name: '商品3', price: 3000 },
      ];
      this.products = dummyProducts;
    },
    handleProductClick(product) {
      // ここで選択した商品をアフィリエイトリンクと共に処理するコードを追加する
      console.log('選択した商品:', product);
    },
  },
};
</script>