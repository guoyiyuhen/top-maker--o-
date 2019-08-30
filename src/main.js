import '@babel/polyfill';
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router"


Vue.use(VueAxios,axios);

axios.interceptors.request.use(
    config => {
        //config.baseURL = '/api/api/';
        // config.baseURL = process.env.NODE_ENV === 'production' ? '' : '';
        config.baseURL = '/';
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
    }
)

Vue.config.productionTip = false;

import  './style/index.scss';
new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
