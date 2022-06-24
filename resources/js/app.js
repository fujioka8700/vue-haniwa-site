require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import TaskListComponent from './components/TaskListComponent';
import TaskShowComponent from './components/TaskShowComponent';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/tasks',
      name: 'task.list',
      component: TaskListComponent
    },
    {
      path: '/tasks/:taskId',
      name: 'task.show',
      component: TaskShowComponent,
      props: true
    }
  ]
});

const vm = new Vue({
  router
}).$mount('#app');

window.vm = vm;