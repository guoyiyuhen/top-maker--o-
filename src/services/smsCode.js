import request from './plugins/request';

const smsCode = {
  create :(params = {}) => {
    return request({
      url: '/account/sms-code',
      params: params,
      method: 'post'
    })
  },
  getList :(params = {}) => {
    return request({
      url: '/account/sms-code',
      params: params
    })
  },
  getInfo :(params = {}) => {
    return request({
      url: '/account/sms-code/' + params.id,
      method: 'get'
    })
  },
  delete : (params = {}) => {
    return request({
      url: '/account/sms-code/' + params.id,
      method: 'delete'
    })
  },
  put :(params = {}) => {
    return request({
      url: '/account/sms-code/' + params.id,
      method: 'put',
      params: params
    })
  }
};

export default smsCode;
