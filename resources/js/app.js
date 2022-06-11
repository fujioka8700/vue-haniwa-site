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

    // gettersオプションでゲッターを定義する
    getters: {
        // ステートから別の値を計算する
        squared: (state) => state.count * state.count,

        // 他のゲッターの値を使うことも可能
        cubed: (state, getters) => state.count * getters.squared
    }
});

// store.gettersでゲッターを参照する
console.log(store.getters.cubed);
