<template>
  <div class="main">
    <form action="#">
      <img src="../images/fillIn.png" alt="">
      <div class="formList">
      <van-tabs v-model="active">
        <van-tab title="企业员工登录">
          <ul class="box">
            <li>
              <span>手机号：</span>
              <input type="text" placeholder="请输入手机号" v-model="data.mobile">
              <b v-if="!show" @click="sendCode">获取验证码</b>
              <i v-else>{{time}}s</i>
            </li>
            <li>
              <span>验证码：</span>
              <input type="text" placeholder="请输入验证码" v-model="data.code">
            </li>
          </ul>
        </van-tab>
        <van-tab title="访客登录">
          <ul class="box">
            <li>
              <span>手机号：</span>
              <input type="text" placeholder="请输入手机号" v-model="data.mobile">
              <b v-if="!show" @click="sendCode">获取验证码</b>
              <i v-else>{{time}}s</i>
            </li>
            <li>
              <span>验证码：</span>
              <input type="text" placeholder="请输入验证码" v-model="data.code">
            </li>
            <li>
              <span>访客名称：</span>
              <input type="text" placeholder="请输入访客名称" v-model="params.name">
            </li>
            <li>
              <span>公司名称：</span>
              <input type="text" placeholder="请输入公司名称" v-model="params.visitor_company">
            </li>
            <li>
              <span>来源地：</span>
              <input type="text" placeholder="请输入来源地" v-model="params.origin_place">
            </li>
            <li @click="cancel_1">
              <span>离开日期：</span>
              {{params.time1 == '' ? '点击选择' : params.time1}}
            </li>
            <li @click="cancel_2">
              <span>返回日期：</span>
              {{params.time2 == '' ? '点击选择' : params.time2}}
            </li>
              <li>
              <span>隔离天数：</span>
              <input type="text" placeholder="请输入隔离天数" v-model="params.isolation_days">
            </li>
            <li>
              <span>是否经过疫区：</span>
              <van-radio-group v-model="params.is_disease_area" direction="horizontal">
                  <van-radio name="是">是</van-radio>
                  <van-radio name="否">否</van-radio>
              </van-radio-group>
            </li>
          </ul>
            <van-popup v-model="timeShow_1" position="bottom">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    @confirm="confirm_1"
                    @cancel="cancel_1"
                />
            </van-popup>
            <van-popup v-model="timeShow_2" position="bottom">
                <van-datetime-picker
                    v-model="currentDate"
                    type="date"
                    @confirm="confirm_2"
                    @cancel="cancel_2"
                />
            </van-popup>
        </van-tab>
      </van-tabs>
      </div>
      <div class="tips">
        <i>点击确定，即表示您同意</i>
        <a href="javascript:void (0);">用户协议</a>
      </div>
      <div class="submit" @click="userLogin">确定</div>
    </form>
  </div>
</template>

