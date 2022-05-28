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

Vue.component('fruits-items-name', {
    props: {
        fruitsItem: { // テンプレートの中ではケバブケース
            type: Object, // オブジェクトかどうか
            required: true // このコンポーネントには必須なのでtrue
        }
    },
    template: '<li>{{ fruitsItem.name }}</li>',
});

new Vue({
    el: '#fruits-component',
    data: { // 親では配列だがv-forでObjectとして渡している
        fruitsItems: [
            { name: '梨' },
            { name: 'イチゴ' }
        ]
    }
});
