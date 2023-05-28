<template>
  <div class="container">
    <h1 class="my-4">商品一覧</h1>
    <div class="row">
      <div class="col-md-4" v-for="product in products" :key="product.id">
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ product.name }}</h3>
            <p class="card-text">{{ product.price }}円</p>
            <button class="btn btn-primary" @click="handleProductClick(product)">アフィリエイトリンク</button>
            <div v-if="selectedProduct && selectedProduct.id === product.id" class="mt-3">
  <div v-qrcode="productAffiliateLink" class="qrcode"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="my-4">イベント一覧</h1>
    <div class="row">
      <div class="col-md-4" v-for="event in events" :key="event.id">
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title">{{ event.name }}</h3>
            <p class="card-text">{{ event.date }}</p>
            <button class="btn btn-primary" @click="handleEventClick(event)">アフィリエイトリンク</button>
            <div v-if="selectedEvent && selectedEvent.id === event.id" class="mt-3">
              <div v-qrcode="eventAffiliateLink" class="qrcode"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueQrcode from 'vue-qrcode-directive';

export default {
  directives: {
    'qrcode': VueQrcode
  },
  data() {
    return {
      products: [],
      selectedProduct: null,
      productAffiliateLink: '',
      events: [],
      selectedEvent: null,
      eventAffiliateLink: '',
    };
  },
  mounted() {
    this.fetchProducts();
    this.fetchEvents();
  },
  methods: {
    fetchProducts() {
      const dummyProducts = [
        { id: 1, name: '商品1', price: 1000 },
        { id: 2, name: '商品2', price: 2000 },
        { id: 3, name: '商品3', price: 3000 },
      ];
      this.products = dummyProducts;
    },
    handleProductClick(product) {
      this.selectedProduct = product;
      this.productAffiliateLink = 'https://affiliate-link.com/' + product.id;
    },
    fetchEvents() {
      const dummyEvents = [
        { id: 1, name: 'イベント1', date: '2023-06-01' },
        { id: 2, name: 'イベント2', date: '2023-06-15' },
        { id: 3, name: 'イベント3', date: '2023-07-01' },
      ];
      this.events = dummyEvents;
    },
    handleEventClick(event) {
      this.selectedEvent = event;
      this.eventAffiliateLink = 'https://affiliate-link.com/' + event.id;
    },
  },
};

</script>

<style>
.qrcode {
  width: 200px;
  height: 200px;
}
</style>
