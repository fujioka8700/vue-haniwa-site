require('./bootstrap');
import Vue from 'vue';

const headerTemplate = Vue.extend({
  template: `
  <div>
    <slot name="header">header</slot>
  </div>
  `
});

const fruitsItems = Vue.extend({
  props: {
    fruitItem: {
      type: Object
    }
  },
  template: '<li>{{ fruitItem.name }}</li>'
});

const pageFooter = Vue.extend({
  template: '<div><slot name="footer">footer</slot></div>'
});

const vm = new Vue({
  data: {
    fruitsItems: [
      {name: 'すいか'},
      {name: 'マンゴー'},
      {name: 'オレンジ'}
    ]
  },
  components: {
    'page-header': headerTemplate,
    fruitsItems,
    pageFooter
  }
}).$mount('#app');

window.vm = vm;
