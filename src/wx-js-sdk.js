import wx from 'weixin-js-sdk'
import jsSdk from './services/jsSdk.js'

function wxConfigForward(res1, data, callback) {
      wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res1.appId, // 必填，公众号的唯一标识
            timestamp: res1.timestamp, // 必填，生成签名的时间戳
            nonceStr: res1.nonceStr, // 必填，生成签名的随机串
            signature: res1.signature,// 必填，签名
            jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
      });
      wx.error(function (res) {
            callback();
            // alert(res.errMsg);
      })
      wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
            wx.updateAppMessageShareData({
                  title: data.title, // 分享标题
                  desc: data.desc, // 分享描述
                  link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                  imgUrl: data.imgUrl, // 分享图标
                  success: function () {
                        wx.updateTimelineShareData({
                              title: data.title, // 分享标题
                              link: data.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                              imgUrl: data.imgUrl, // 分享图标
                              success: function () {
                                    callback();
                              }
                        })
                  }
            })
      });
}

function wxConfigScanQRCode(res1, callback) {
      wx.config({
            debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId: res1.appId, // 必填，公众号的唯一标识
            timestamp: res1.timestamp, // 必填，生成签名的时间戳
            nonceStr: res1.nonceStr, // 必填，生成签名的随机串
            signature: res1.signature,// 必填，签名
            jsApiList: ['scanQRCode'] // 必填，需要使用的JS接口列表
      });
      wx.error(function (res) {
            callback();
            // alert(res.errMsg);
      })
      wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
            wx.scanQRCode({
                  needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
                  scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
                  success: function (res) {
                        var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
                        callback(result);
                  }
            });
      });
}

const sdk = {
      forward: function (url, data, callback) {
            jsSdk.postList({
                  url: url
            }).then(res => {
                  wxConfigForward(res, data, callback);
            })
      },
      scanQRCode: function (url, callback) {
            jsSdk.postList({
                  url: url
            }).then(res => {
                  wxConfigScanQRCode(res, callback);
            })
      }
}

export default sdk;