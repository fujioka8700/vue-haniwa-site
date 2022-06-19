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
      this.userId = '';
      this.password = '';
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
    login: function(id, password) {
      alert('ログインID:' + id + ' パスワード:' + password);
    }
  }
}).$mount('#app');

window.vm = vm;

// 4.Vue Router から