import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const app = new Vue({
  el: '#app',
  data: {
    show: true,
    anime: false
  },
  methods: {
    beforeEnter(el) {
      console.log('before-enter');
    },
    enter(el) {
      console.log('enter');
      this.anime = true;
    },
    afterEnter(el) {
      console.log('after-enter');
      this.anime = false;
    },
    enterCancelled(el) {
      console.log('enter-cancelled');
      this.anime = false;
    },
    beforeLeave(el) {
      console.log('before-leave');
    },
    leave(el) {
      console.log('leave');
      this.anime = true;
    },
    afterLeave(el) {
      console.log('after-leave');
      this.anime = false;
    },
    leaveCancelled(el) {
      console.log('leave-cancelled');
      this.anime = false;
    },
    cancel() {
      console.log('cancel');
      this.show = false;
    }
  }
});

window.app = app;