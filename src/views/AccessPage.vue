<template>
  <div class="main">
    <van-loading v-if="loading" color="#1989fa" size="80px" style="margin: 100px auto;" />
    <div class="access_tip_1" v-if="!loading && isShow && isRegister">
        <div class="code">
            <img :src="qrcode" alt="">
            <div class="mask" v-if="overdue">出入码已过期请点击刷新</div>
        </div>
        <div class="tips" v-if="!overdue">
            <h2>{{times}}s</h2>
            <p>请将该二维码示给安保人员扫码</p>
        </div>
        <div class="btn">
            <div @click="reload">刷新</div>
        </div>
    </div>
    <div class="access_tip_2" v-if="!loading && isShow && isRegister">
        <div class="information">
            <img src="../images/my.png" alt="">
            <div>
                <h2>{{userInfo.nickname}} {{userInfo.mobile}}</h2>
                <p>{{userInfo.company.name}}</p>
            </div>
        </div>
        <h5 :style="'background:'  + (isjuri ? '#F45879' : '#09C338')"  v-if="isShow && isRegister" class="positionH5">身份：{{isjuri ? '访客' : '企业员工'}}</h5>
    </div>
    <div class="access_tip_3" v-if="!loading && !isShow && !isLogin">
        <img src="../images/access1.png" alt="">
        <p>{{errTxt}}</p>
    </div>
     <div class="access_tip_3" v-if="!loading && !isRegister">
        <img src="../images/access1.png" alt="">
        <p>安保人员不需出入证</p>
    </div>
    <form action="#" v-if="!loading && !isShow && isLogin">
      <img src="../images/fillIn.png" alt="">
      <div class="formList">
      <van-tabs v-model="active">
        <van-tab title="企业员工登录">
          <ul class="box">
            <li>
              <van-field v-model="data.mobile" label="手机号" placeholder="请输入手机号" />
              <b v-if="!show" @click="sendCode">获取验证码</b>
              <i v-else>{{time}}s</i>
            </li>
            <li>
              <van-field v-model="data.code" label="验证码" placeholder="请输入验证码" />
            </li>
          </ul>
        </van-tab>
        <van-tab title="访客登录">
          <ul class="box">
            <li>
              <van-field v-model="data.mobile" label="手机号" placeholder="请输入手机号" />
              <b v-if="!show" @click="sendCode">获取验证码</b>
              <i v-else>{{time}}s</i>
            </li>
            <li>
              <van-field v-model="data.code" label="验证码" placeholder="请输入验证码" />
            </li>
            <li>
              <van-field v-model="params.name" label="访客名称" placeholder="请输入名称" />
            </li>
            <li>
              <van-field v-model="params3.id_no" label="身份证号" placeholder="请输入身份证号" />
            </li>
            <li>
              <van-field v-model="params.visitor_company" label="拜访公司名称" placeholder="请输入公司名称" />
            </li>
            <li style="flex-direction: column;align-items: flex-start;">
              <span>是否离开本地：</span>
              <van-radio-group v-model="params.is_leave">
                <van-cell-group>
                  <van-cell title="是" clickable @click="params.is_leave = '是'">
                    <van-radio slot="right-icon" name="是" />
                  </van-cell>
                  <van-cell title="否" clickable @click="params.is_leave = '否'">
                    <van-radio slot="right-icon" name="否" />
                  </van-cell>
                </van-cell-group>
              </van-radio-group>
            </li>
            <li v-if="params.is_leave == '是'"> 
              <van-field v-model="params2.origin_place" label="来源地" placeholder="请输入来源地" />
            </li>

            <li @click="cancel_1" v-if="params.is_leave == '是'">
              <span>离开本地日期：</span>
              {{params2.time1 == '' ? '点击选择' : params2.time1}}
            </li>
            <li @click="cancel_2" v-if="params.is_leave == '是'">
              <span>返回本地日期：</span>
              {{params2.time2 == '' ? '点击选择' : params2.time2}}
            </li>
            <li v-if="params.is_leave == '是'" style="flex-direction: column;align-items: flex-start;">
              <span>是否经过疫区：</span>
              <van-radio-group v-model="params.is_disease_area">
                <van-cell-group>
                  <van-cell title="是" clickable @click="params.is_disease_area = '是'">
                    <van-radio slot="right-icon" name="是" />
                  </van-cell>
                  <van-cell title="否" clickable @click="params.is_disease_area = '否'">
                    <van-radio slot="right-icon" name="否" />
                  </van-cell>
                </van-cell-group>
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
      <div class="submit" @click="userLogin">确定</div>
    </form>
  </div>
