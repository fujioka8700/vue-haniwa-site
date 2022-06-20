<!-- ./pages/Index.vue -->
<template>
  <div>
    <ul>
      <li v-for="l in list" v-bind:key="l.id">
        <router-link :to="{ name: 'detail', params: { id: l.id }}">{{ l.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['list'])
  }
}
</script>