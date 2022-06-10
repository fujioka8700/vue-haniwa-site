import VueRouter from 'vue-router';
import HelloComponent from './components/HelloComponent';
import root from './components/root';

require('./bootstrap');
window.Vue = require('vue').default;
Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('hello-component', HelloComponent);
Vue.component('root', root);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const app = new Vue({
    el: '#app'
});

window.app = app;
