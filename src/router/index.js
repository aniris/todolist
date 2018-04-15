import Vue from 'vue'
import Router from 'vue-router'
import AppTodo from '@/components/AppTodo'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/todo',
      name: 'AppTodo',
      component: AppTodo
    }
  ]
})
