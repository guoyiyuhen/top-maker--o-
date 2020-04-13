import axios from 'axios'
import qs from 'qs'
import errorParser from '@/utils/error-parser'
import store from '../../store'


axios.interceptors.request.use(config => {
  let token = localStorage.getItem('access_token');
  // let token = '4WvHSgfsAaiGY-JLTJZAvJM2uLiq8Ayl_1582678386';
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
      if (error.response.status == 401) {
        localStorage.removeItem('access_token');
        store.dispatch('token', true);
        reject(error.response.data);
        return;
      }
      if (error.response.status == 422) {
        reject(error.response.data);
        return;
      }
      reject(errorParser.parse(error))
    })
  })
}
export default request
