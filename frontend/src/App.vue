<template>
  <div>
    <h1>商品一覧</h1>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.price }}円</p>
        <div ref="qrcode"></div>
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

      // アフィリエイトリンクをQRコードのAPIに渡して画像URLを取得する
      const affiliateLink = `https://example.com/affiliate?id=${product.id}`;
      const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
        affiliateLink
      )}`;

      // QRコードを表示する要素に画像タグを挿入する
      const qrcodeContainer = this.$refs.qrcode;
      qrcodeContainer.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;
    },
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

/* 修正済みスタイル */
.container {
  background-color: #1f2937;
  color: #ffffff;
  border-radius: 10px;
  padding: 30px;
}

.container h1 {
  font-size: 32px;
  margin-bottom: 30px;
  color: #ffffff; /* テキストカラーを再度指定 */
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

li:hover {
  transform: translateY(-5px);
}

h3 {
  font-size: 24px;
  color: #1f2937;
  margin-bottom: 10px;
}

p {
  font-size: 18px;
  color: #4b5563;
  margin: 0;
}
</style>