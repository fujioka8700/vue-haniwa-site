require('./bootstrap');
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HeaderComponent from './components/HeaderComponent';
import TaskListComponent from './components/TaskListComponent';
import TaskShowComponent from './components/TaskShowComponent';
import TaskEditComponent from './components/TaskEditComponent';
import TaskCreateComponent from './components/TaskCreateComponent';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/tasks',
      name: 'task.list',
      component: TaskListComponent
    },
    {
      path: '/tasks/create',
      name: 'task.create',
      component: TaskCreateComponent
    },
    {
      path: '/tasks/:taskId',
      name: 'task.show',
      component: TaskShowComponent,
      props: true
    },
    {
      path: '/tasks/:taskId/edit',
      name: 'task.edit',
      component: TaskEditComponent,
      props: true
    }
  ]
});

const vm = new Vue({
  router,
  components: {
    HeaderComponent
  }
}).$mount('#app');

window.vm = vm;