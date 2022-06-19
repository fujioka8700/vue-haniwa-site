require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/top',
      name: 'top',
      component: {
        template: '<div>トップページです。</div>'
      }
    },
    {
      path: '/users',
      component: {
        template: '<div>ユーザー一覧ページです。</div>'
      },
      beforeEnter(to, from, next) {
        // users?redirect=trueの時、'/top'へリダイレクトする
        if(to.query.redirect === 'true') {
          next('/top');
        } else {
          next();
        }
      }
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: {
        template: '<div>ユーザーのIDは {{ $route.params.userId }} です。</div>'
      }
    }
  ]
});

const vm = new Vue({
  router,
  methods: {
    userBtn() {
      router.push({name: 'user', params: { userId: 456 }});
    }
  }
}).$mount('#app');

window.vm = vm;