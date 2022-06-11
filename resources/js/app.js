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

// 誤った例
const store = new Vuex.Store({
    state: {
        count: 10
    },

    mutations: {
        // 以下のように非同期処理を含めてはいけない！
        incrementAsync(state) {
            setTimeout(() => {
                state.count += 1;
            }, 1000);
        },

        increment(state) {
            state.count += 1;
        }
    }
});

console.log(store.state.count);

store.commit('increment', { amount: 5 });

console.log(store.state.count);

store.commit('incrementAsync');

console.log(store.state.count);