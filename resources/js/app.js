import VueRouter from 'vue-router';
import HelloComponent from './components/HelloComponent';
// import root from './components/root';

require('./bootstrap');
window.Vue = require('vue').default;
Vue.use(VueRouter);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('hello-component', HelloComponent);
// Vue.component('root', root);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const sotre = {
    // 状態
    state: {
        count: 0
    },

    // 更新処理
    increment() {
        this.state.count++;
    }
};

const app = new Vue({
    el: '#app',
    // 状態をビューに渡す
    data: sotre.state,
    // ビュー
    template: `
    <div>
        <p>{{ count }}</p>
        <button v-on:click="increment">+</button>
    </div>
    `,
    methods: {
        // 更新処理を呼び出す
        increment() {
            sotre.increment();
        }
    }
});

window.app = app;
