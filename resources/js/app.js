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
    items
  },
  filters: {
    numberWithDelimiter(value) {
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
  }
}).$mount('#app');

window.vm = vm;

// 2.8 算出プロパティ（computed）から