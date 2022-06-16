<template>
    <div>
        <p>{{ count }}</p>
        <button v-on:click="increment(1)">+1</button>
    </div>
</template>

<script>
// mapState と mapMutations をインポート
import { mapState, mapMutations } from 'vuex';

export default {
    // $store.state.counter.count を this.count に結び付ける
    computed: {
        ...mapState('counter', [
            'count'
        ]),
    },
    
    // $store.commit('increment', value)をthis.increment(value)で呼び出せるようにする
    methods: mapMutations('counter', [
        'increment'
    ])
}
</script>