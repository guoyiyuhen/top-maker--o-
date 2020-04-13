import request from './plugins/request';
const access = {
    submit :(params = {}) => {
      return request({
        url: '/api/entry-log',
        params: params,
        method: 'post'
      })
    },
    islogin :(params = {}) => {
      return request({
        url: 'company-user/is-login',
        params: params,
        method: 'get'
      })
    }
  };

  export default access;
