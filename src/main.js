import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import Vue from 'vue'

import App from './App.vue'
import router from './router'
import filters from './filter'
import store from './store'
import axios from 'axios'
import Vuelidate from 'vuelidate'
import eventBus from './event-bus'
import realTimeClient from '@/real-time-client'
import VueBreadcrumbs from 'vue-2-breadcrumbs';
import VueQuillEditor from 'vue-quill-editor'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(preview)

//  方法
import './utils/utils.js'
import './style/index.scss'
import './style/common.css'
import './touch.js'
import './rem.js'
//import './preventScroll.js'


axios.interceptors.request.use(
<<<<<<< HEAD
    config => {
        //config.baseURL = '/api/api/';
        // config.baseURL = process.env.NODE_ENV === 'production' ? '' : '';
        config.baseURL = 'http://api.top.tmaker.com';
        config.withCredentials = true; // 允许携带token ,这个是解决跨域产生的相关问题
        config.timeout = 6000;
        let token = localStorage.getItem('access_token');
        if (token) {
            config.headers = {
                'Authorization': "Bearer " + token,
                'Content-Type': 'application/json'
            }
        }
        return config
    },
    error => {
        return Promise.rbaseURLeject(error)
=======
  config => {
    config.baseURL = '/api/';// 链接携带后缀
    //config.baseURL = '/'
    config.withCredentials = true // 允许携带token ,这个是解决跨域产生的相关问题
    config.timeout = 6000
    let token = localStorage.getItem('access_token');
    if (token) {
      config.headers = {
        'Authorization': "Bearer " + token,
        'Content-Type': 'application/json'
      }
    }
    return config
  },
  error => {
    return Promise.rbaseURLeject(error)
  }
)

axios.interceptors.response.use(
    response => response,
    (error) => {
        return Promise.reject(error)
>>>>>>> 344817956090cbd76dd6e8eb9877013f63c6030a
    }
)

// Enable Vuelidate
Vue.use(Vuelidate)

Vue.config.productionTip = true

Vue.prototype.$bus = eventBus
Vue.prototype.$rt = realTimeClient


Vue.filter('capitalize', function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.use(VueBreadcrumbs);


Vue.use(VueQuillEditor)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
