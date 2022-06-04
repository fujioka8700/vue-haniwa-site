import Vue from 'vue';
import VueRouter from 'vue-router';

require('./bootstrap');

window.Vue = require('vue').default;

Vue.use(VueRouter);
Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// Vueの確認
console.assert(typeof Vue !== "undefined");

const TodoList = {
    props: {
        todos: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
        <template v-for="todo in todos">
            <!-- v-bindディレクティブでtodoを親コンポーネントに渡す -->
            <slot :todo="todo">
                <li :key="todo.id"></li>
            </slot>
        </template>
    </ul>
    `
};

const app = new Vue({
    el: '#app',
    data: {
        todos: [
            { id: 1, text: 'C++', isCompleted: true },
            { id: 2, text: 'JavaScript', isCompleted: false },
            { id: 3, text: 'Java', isCompleted: true },
            { id: 4, text: 'Perl', isCompleted: false }
        ]
    },
    components: {
        TodoList: TodoList
    }
});

window.app = app;