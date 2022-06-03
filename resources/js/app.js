import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const MyButton = {
    template: `
    <button>
        <!-- 親コンポーネントで渡されたコンテンツに差し替えられる -->
        <slot>OK</slot>
    </button>
    `
};

const app = new Vue({
    el: '#app',
    components: {
        MyButton: MyButton
    }
});

window.app = app;