<script>
import filter from "../filter";
import smsCode from "@/services/smsCode.js";
import wxLogin from "@/services/wxLogin.js";
import sdk from "../wx-js-sdk";
let reg = /^(1[0-9][0-9])\d{8}$/; // 手机号正则
export default {
  name: "LoginPage",
  data() {
    return {
      active: 0,
      show: false,
      time: 60,
      data: {
        mobile: "",
        code: ""
      },
      userInfo: {},
      params: {
        name: "",
        visitor_company: "",
        origin_place: "",
        leave_date: "",
        return_date: "",
        isolation_days: "",
        is_disease_area: "",
        time1: '',
        time2: ""
      },
      timeShow_1: false,
      timeShow_2: false,
      isconfirm: false,
      currentDate: new Date()
    };
  },
  created() {
    function callback() {}
    let data = {
      title: "疫情信息管理系统",
      desc: "",
      link: location.href.split('?')[0] + '#' + location.href.split('#')[1],
      imgUrl: ""
    };
    sdk.forward(window.location.href.split('#')[0], data, callback);
  },
  methods: {
    cancel_1() {
      this.timeShow_1 = !this.timeShow_1;
    },
    confirm_1(value) {
      let params = this.params;
      params.leave_date = Math.floor(value.getTime() / 1000);
      this.params = params;
      this.params.time1 =
        value.getFullYear() +
        "." +
        a(value.getMonth() + 1) +
        "." +
        a(value.getDate());
      this.timeShow_1 = !this.timeShow_1;
      function a(t) {
        t = t.toString();
        return t[1] ? t : "0" + t;
      }
    },
    cancel_2() {
      this.timeShow_2 = !this.timeShow_2;
    },
    confirm_2(value) {
      let params = this.params;
      params.return_date = Math.floor(value.getTime() / 1000);
      this.params = params;
      this.params.time2 =
        value.getFullYear() +
        "." +
        a(value.getMonth() + 1) +
        "." +
        a(value.getDate());
      this.timeShow_2 = !this.timeShow_2;
      function a(t) {
        t = t.toString();
        return t[1] ? t : "0" + t;
      }
    },
    sendCode() {
      if (reg.test(this.data.mobile)) {
        let data = { type: "1", mobile: this.data.mobile },
          that = this;
        smsCode
          .create(data)
          .then(res => {
            this.show = true;
            let timeId = setInterval(function() {
              that.time--;
              if (that.time <= 0) {
                that.show = false;
                that.time = 60;
                clearInterval(timeId);
              }
            }, 1000);
          })
          .catch(err => {
            this.$notify(err.message);
          });
      } else {
        this.$notify("请输入正确的手机号");
      }
    },
    userLogin() {
      if (!reg.test(this.data.mobile)) {
        this.$notify("请输入正确的手机号");
        return;
      }
      if (this.data.code == "") {
        this.$notify("请输入验证码");
        return;
      }
      if (this.active == 0) {
        wxLogin
          .userLogin(this.data)
          .then(res => {
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("userInfo", JSON.stringify(res));
            this.$router.push("/user");
            this.$toast.success("登录成功！");
          })
          .catch(err => {
            this.$notify(err.message);
          });
      } else if (this.active == 1) {
          for (let i in this.params) {
            if (this.params[i] == "" && i != "purpose") {
              this.isconfirm = false;
              this.$notify("请输入必填信息");
              return;
            }
          }
          this.params.mobile = this.data.mobile;
          this.params.code = this.data.code;
        wxLogin
        .vistor(this.params)
        .then(res => {
          this.isconfirm = false;
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("userInfo", JSON.stringify(res));
          this.$router.push("/user");
          this.$toast.success("登录成功！");
        })
        .catch(err => {
          this.isconfirm = false;
          this.$notify(err.message);
        });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  padding-bottom: 0;
  form {
    background: #fff;
    width: 6.86rem;
    margin: 2.14rem auto 0;
    position: relative;
    box-shadow: 0 0.02rem 0.08rem 0.02rem rgba(218, 224, 236, 0.66);
    border-radius: 0.08rem;
    padding-bottom: 1rem;
    img {
      width: 1.8rem;
      height: 1.8rem;
      margin: 0 auto;
      left: 0;
      right: 0;
      transform: translate(0, -50%);
      position: absolute;
    }
    .formList {
      padding: 1.66rem 0 0;
      li {
        display: flex;
        align-items: center;
        width: 5.9rem;
        margin: 0 auto;
        overflow: hidden;
        padding: 0.48rem 0;
        border-bottom: 0.01rem #e3e8f1 solid;
        color: #828282;
        font-size: 0.28rem;
        span {
          display: block;
          color: #272f35;
          font-size: 0.32rem;
          line-height: 0.34rem;
          height: 0.34rem;
          display: flex;
          white-space: nowrap;
          &:before {
            content: "*";
            color: #c40000;
            font-size: 0.32rem;
            line-height: 0.34rem;
            height: 0.34rem;
            display: block;
            margin-right: 0.06rem;
          }
        }
        b {
          float: left;
          display: block;
          color: #c61a1a;
          font-size: 0.32rem;
          line-height: 0.54rem;
          height: 0.54rem;
          overflow: hidden;
          border: 0.02rem solid #c60b0b;
          padding: 0 0.24rem;
          border-radius: 0.28rem;
          cursor: pointer;
        }
        i {
          float: right;
          display: block;
          color: #666666;
          font-size: 0.32rem;
          line-height: 0.58rem;
          height: 0.54rem;
          overflow: hidden;
          padding: 0 0.24rem;
          border-radius: 0.28rem;
          cursor: pointer;
          text-align: right;
        }
        input {
          width: 2.18rem;
          float: left;
          display: block;
          font-size: 0.32rem;
          line-height: 0.56rem;
          height: 0.56rem;
          border: none;
        }
      }
    }
    .tips {
      width: 5.9rem;
      margin: 0.36rem auto 0;
      display: flex;
      i {
        display: block;
        color: #828282;
        height: 0.26rem;
        line-height: 0.26rem;
        font-size: 0.24rem;
        font-weight: 400;
      }
      a {
        display: block;
        color: #3485db;
        height: 0.26rem;
        line-height: 0.26rem;
        font-size: 0.24rem;
        font-weight: 400;
      }
    }
    .submit {
      width: 5.9rem;
      height: 0.72rem;
      text-align: center;
      margin: 1.1rem auto 0;
      color: #ffffff;
      font-size: 0.32rem;
      line-height: 0.72rem;
      background: #c61a1a;
      border-radius: 0.36rem;
    }
  }
}
</style>

<style>
html,
body {
  background: #f8f8f8;
}
</style>
