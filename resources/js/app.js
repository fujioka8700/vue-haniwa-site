import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

Vue.directive('focus', {
    // `el`に`input`要素が渡されるので、それにフォーカスを当てる
    inserted(el) {
      el.focus();
    }
  });

const app = new Vue({
    el: '#input'
});

window.app = app;