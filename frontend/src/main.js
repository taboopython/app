import Vue from 'vue';
import App from './App.vue';
import ProductList from './components/ProductList.vue';
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

new Vue({
render: h => h(App, {
props: {
component: ProductList
}
}),
}).$mount('#app');