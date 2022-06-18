require('./bootstrap');
import Vue from 'vue';

const FruitsItemName = {
  template: '<li>{{ fruitsItem.name }}</li>',
  props: {
    fruitsItem: {
      type: Object,
      require: true
    }
  }
};

const vm = new Vue({
  data: {
    fruitsItems: [
      {name: '梨'},
      {name: 'いちご'}
    ]
  },
  components: {
    FruitsItemName
  }
}).$mount('#app');

window.vm = vm;
