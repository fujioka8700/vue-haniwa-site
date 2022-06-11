import Vuex from 'vuex'
import VueRouter from 'vue-router';
import HelloComponent from './components/HelloComponent';
import Vue from 'vue';
// import root from './components/root';

require('./bootstrap');
window.Vue = require('vue').default;
Vue.use(Vuex);
Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('hello-component', HelloComponent);
// Vue.component('root', root);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const store = new Vuex.Store({
    state: {
        count: 10
    },

    mutations: {
        increment(state, payload) {
            state.count += payload.amount;
        }
    }
});

console.log(store.state.count);

// store.commitの第二引数にペイロードを渡す
store.commit('increment', { amount: 5 });

console.log(store.state.count);