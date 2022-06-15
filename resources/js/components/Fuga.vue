<template>
    <div>
        <p>{{ double }}</p>
        <button v-on:click="increment(1)">+1</button>   
    </div>
</template>

<script>
// mapState と mapMutations をインポート
import { mapState, mapMutations } from 'vuex';

export default {
    // $store.state.count を this.count に結び付ける
    computed: {
        // 通常の算出プロパティの定義
        double() {
            return this.count * 2;
        },
        
        // オブジェクトスプレッド演算子を使って、通常の算出プロパティの定義と
        // mapStateの戻り値を結合
        ...mapState([
            'count'
        ])
    },
    
    // $store.commit('increment', value)をthis.increment(value)で呼び出せるようにする
    methods: mapMutations([
        'increment'
    ])
}
</script>