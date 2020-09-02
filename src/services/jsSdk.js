import request from './plugins/request'

const jsSdk = {
  postList:(params = {}) => {
    return request({
      url: '/account/wx-sign',
      params: params,
      method: 'post'
    })
  }
};

export default jsSdk;