require('./bootstrap');
import Vue from 'vue';

const ItemDesc = {
  template: '<p>{{ itemName }}は便利です。</p>',
  props: {
    itemName: {
      type: String
    }
  }
}

const vm = new Vue({
  data: {
    myItem: 'ペン'
  },
  components: {
    ItemDesc
  }
}).$mount('#app');

window.vm = vm;
