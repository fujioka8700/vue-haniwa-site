<template>
    <div>
        <p>{{ value }}</p>
        <button v-on:click="increment(1)">+1</button>   
    </div>
</template>

<script>
// mapState と mapMutations をインポート
import { mapState, mapMutations } from 'vuex';

export default {
    // $store.state.count を this.value に結び付ける
    computed: mapState({
        value: 'count'
    }),
    
    // $store.commit('increment', value)をthis.increment(value)で呼び出せるようにする
    methods: mapMutations([
        'increment'
    ])
}
</script>