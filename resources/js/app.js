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
        increment(state) {
            state.count += 1;
        }
    },

    // actionsオプションでアクションを定義する
    actions: {
        // ステートではなくコンテキストと呼ばれる特別なオブジェクトが渡される
        incrementAction(ctx) {
            // incrementミューテーションを実行する
            ctx.commit('increment');
        }
    }
});

console.log(store.state.count);

// store.dispatchでアクションを呼び出す
// incrementActionアクションを呼び出す
store.dispatch('incrementAction');

console.log(store.state.count);