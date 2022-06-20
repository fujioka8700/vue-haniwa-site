window.Vue = require('vue').default;
import Vuex from 'vuex'
Vue.use(Vuex);

import App from './components/App';
import store from './store';

new Vue({
    el: '#tasks',
    // コンポーネントからストアを利用できるようにする
    store,
    render: h => h(App)  
});