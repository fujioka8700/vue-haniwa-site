require('./bootstrap');
import Vue from 'vue';

const counterButton = Vue.extend({
  data: function() {
    return {
      counter: 0
    }
  },
  template: `
  <span>
    {{ counter }}個
    <button @click="addToCart">追加</button>
  </span>
  `,
  methods: {
    addToCart: function() {
      this.counter++;
      this.$emit('increment');
    }
  }
});

const vm = new Vue({
  data: {
    total: 0,
    fruitsItems: [
      {name: '梨'},
      {name: 'いちご'},
      {name: 'メロン'},
      {name: 'バナナ'},
    ]
  },
  components: {
    counterButton
  },
  methods: {
    incrementCartStatus: function() {
      this.total++;
    }
  }
}).$mount('#app');

window.vm = vm;
