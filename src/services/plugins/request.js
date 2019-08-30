import axios from 'axios'
import qs from 'qs'

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
            console.log(error);
        })
    })
}
export default request