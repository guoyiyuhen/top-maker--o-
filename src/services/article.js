import request from './plugins/request'

export let timestampToTime = (time) => {
    var date = new Date(time * 1000) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear();
    var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
    var D = date.getDate();
    return {
        Y,M,D
    }
}
// 分类
export let Designer = (params = {}, id = -1) => {
    let url = '/api/designer';
    if (id > 0) {
        url = '/api/designer/' + id;
    }
    return request({
        url,
        params,
        method: 'get'
    })
}
export let Works = (params = {}, id = -1) => {
    let url = '/api/works';
    if (id > 0) {
        url = '/api/works/' + id;
    }
    return request({
        url,
        params,
        method: 'get'
    })
}

export let Favors = (params = {}, id = -1) => {
    let url = '/api/works/favors';
    return request({
        url,
        params,
        method: 'get'
    })
}

export let Monitor = (params = {}) => {
    let url = '/api/works/monitor';
    return request({
        url,
        params,
        method: 'post'
    })
}

export let Category = (params = {}) => {
    let url = '/api/category';
    return request({
        url,
        params,
        method: 'get'
    })
}

export let DesignrCategory = (params = {}) => {
    let url = '/api/designer-category';
    return request({
        url,
        params,
        method: 'get'
    })
}

export let Home = (params = {}) => {
    let url = '/api/works/home';
    return request({
        url,
        params,
        method: 'get'
    })
}


