import request from './plugins/request';

const campaignUser = {
  create :(params = {}) => {
    return request({
      url: '/campaign-user',
      params: params,
      method: 'post'
    })
  },
  getList :(params = {}) => {
    return request({
      url: '/campaign-user',
      params: params
    })
  },
  getInfo :(params = {}) => {
    return request({
      url: '/campaign-user/' + params.id,
      method: 'get'
    })
  },
  delete : (params = {}) => {
    return request({
      url: '/campaign-user/' + params.id,
      method: 'delete'
    })
  },
  put :(params = {}) => {
    return request({
      url: '/campaign-user/' + params.id,
      method: 'put',
      params: params
    })
  },
  card :(params = {}) => {
    return request({
      url: '/company-user/card',
      method: 'get',
      params: params
    })
  },
  vcard :(params = {}) => {
    return request({
      url: '/visitor/card',
      method: 'get',
      params: params
    })
  }
};

export default campaignUser;
