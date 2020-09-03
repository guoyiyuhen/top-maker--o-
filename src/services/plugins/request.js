import axios from 'axios'
import qs from 'qs'
import Vue from 'vue'
axios.interceptors.request.use(config => {
    let token = localStorage.getItem('access_token');
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
    }
    let upDateUrl = 'http://api.top.tmaker.com:80' + newoption.url;
    
    return new Promise((resolve, reject) => {
        axios[newoption.method](upDateUrl, newoption.params).then(res => {
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