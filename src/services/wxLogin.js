import request from './plugins/request';

const wxLogin = {
  login:(params = {}) => {
    return request({
      url: '/account/wx-login',
      params: params,
      method: 'post'
    })
  },
  userLogin:(params = {}) =>{
    return request({
      url: '/account/h5-login',
      params: params,
      method: 'post'
    })
  },
  security:(params = {}) =>{
    return request({
      url: '/account/security-login',
      params: params,
      method: 'post'
    })
  },
  
  vistor:(params = {}) =>{
    return request({
      url: '/account/visitor-login',
      params: params,
      method: 'post'
    })
  },

  getInfo:(params = {}) =>{
    return request({
      url: '/user/my',
      params: params,
      method: 'get'
    })
  }
};

export default wxLogin;
