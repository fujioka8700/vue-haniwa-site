import { create } from 'lodash';
import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

// ミックスインの定義
const Sharable = {
    data: function() {
        return {
            _isProcessing: false
        }
    },
    methods: {
        share: function() {
            if (this._isProcessing) {
                return
            }
            if (!window.confirm('シェアしますか？')) {
                return
            }
            this._isProcessing = true;
            setTimeout(() => {
                window.alert('シェアしました。');
            }, 300);
        }
    }
};

const IconShareButton = {
    mixins: [Sharable],
    template: `<button @click="share"><i class="fas fa-share-square"></i></button>`
};

const TextShareButton = {
    mixins: [Sharable],
    template: `<button @click="share">{{ buttonLabel }}</i></button>`,
    data: function() {
        return {
            buttonLabel: 'シェアする'
        }
    }
};

const app = new Vue({
    el: '#app',
    components: {
        IconShareButton: IconShareButton,
        TextShareButton
    }
});

window.app = app;
