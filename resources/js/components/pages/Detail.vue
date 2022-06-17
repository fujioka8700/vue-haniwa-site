<!-- ./pages/Detail.vue -->
<template>
  <div>
    <h2>{{ detail.title }}</h2>

    <h3>vue-routerの機能</h3>
    <h4>$store.state.listを$route.params.idで取得(createdで実行)</h4>
    <pre>{{ dataDetail | formatJSON }}</pre>

    <h3>vuex-router-syncの機能</h3>
    <h4>$store.state.route</h4>
    <pre>{{ $store.state.route | formatJSON }}</pre>

    <h4>$store.state.routeを使ってgetters.detailから取得</h4>
    <p>{{ detail | formatJSON }}</p>

    <button @click="done">Done</button>
    <router-link to="/">戻る</router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      dataDetail: []
    }
  },
  created () {
    this.dataDetail = this.$store.state.list.find(l => l.id.toString() === this.$route.params.id.toString())
  },
  computed: {
    ...mapGetters(['detail'])
  },
  methods: {
    ...mapActions(['done'])
  },
  filters: {
    formatJSON (val) {
      return JSON.stringify(val, null, '  ')
    }
  }
}
</script>