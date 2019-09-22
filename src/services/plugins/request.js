import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('access_token');
    // let token = 'n4Xm1qU9IjxKtfD3SxLo1pb67rqKxiIk_1567149739';
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config
}, error => {
    return Promise.reject(error)
})

let request = (option) => {
    let newoption = Object.assign({
        url: '/',
        method: 'get',
        params: {}
    }, option);
    if (newoption.method === 'get') {
        newoption.url = newoption.url + '?' + qs.stringify(newoption.params);
        //newoption.url = newoption.url + qs.stringify(newoption.params);
    }
    return new Promise((resolve, reject) => {
        axios[newoption.method](newoption.url, newoption.params).then(res => {
            resolve(res.data)
        }).catch((error) => {
            console.log(error.response.data);
            if (error.response.status == 401) {
                localStorage.removeItem('access_token');
                localStorage.removeItem('nickname');
            }
            reject(error.response.data);
        })
    })
}
export default request