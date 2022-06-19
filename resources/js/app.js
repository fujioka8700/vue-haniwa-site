require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/top',
      component: {
        template: '<div>TOPページです。</div>'
      }
    }
  ]
});

const vm = new Vue({
  router
}).$mount('#app');

window.vm = vm;