import 'default-passive-events'
import "core-js/stable"
import "regenerator-runtime/runtime"
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from "./router"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(ElementUI);
Vue.use(VueAxios,axios);

axios.interceptors.request.use(
    config => {
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
