require('./bootstrap');
window.Vue = require('vue').default;
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';
import App from './components/App';

Vue.use(Vuex);
Vue.use(VueRouter);

const router = new VueRouter({
    // mode: 'history',
    // base: __dirname,
    routes: [
      {
        path: '/',
        name: 'index',
        component: require('./components/pages/Index.vue').default
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: require('./components/pages/Detail.vue').default
      }
    ]
});

const store = new Vuex.Store({
    state: {
        list: [
            { id: 1, title: 'title-1' },
            { id: 2, title: 'title-2' },
            { id: 3, title: 'title-3' },
            { id: 4, title: 'title-4' },
            { id: 5, title: 'title-5' }
          ]
    },
    actions: {
        done ({ state, commit }) {
            // state.routeでアクセス可能
            console.log(state.route)
            console.log('actions:', state.route.params.id)
            commit('done')
        }
    },
    mutations: {
        done (state) {
            // state.routeでアクセス可能
            console.log('mutations:', state.route.params.id)
        }
    },
    getters: {
        list: state => state.list,
        detail: state => {
          // state.routeでアクセス可能
          return state.list.find(l => l.id.toString() === state.route.params.id.toString()) || {}
        }
    }
});

// ルーターとストアを同期する
sync(store, router);

// store.state.route以下にルーティングのデータが入る
console.log(store.state.route)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
