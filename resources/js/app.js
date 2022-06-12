require('./bootstrap');
window.Vue = require('vue').default;
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import App from './components/App';
import store from './store';

Vue.use(Vuex);
Vue.use(VueRouter);

new Vue({
    el: '#app',
    // コンポーネントからストアを利用できるようにする
    store,
    render: h => h(App)  
});