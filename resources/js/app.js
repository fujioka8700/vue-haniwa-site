import { create } from 'lodash';
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
        message: 'メッセージ'
    }
});

window.app = app;
