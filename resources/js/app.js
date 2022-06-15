require('./bootstrap');
window.Vue = require('vue').default;
import Vuex from 'vuex'
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

// import './vuexModules'; // ストアのモジュール分割
import './tasks';

new Vue({
    // el: '#app',
});

const store = new Vuex.Store({
    modules: {
        example: {
            // このフラグの有無によってどのように変わるのかを見る
            namespaced: true,

            state: {
                value: 'Example'
            },

            getters: {
                upper: state => state.value.toUpperCase()
            },

            mutations: {
                update(state) {
                    state.value = 'Updated';
                }
            },

            actions: {
                update({commit}) {
                    commit('update');
                }
            }
        }
    }
});

console.log(store.state.example.value);

// console.log(store.getters.upper);
console.log(store.getters['example/upper']);

// store.commit('update');
store.commit('example/update');

console.log(store.state.example.value);

// store.dispatch('update');
store.dispatch('example/update');

console.log(store.state.example.value);