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
    // グローバルな空間にステート、ゲッター、ミューテーションを定義
    state: {
        count: 1
    },
    getters: {
        // state.countを2倍したものを返す
        double(state) {
            return state.count + state.count;
        }
    },
    mutations: {
        update(state, payload) {
            state.count = payload;
        }
    },
    modules: {
        // 名前空間が区切られたexampleモジュールを定義
        example: {
            namespaced: true,

            getters: {
                // 第3引数、第4引数にグローバルな名前空間にアクセスするための
                // rootState、rootGettersが渡される
                triple: (state, getters, rootState, rootGetters) => {
                    return rootState.count + rootGetters.double
                }
            },

            actions: {
                multiByFive(ctx) {
                    // グローバルなdoubleゲッターとexampleモジュールのtripleゲッターを利用する
                    const payload = ctx.rootGetters.double + ctx.getters.triple;
                    
                    // グローバルな名前空間のupdateを呼び出したいので、root:trueオプションを付与する
                    ctx.commit('update', payload, {root: true});
                }
            }
        }
    }
});

console.log(store.state.count);

// exampleモジュールのmultiByFiveアクションを呼び出す
store.dispatch('example/multiByFive');

console.log(store.state.count);