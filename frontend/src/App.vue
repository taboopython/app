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
              <img v-qrcode:options="{ text: productAffiliateLink }" class="qrcode">
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
              <img v-qrcode:options="{ text: eventAffiliateLink }" class="qrcode">
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
        console.log('Product affiliate link:', this.productAffiliateLink);
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
        console.log('Event affiliate link:', this.eventAffiliateLink);
      },
    },
  };
</script>

<style>
  body {
    background-color: #f5f5f5;
  }

  .container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 15px;
  }

  h1.my-4 {
    font-size: 24px;
    color: #333;
    margin-bottom: 30px;
    text-align: center;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
  }

  .col-md-4 {
    width: 33.333333%;
    padding: 0 15px;
    margin-bottom: 30px;
  }

  .card {
    border: none;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
    transition: all .3s cubic-bezier(.25,.8,.25,1);
    background-color: #fff;
  }

  .card:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,.16), 0 3px 6px rgba(0,0,0,.23);
  }

  .card-body {
    padding: 15px;
  }

  .card-title {
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
  }

  .card-text {
    font-size: 16px;
    color: #666;
    margin-bottom: 15px;
  }

  .btn.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
    color: #fff;
    padding: 10px 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 4px;
    text-decoration: none;
    transition: all .3s ease-in-out;
  }

  .btn.btn-primary:hover {
    background-color: #0056b3;
    border-color: #004c99;
  }

  .qrcode {
    width: 200px;
    height: 200px;
    margin: 0 auto;
    display: block;
  }
</style>
