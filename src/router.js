import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      name: 'access',
      component:() => import('./views/AccessPage.vue'),
    },
    {
      path:'/user',
      name:'user ',
      component:() => import('./views/UserPage.vue'),
    },
    {
      path:'/access/:id',
      name:'access ',
      component:() => import('./views/AccessPage.vue'),
    },
    {
      path:'/about',
      name:'about ',
      component:() => import('./views/AboutPage.vue'),
    },
    {
      path:'/securityDetail/:t/:id/:eid/:type',
      name:'securityDetail ',
      component:() => import('./views/SecurityDetailPage.vue'),
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/LoginPage.vue'),
    },
    {
      path: '/security',
      name: 'security',
      component: () => import('./views/SecurityPage.vue'),
    }
  ]
})
