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
                },
                { 
                    path: '/about',
                    name: 'about',
                    redirect: '/aboutchild',
                    component: () => import('./pages/about.vue'),
                    meta: {
                        title: '关于我们'
                    },
                    children: [
                        { 
                            path: '/aboutchild',
                            name: 'aboutchild',
                            component: () => import('./pages/about/aboutchild.vue'),
                            meta: {
                                title: '关于我们'
                            }
                        },
                        { 
                            path: '/culture',
                            name: 'culture',
                            component: () => import('./pages/about/culture.vue'),
                            meta: {
                                title: '企业文化'
                            }
                        },
                        { 
                            path: '/glory',
                            name: 'glory',
                            component: () => import('./pages/about/glory.vue'),
                            meta: {
                                title: '企业荣誉'
                            }
                        },
                        { 
                            path: '/partner',
                            name: 'partner',
                            component: () => import('./pages/about/partner.vue'),
                            meta: {
                                title: '合作伙伴'
                            }
                        },
                        { 
                            path: '/qualifications',
                            name: 'qualifications',
                            component: () => import('./pages/about/qualifications.vue'),
                            meta: {
                                title: '公司资质'
                            }
                        },
                        { 
                            path: '/recruit',
                            name: 'recruit',
                            component: () => import('./pages/about/recruit.vue'),
                            meta: {
                                title: '招聘信息'
                            }
                        }
                    ]
                },
                { 
                    path: '/product',
                    name: 'product',
                    component: () => import('./pages/product.vue'),
                    meta: {
                        title: '仿真产品'
                    }
                },
                { 
                    path: '/solution',
                    name: 'solution',
                    component: () => import('./pages/solution.vue'),
                    meta: {
                        title: '解决方案'
                    }
                },
                { 
                    path: '/simulation',
                    name: 'simulation',
                    component: () => import('./pages/simulation.vue'),
                    meta: {
                        title: '仿真软件'
                    }
                },
                {
                    path: '/download',
                    name: 'download',
                    component: () => import('./pages/download.vue'),
                    meta: {
                        title: '下载'
                    }
                },
                {
                    path: '/active',
                    name: 'active',
                    component: () => import('./pages/active.vue'),
                    meta: {
                        title: '公司动态'
                    }
                },
                {
                    path: '/solution-active',
                    name: 'solutionActive',
                    component: () => import('./pages/solution-active.vue'),
                    meta: {
                        title: '解决方案'
                    }
                }
            ]
        },
        {
            path: '/m',
            name: 'm',
            component: Mmain,
            redirect: '/mhome',
            meta: {
                title: '首页'
            },
            children: [
                { 
                    path: '/mhome',
                    name: 'mhome',
                    component: () => import('./pages/m/m-home.vue'),
                    meta: {
                        title: '首页'
                    }
                },
                { 
                    path: '/mdownload',
                    name: 'mdownload',
                    component: () => import('./pages/m/m-download.vue'),
                    meta: {
                        title: '下载'
                    }
                },
                {
                    path: '/mproduct',
                    name: 'mproduct',
                    component: () => import('./pages/m/m-product.vue'),
                    meta: {
                        title: '仿真产品'
                    }
                },
                {
                    path: '/mpdetail',
                    name: 'mpdetail',
                    component: () => import('./pages/m/m-product-detail.vue'),
                    meta: {
                        title: '仿真产品'
                    }
                },
                {
                    path: '/msimulation',
                    name: 'msimulation',
                    component: () => import('./pages/m/m-simulation.vue'),
                    meta: {
                        title: '仿真软件'
                    }
                },
                {
                    path: '/msdetail',
                    name: 'msdetail',
                    component: () => import('./pages/m/m-simulation-detail.vue'),
                    meta: {
                        title: '仿真软件'
                    }
                },
                {
                    path: '/msolution',
                    name: 'msolution',
                    component: () => import('./pages/m/m-solution.vue'),
                    meta: {
                        title: '解决方案'
                    }
                },
                {
                    path: '/mssdetail',
                    name: 'mssdetail',
                    component: () => import('./pages/m/m-solution-detail.vue'),
                    meta: {
                        title: '解决方案'
                    }
                },
                {
                    path: '/mactive',
                    name: 'mactive',
                    component: () => import('./pages/m/m-active.vue'),
                    meta: {
                        title: '解决方案'
                    }
                },
                {
                    path: '/mabout',
                    name: 'mabout',
                    component: () => import('./pages/m/m-about.vue'),
                    meta: {
                        title: '关于我们'
                    },
                    children: [
                        { 
                            path: '/maboutchild',
                            name: 'maboutchild',
                            component: () => import('./pages/m/mabout/maboutchild.vue'),
                            meta: {
                                title: '关于我们'
                            }
                        },
                        { 
                            path: '/mculture',
                            name: 'mculture',
                            component: () => import('./pages/m/mabout/mculture.vue'),
                            meta: {
                                title: '企业文化'
                            }
                        },
                        { 
                            path: '/mglory',
                            name: 'mglory',
                            component: () => import('./pages/m/mabout/mglory.vue'),
                            meta: {
                                title: '企业荣誉'
                            }
                        },
                        { 
                            path: '/mpartner',
                            name: 'mpartner',
                            component: () => import('./pages/m/mabout/mpartner.vue'),
                            meta: {
                                title: '合作伙伴'
                            }
                        },
                        { 
                            path: '/mqualifications',
                            name: 'mqualifications',
                            component: () => import('./pages/m/mabout/mqualifications.vue'),
                            meta: {
                                title: '公司资质'
                            }
                        },
                        { 
                            path: '/mrecruit',
                            name: 'mrecruit',
                            component: () => import('./pages/m/mabout/mrecruit.vue'),
                            meta: {
                                title: '招聘信息'
                            }
                        }
                    ]
                }
            ]
        }
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