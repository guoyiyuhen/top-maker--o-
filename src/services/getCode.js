import qs from 'qs'
const weixinOpen = 'https://open.weixin.qq.com/connect/oauth2/authorize';

const getCode = {
  get:(params = {}) => {

    const data = qs.stringify(params);
    console.log(data);


    window.location.href = weixinOpen + '?' + data + '#wechat_redirect';
  }
};

export default getCode;
