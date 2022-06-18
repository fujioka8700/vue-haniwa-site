require('./bootstrap');
import Vue from 'vue';

const userLogin = Vue.extend({
  data: function() {
    return {
      userId: '',
      password: ''
    }
  },
  methods: {
    login: function() {
      this.$emit('login', this.userId, this.password);
    }
  },
  template: `
  <div>
    <div>
      <input type="text" placeholder="ログインID" v-model="userId">
    </div>
    <div>
      <input type="password" placeholder="パスワード" v-model="password">
    </div>
    <button @click="login">ログイン</button>
  </div>
  `
});

const vm = new Vue({
  components: {
    userLogin
  },
  methods: {
    login: function(userId, password) {
      console.log('ログインID:' + userId + ' パスワード:' + password);
    }
  }
}).$mount('#app');

window.vm = vm;
