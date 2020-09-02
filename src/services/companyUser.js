import request from './plugins/request';

const companyUser = {
  getInfo:(params = {}) => {
    return request({
      url: '/company-user/' + params.id,
      method: 'get'
    })
  },
  getInfo2:(params = {}) => {
    return request({
      url: '/visitor/' + params.id,
      method: 'get'
    })
  },
  entry:(params = {}) => {
    return request({
      url: '/entry-log',
      params: params,
      method: 'post'
    })
  },
  attendance :(params = {}) => {
    return request({
      url: '/company-user/attendance-set',
      method: 'get',
      params: params
    })
  }
};

export default companyUser;
