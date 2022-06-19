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

// グローバルフック関数
router.beforeEach((to, from, next) => {
  // ユーザー一覧ページへアクセスした時、トップページへリダイレクトする。
  if (to.path === '/users') {
    next('/top');
  } else {
    next();
  }
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