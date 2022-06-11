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

    // mutationsオプションでミューテーションを定義する
    mutations: {
        // ハンドラー関数のincrementミューテーションを定義
        // ハンドラー内では第一引数に渡されたステートを更新する
        increment(state) {
            state.count += 1;
        }
    }
});

console.log(store.state.count);

// store.commitでミューテーションを呼び出す
store.commit('increment');

console.log(store.state.count);