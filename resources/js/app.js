require('./bootstrap');
window.Vue = require('vue').default;
import Vuex from 'vuex'
import VueRouter from 'vue-router';

Vue.use(Vuex);
Vue.use(VueRouter);

import './vuexModules';
import './tasks';

new Vue({
    // el: '#app',
    // コンポーネントからストアを利用できるようにする
    // store,
    // render: h => h(App)  
});
