import VueRouter from 'vue-router';
import HelloComponent from './components/HelloComponent';

require('./bootstrap');
window.Vue = require('vue').default;
Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('hello-component', HelloComponent);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const app = new Vue({
    el: '#app'
});

window.app = app;
