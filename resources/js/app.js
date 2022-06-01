import Vue from 'vue';
import VueRouter from 'vue-router';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// add this line

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vueの確認
console.assert(typeof Vue !== "undefined");

const UserList = {
    template: '#user-list',
    data: function() {
        return {
            users: function() { return [] },
            error: null
        }
    },
    // 「ページ遷移が行われて、コンポーネントが初期化される前」に呼び出される。
    beforeRouteEnter (to, from, next) {
        getUsers(function(err, users) {
            if (err) {
                this.error = err.toString();
            } else {
                // nextに渡すcallbackでコンポーネント自身にアクセス可
                next(function(vm) {
                    vm.users = users;
                });
            }
        });
    }
}

const router = new VueRouter({
    routes: [
        {
            path: '/top',
            component: {
                template: '<div>トップページです。</div>'
            }
        },
        {
            path: '/users',
            component: {
                template: '<div>ユーザー一覧ページです</div>'
            },
            beforeEnter: function(to, from, next) {
                // /users?redirect=true でアクセスされた時だけ、topにリダイレクトするフック関数を追加
                if (to.query.redirect === 'true') {
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
                template: '<div>ユーザーIDは {{ $route.params.userId }} です。</div>'
            }
        }
    ]
});

const app = new Vue({
    router: router,
    components: {
        'user-list': UserList 
    },
    methods: {
        userBtn: function() {
            router.push({ name: 'user', params: { userId: 456 }})
        }
    }
}).$mount('#app');

