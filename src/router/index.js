import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import navigator from '@/components/navigator'
import adminPage from '@/components/adminPage'
import addAdminPage from '@/components/addAdminPage'
import readerPage from '@/components/readerPage'
import addBookPage from '@/components/addBookPage'
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
      children:[
        {
          path:'/adminPage',
          name:'adminPage',
          component:adminPage,
          props:true,
          meta:{
            requireAuth:true
          }
        },
        {
          path:'/addAdminPage',
          name:'addAdminPage',
          component:addAdminPage,
          props:true,
          meta:{
            requireAuth:true
          }
        },
          {
            path:'/readerPage',
            name:'readerPage',
            component:readerPage,
            props:true,
            meta:{
              requireAuth:true
            }
        },
          {
            path:'/addBookPage',
            name:'addBookPage',
            component:addBookPage,
            props:true,
            meta:{
              requireAuth:true
            }
        }
        
      ]
    }
  ]
})
