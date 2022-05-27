/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

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

const items = [
    {
        name: '鉛筆',
        price: 300,
        quantity: 0
    },
    {
        name: 'ノート',
        price: 400,
        quantity: 0
    },
    {
        name: '消しゴム',
        price: 500,
        quantity: 0
    },
];

const vm = new Vue({
    el: '#app',
    data: function() {
        return {
            count: 0,
            timerId: null
        }
    },
    created: function() {
        console.log('created');
        const that = this;

        // データを参照できる
        console.log(this.count);

        // DOM 要素と紐付いていないので undefined
        console.log(this.$el);

        // タイマー処理を開始する
        this.timerId = setInterval(() => {
            that.count++;
        }, 1000);
    },
    mounted: function() {
        console.log('mounted');

        // DOM 要素が紐付いている
        console.log(this.$el);
    },
    beforeDestroy: function() {
        console.log('beforeDestroy');

        // タイマーの後始末を行う
        clearInterval(this.timerId);
    }
});

window.vm = vm;