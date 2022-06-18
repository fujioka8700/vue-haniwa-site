require('./bootstrap');
import Vue from 'vue';

Vue.component('simple-counter', {
  template: `
  <div>
    <h1>フルーツ一覧</h1>
    <ul>
      <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
  `,
  data: function() {
    return {
      fruits: ['りんご', 'みかん']
    }
  }
});

const vm = new Vue({
  
}).$mount('#app');

window.vm = vm;
