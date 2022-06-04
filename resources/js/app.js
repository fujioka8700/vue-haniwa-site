import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

Vue.directive('fallback-image', {
    inserted(el) {
        el.addEventListener('error', function() {
            // 画像のロードに失敗したら実行される処理
            el.src = "https://dummyimage.com/400x400/000/ffffff.png&text=no+image";
        });
    }
});

const app = new Vue({
    el: '#app'
});

window.app = app;