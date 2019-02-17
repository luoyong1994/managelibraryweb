import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import navigator from '@/components/navigator'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/navigator',
      name: 'navigator',
      component: navigator,
      props:true,
      children:[]
    }
  ]
})
