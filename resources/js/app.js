require('./bootstrap');
window.Vue = require('vue').default;
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import Products from './procucts';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [

    ]
});

const store = new Vuex.Store({
    modules: {
        Products
    }
});

sync(store, router);

console.log(store.state.route)