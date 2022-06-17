require('./bootstrap');
import Vue from 'vue';

const items = [
  {
    name: '鉛筆',
    price: 300,
    quantity: 0
  },
  {
    name: 'ノート',
    price: 400,
    quantity: 0
  },
  {
    name: '消しゴム',
    price: 500,
    quantity: 0
  }
];

const vm = new Vue({
  data: {
    items,
    minimumPrice: 2000
  },
  computed: {
    totalPrice() {
      return this.items.reduce((total, item)=>{
        return total + item.price * item.quantity;
      }, 0);
    },
    totalPriceWithTax() {
      return Math.floor(this.totalPrice * 1.1);
    },
    canBuy() {
      return this.totalPrice >= this.minimumPrice;
    },
    errorMessageStyle() {
      return {
        color: this.canBuy ? '' : 'red',
        border: this.canBuy ? '' : 'solid 1px red'
      }
    }
  },
  filters: {
    numberWithDelimiter(value) {
      if (!value) {
        return 0;
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
  }
}).$mount('#app');

window.vm = vm;
