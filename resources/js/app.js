require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import TaskListComponent from './components/TaskListComponent';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/tasks',
      name: 'task.list',
      component: TaskListComponent
    }
  ]
});

const vm = new Vue({
  router
}).$mount('#app');

window.vm = vm;