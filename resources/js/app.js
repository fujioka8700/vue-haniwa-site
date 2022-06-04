import { create } from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const MyButton = {
    props: ['href', 'tag'],
    render: function(createElement) {
        const tag = this.tag || (this.href ? 'a' : 'button'); 
        return createElement(tag, {
            attrs: {
                href: this.href || '#'
            }
        }, this.$slots.default);
    }
};

const app = new Vue({
    el: '#app',
    components: {
        MyButton: MyButton
    }
});

window.app = app;