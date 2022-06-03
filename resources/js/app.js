import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const MyPage = {
    template:`
    <div>
        <slot name="header"></slot>
        <slot></slot>
        <slot name="footer"></slot>
    </div>
    `
}

const app = new Vue({
    el: '#app',
    components: {
        MyPage: MyPage
    }
});

window.app = app;