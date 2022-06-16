window.Vue = require('vue').default;
import Vuex from 'vuex'
Vue.use(Vuex);

// ストアのモジュール例
// 例示用に非同期処理を行う関数
// 実際のアプリではサーバーからデータを取得する
function getCountNum(type) {
    return new Promise(resolve => {
        setTimeout(() => {
            let amount;
            switch (type) {
                case 'one':
                    amount = 1;
                    break;
                case 'two':
                    amount = 2;
                    break;
                case 'ten':
                    amount = 10;
                    break;
                default:
                    amount = 0;
                    break;
            }
            resolve({amount});
        }, 1000);
    });
}

// カウンターモジュールを定義
const counter = {
    // ステート
    state: {
        count: 10
    },

    // ゲッター
    getters: {
        squared: state => state.count * state.count
    },

    // ミューテーション
    mutations: {
        increment(state, amount) {
            state.count += amount;
        }
    },

    // アクション
    actions: {
        incrementAsync({commit}, payload) {
            return getCountNum(payload.type).then(data => {
                commit('increment', data.amount)
            });
        }
    },

    // モジュールは入れ子にできる？？
    modules: {
        childModule: {
            // 入れ子のモジュール？？
        }
    }
}

const store2 = new Vuex.Store({
    // counterモジュールをストアに登録
    modules: {
        counter
    }
});

// ステートはモジュール名のしたに登録される
// counterモジュールであればstore2.state.counter
console.log(store2.state.counter.count);

// ゲッター、ミューテーション、アクションは
// モジュールを使用しない時と同様に登録される
console.log(store2.getters.squared);
store2.commit('increment', 5);

console.log(store2.state.counter.count);

store2.dispatch('incrementAsync', {type: 'ten'}).then(()=>{
    console.log(store2.state.counter.count);
});