import Vue from 'vue'
import Router from 'vue-router'
import Main from './pages/main.vue';
import Mmain from './pages/m/m-main.vue';
Vue.use(Router);


const router = new Router({
    mode:'history',
    base: process.env.NODE_ENV,
    routes: [
        {
            path: '/',
            name: 'index',
            component: Main,
            redirect: '/home',
            meta: {
                title: '首页'
            },
            children: [
                { 
                    path: '/home',
                    name: 'home',
                    component: () => import('./pages/home.vue'),
                    meta: {
                        title: '首页'
                    }
                }
            ]
        },
    ]
})

router.beforeEach((to, from, next) => {
    // console.log(to);
    // next({
    //     name: 'home' // 跳转到home页
    // })
    next()
})
export default router