</template>

<script>
import filter from "../filter";
import campaignUser from "@/services/campaignUser.js";
import wxLogin from "@/services/wxLogin.js";
import access from "@/services/access.js";
import smsCode from "@/services/smsCode.js";
import sdk from "../wx-js-sdk";
let reg = /^(1[0-9][0-9])\d{8}$/; // 手机号正则
let timer = null;
export default {
  name: "LoginPage",
  data() {
    return {
      loading: true,
      overdue: false,
      times: 60,
      userInfo: {},
      isShow: false,
      isLogin: false,
      isRegister: true,
      jurisdiction: "guestGroup",
      errTxt: "",
      columns: [],
      currentDate: new Date(),
      isconfirm: false,
      qrcode: '',
      uid: '',
      active: 0,
      show: false,
      time: 60,
      data: {
        mobile: "",
        code: ""
      },
      params: {
        name: "",
        visitor_company: "",
        is_leave: ""
      },
      params2: {
        is_disease_area: "",
        leave_date: "",
        return_date: "",
        origin_place: "",
        time1: '',
        time2: ""
      },
      params3: {
        id_no: ''
      },
      timeShow_1: false,
      timeShow_2: false
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
    if (this.$route.params.id && this.$route.params.id != 0) {
      this.uid = this.$route.params.id;
      this.setUserInfo();
    } else {
      this.isShow = false;
      this.loading = false;
      this.errTxt = "请用微信扫一扫，扫描门禁二维码进入";
    }
  },
  methods: {
    cancel_1() {
      this.timeShow_1 = !this.timeShow_1;
    },
    confirm_1(value) {
      let params2 = this.params2;
      params2.leave_date = Math.floor(value.getTime() / 1000);
      this.params2 = params2;
      this.params2.time1 =
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
      let params2 = this.params2;
      params2.return_date = Math.floor(value.getTime() / 1000);
      this.params2 = params2;
      this.params2.time2 =
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
            this.$notify(err ? err.message : "网络错误");
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
        this.data.entry_id = this.uid;
        wxLogin
          .userLogin(this.data)
          .then(res => {
            localStorage.setItem("access_token", res.access_token);
            localStorage.setItem("userInfo", JSON.stringify(res));
            this.$toast.success("登录成功！");
            this.isLogin = false;
            this.setUserInfo();
          })
          .catch(err => {
            this.$notify(err ? err.message : "网络错误");

          });
      } else if (this.active == 1) {
          for (let i in this.params) {
            if (this.params[i] == "" && i != "purpose") {
              this.isconfirm = false;
              this.$notify("请输入必填信息");
              return;
            }
          }
          if (this.params.is_leave == '是') {
            for (let i in this.params2) {
              if (this.params2[i] == "" && i != "purpose") {
                this.isconfirm = false;
                this.$notify("请输入必填信息");
                return;
              }
            }
            this.params.is_disease_area = this.params2.is_disease_area;
            this.params.return_date = this.params2.return_date;
            this.params.leave_date = this.params2.leave_date;
            this.params.origin_place = this.params2.origin_place;
            this.params.time1 = this.params2.time1;
            this.params.time2 = this.params2.time2;
          }
          this.params.mobile = this.data.mobile;
          this.params.code = this.data.code;
          this.params.entry_id = this.uid;
          if (this.params3.id_no != '') {
            this.params.id_no = this.params3.id_no;
          }
        wxLogin
        .vistor(this.params)
        .then(res => {
          this.isconfirm = false;
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("userInfo", JSON.stringify(res));
          this.$toast.success("登录成功！");
          this.isLogin = false;
          this.setUserInfo();
        })
        .catch(err => {
          this.isconfirm = false;
          this.$notify(err ? err.message : "网络错误");
        });
      }
    },
    setUserInfo() {
      wxLogin.getInfo({
        entry_id: this.uid
      }).then(res => {
        this.userInfo = res;
        this.loading = false;
        this.jurisdiction = this.userInfo.role.item_name || "guestGroup";
        if (this.jurisdiction == "guestGroup") {
          this.isLogin = true;
          this.isShow = false;
        } else {
          this.isLogin = false;
          this.isShow = true;
          this.reload();
        }
      })
      .catch(err => {
              this.isShow = false;
              this.loading = false;
              this.errTxt = err ? err.message : "网络错误";
      });
    },
    reload() {
        if (this.jurisdiction == 'securityGroup') {
          this.isRegister = false;
        } else if (this.jurisdiction == 'visitorGroup') {
          this.isjuri = true;
          this.reload2();
        } else {
          this.isjuri = false;
          this.reload1();
        }
    },
    reload2() {
          clearInterval(timer);
          this.qrcode = '';
          campaignUser
            .vcard({
              entry_id: this.uid
            })
            .then(res => {
                this.qrcode = res.qrcode;
                this.overdue = false;
                this.times = 60;
                timer = setInterval(() => {
                    if (this.times <= 0) {
                        this.overdue = true;
                        clearInterval(timer);
                    }
                    this.times --;
                }, 1000)
            })
            .catch(err => {
              this.isShow = false;
              this.loading = false;
              this.errTxt = err ? err.message : "网络错误";
            });
    },
    reload1() {
          clearInterval(timer);
          campaignUser
            .card({
              entry_id: this.uid
            })
            .then(res => {
                this.qrcode = res.qrcode;
                this.overdue = false;
                this.times = 60;
                timer = setInterval(() => {
                    if (this.times <= 0) {
                        this.overdue = true;
                        clearInterval(timer);
                    }
                    this.times --;
                }, 1000)
            })
            .catch(err => {
              this.isShow = false;
              this.loading = false;
              this.errTxt = err ? err.message : "网络错误";
            });
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  .positionH5  {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
  }
    .access_tip_1 {
        height: 6.92rem;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: .42rem;
        background: #fff;
        position: relative;
        .code {
            img {
                width: 4.2rem;
                height: 4.2rem;
            }
            .mask {
                position: absolute;
                z-index: 2;
                width: 3rem;
                height: 2.7rem;
                padding: .6rem;
                padding-top: 1rem;
                background: rgba(255, 255, 255, .8);
                top: .42rem;
                font-size: .44rem;
                font-weight: bold;
                text-align: center;
            }
        }
        .tips {
            text-align: center;
            margin-top: .08rem;
            h2 {
                font-size: .48rem;
                color: #3485DB;
                font-weight: bold;
                margin-bottom: .1rem;
            }
            p {
                font-size: .3rem;
            }
        }
        .btn {
            margin-top: .4rem;
            div {
                width: 5.36rem;
                height: .8rem;
                border-radius: .4rem;
                background: #3485DB;
                color: #fff;
                font-size: .32rem;
                text-align: center;
                line-height: .8rem;
            }
        }
    }
    .access_tip_2 {
        margin-top: .16rem;
        background: #fff;
        height: 2.4rem;
        padding-top: .8rem;
        h5 {
          font-size: .6rem;
          text-align: center;
          margin-top: .3rem;
          color: #fff;
          height: 1rem;
          line-height: 1rem;
        }
        .information {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: .9rem;
                height: .9rem;
                margin-right: .16rem;
            }
            h2 {
                color: #272F35;
                font-size: .34rem;
                font-weight: bold;
            }
            p {
                color: #9B9B9B;
                font-size: .26rem;
                margin-top: .2rem;
            }
        }
    }
    .access_tip_3 {
        height: 3.42rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: .46rem;
        img {
            width: 1.12rem;
            height: 1.12rem;
        }
        p {
            width: 4rem;
            color: #272F35;
            font-size: .4rem;
            text-align: center;
            margin-top: .32rem;
            font-weight: bold;
        }
    }
    .access_tip_4 {
        height: 2rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: .16rem;
        padding-top: 1rem;
        .btn {
            div {
                width: 5.36rem;
                height: .8rem;
                border-radius: .4rem;
                background: #3485DB;
                color: #fff;
                font-size: .32rem;
                text-align: center;
                line-height: .8rem;
            }
        }
    }
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
        padding: 0.28rem 0;
        color: #828282;
        font-size: 0.28rem;
        span {
          margin-left: 15px;
          margin-right: 15px;
          width: 90px;
          display: block;
          color: #323233;
          font-size: 14px;
          line-height: 24px;
          height: 24px;
          display: flex;
          white-space: nowrap;
        }
        b {
          width: 1.8rem;
          text-align: center;
          display: block;
          color: #c61a1a;
          font-size: 0.22rem;
          line-height: 0.54rem;
          height: 0.54rem;
          border: 0.02rem solid #c60b0b;
          padding: 0 0.14rem;
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
      margin: .5rem auto 0;
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
