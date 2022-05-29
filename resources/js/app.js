/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// add this line

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vueの確認
console.assert(typeof Vue !== "undefined");

const auth = {
    login: function(id, password) {
        console.log(`userid:${id}\npassword:${password}`);
        // window.alert(`userid:${id}\npassword:${password}`);
    }
};

Vue.component('user-login', {
    template: '#login-template',
    data: function() {
        return {
            userid: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            auth.login(this.userid, this.password);
        }
    }
});

new Vue({
    el: '#login-example',
});
