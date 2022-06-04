import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

Vue.directive('fallback-image', {
    bind: function(el, binding) {
        console.log('bind', binding);
        const once = binding.modifiers.once;
        el.addEventListener('error', function onError() {
            el.src = binding.value;
            if (once) {
                el.removeEventListener('error', onError);
            }
        });
    },
    update: function(el, binding) {
        console.log('update', binding);
        if (binding.oldValue !== binding.value && binding.oldValue === el.src) {
            el.src = binding.value;
        }
    }
});

const app = new Vue({
    el: '#app',
    data: {
        altText: 'logo',
        noImageURL: 'https://dummyimage.com/400x400/000/ffffff.png&text=no+image'
    }
});

window.app = app;