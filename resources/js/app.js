import { takeWhile } from 'lodash';
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

const getUsers = function(callback) {
    setTimeout(() => {
        callback(null, [
            {
                id: 1,
                name: 'Takuya Tejima'
            },
            {
                id: 2,
                name: 'Yohei Noda'
            }
        ])
    }, 1000);   
}

const UserList = {
    template: '#user-list',
    data: function() {
        return {
            loading: false,
            users: function() { return [] }, // 初期値の空配列
            error: null
        }
    },
    // 初期時にデータを取得する
    created: function() {
        this.fetchData();
    },
    // $routeの変更をwatchすることでルーティングが変更されたときに再度データを取得
    watch: {
        '$route': 'fetchData'
    },
    methods: {
        fetchData: function() {
            this.loading = true;
            getUsers(function(err, users) {
                this.loading = false;
                if (err) {
                    this.error = err.toString();
                } else {
                    this.users = users;
                }
            }.bind(this));
        }   
    }
};

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
            component: UserList
        }
    ]
});

const app = new Vue({
    router: router
}).$mount('#app');
