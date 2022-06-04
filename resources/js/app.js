import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const MyButton = {
    props: ['href', 'tag', 'hoge'],
    template: `
    <a v-if="(!tag && href) || tag === 'a'" :href="href || '#'">
        <slot></slot>
    </a>
    <span v-else-if="tag === 'span'">
        <slot></slot>
    </span>
    <button v-else>
        <slot></slot>
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