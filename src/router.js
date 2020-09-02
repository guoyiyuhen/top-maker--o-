import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main.vue';
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
                title: '精选'
            },
            children: [
                { 
                    path: '/home',
                    name: 'home',
                    component: () => import('@/pages/home.vue'),
                    meta: {
                        title: '精选'
                    }
                },
                { 
                    path: '/works',
                    name: 'works',
                    component: () => import('@/pages/works.vue'),
                    meta: {
                        title: '作品'
                    }
                },
                {
                    path: '/designer',
                    name: 'designer',
                    component: () => import('@/pages/designer.vue'),
                    meta: {
                        title: '设计师'
                    }
                },
                {
                    path: '/detail/:id',
                    name: 'detail',
                    component: () => import('@/pages/detail.vue'),
                    meta: {
                        title: '作品详情'
                    }
                },
                {
                    path: '/personal/:id',
                    name: 'personal',
                    component: () => import('@/pages/personal.vue'),
                    meta: {
                        title: '设计师'
                    },
                    children: [
                        { 
                            path: '/representative/:id',
                            name: 'representative',
                            component: () => import('@/pages/representative.vue'),
                            meta: {
                                title: '设计师'
                            }
                        },
                        { 
                            path: '/thumbs/:id',
                            name: 'thumbs',
                            component: () => import('@/pages/thumbs.vue'),
                            meta: {
                                title: '设计师'
                            }
                        }
                    ]
                }
            ]
        },
    ]
})

export default router