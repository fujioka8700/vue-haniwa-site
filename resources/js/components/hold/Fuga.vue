<template>
    <div>
        <p>{{ count }}</p>
        <button v-on:click="increment(1)">+1</button>
    </div>
</template>

<script>
// createNamespacedHelpersを使って、counter名前空間を対象としたmapStateを生成する例
import { createNamespacedHelpers, mapMutations } from 'vuex';

// counter を対象としたヘルパー関数を生成
const counterHelpers = createNamespacedHelpers('counter');

export default {
    // $store.state.counter.count を this.count に結び付ける
    computed: counterHelpers.mapState([
        'count'
    ]),
    
    // $store.commit('increment', count)をthis.increment(count)で呼び出せるようにする
    methods: counterHelpers.mapMutations([
        'increment'
    ])
}
</script>