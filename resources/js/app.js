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
    created: function() {
        console.log('Sharableミックスインのフックが呼ばれました')
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
    created: function() {
        console.log('IconShareButtonのフックが呼ばれました')
    },
    template: `<button @click="share"><i class="fas fa-share-square"></i></button>`
};

const TextShareButton = {
    mixins: [Sharable],
    created: function() {
        console.log('TextShareButtonのフックが呼ばれました')
    },
    template: `<button @click="share">{{ buttonLabel }}</i></button>`,
    data: function() {
        return {
            buttonLabel: 'シェアする'
        }
    },
    methods: {
        share() {
            window.alert('コンポーネントからシェアしました');
        }
    }
};

const app = new Vue({
    el: '#app',
    components: {
        IconShareButton,
        TextShareButton
    }
});

window.app = app;
