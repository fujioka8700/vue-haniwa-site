require('./bootstrap');
window.Vue = require('vue').default;
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import Fuga from './components/Fuga';

Vue.use(Vuex);
Vue.use(VueRouter);

// import './vuexModules'; // ストアのモジュール分割
// import './tasks';

const store = new Vuex.Store({
    state: {
        count: 1
    },
    mutations: {
        increment(state, value) {
            state.count += value;
        }
    }
});

new Vue({
    el: '#app',
    store, // ストアをコンポーネントに渡す
    components: {
        Fuga
    }
});
