import { create } from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

Vue.mixin({
    data: function() {
        return {
            loggedInUser: null
        }
    },
    created: function() {
        const auth = this.$options.auth;
        this.loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));
        if (auth && !this.loggedInUser) {
            window.alert('このページはログインが必要です');
        }
    }
});

const LoginRequiredPage = {
    auth: true,
    template: `
    <div>
        <p v-if="!loggedInUser">
            このページはログインが必要です
        </p>
        <p v-else>
            {{ loggedInUser.name }}さんでログインしています
        </p>
    </div>
    `
}

const app = new Vue({
    el: '#app',
    components: {
        LoginRequiredPage
    }
});

window.app = app;
