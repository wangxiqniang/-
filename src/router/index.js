import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import dashboard from '@/components/login/dashboard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{
        path:'/HelloWorld'
      }
    },
    {
      path: '/HelloWorld',
      component:HelloWorld
    },
    {
      path: '/login',
      component:login
    },
    {
      path: '/dashboard',
      component:dashboard
    }

  ]
})
