<template>
  <div class="security">
    <div class="access_tip_3" v-if="!isShow && !success">
        <img src="../images/access1.png" alt="">
        <p>{{errTxt}}</p>
    </div>
    <div class="access_tip_3" v-if="success">
        <img src="../images/success.png" alt="">
        <p>{{successTxt}}</p>
    </div>
    <div class="access_tip_1" v-if="isShow">
        <div class="status">
          <div class="left" :style="'background-color:' + (res.role == 'companyGroup' || res.role == 'companyManagerGroup' ? color[0] : color[1])">
            <span>
              {{res.role == 'companyGroup' || res.role == 'companyManagerGroup' ? '员工' : '访客'}}
            </span>
             
          </div>
          <div class="right right_1">
            <h4 :style="'color:' + (res.is_leave == '是' ? color[1] : color[2])">{{res.is_leave ? res.is_leave : '-'}}</h4>
            <p>是否离开本地</p>
          </div>
          <div class="right_0"></div>
          <div class="right right_2">
            <h4 :style="'color:' + (res.isolation_days < 14 ? color[1] : color[2])">{{res.isolation_days ? res.isolation_days : '-'}}</h4>
            <p>隔离天数</p>
          </div>
          <div class="right_0"></div>
          <div class="right right_3">
            <h4 :style="'color:' + (res.is_disease_area == '是' ? color[1] : color[2])">{{res.is_disease_area ? res.is_disease_area : '-'}}</h4>
            <p>是否经停疫区</p>
          </div>
        </div>
        <div class="status" v-if="res.role == 'companyGroup' || res.role == 'companyManagerGroup'">
          <div class="left">
          </div>
          <div class="right right_1">
            <h4 :style="'color:' + (res.attendance_status == 2 ? color[1] : color[2])">{{res.attendance_status == 1 ? '出勤' : '休息'}}</h4>
            <p>出勤状态</p>
          </div>
          <div class="right_0"></div>
          <div class="right right_2">
            <h4 :style="'color:' + status[res.status].c">{{status[res.status].t}}</h4>
            <p>审核状态</p>
          </div>
        </div>
    </div>
    <div class="access_tip_2" v-if="isShow">
        <h1><span>*</span>体温</h1>
        <input type="text" placeholder="请输入体温" v-model="temperature" class="input" max="5">
        <div class="position_input" @click="keyboardshow = true"></div>
    </div>
    <van-number-keyboard
      :show="keyboardshow"
      extra-key="."
      close-button-text="完成"
      @blur="keyboardshow = false"
      @input="onInput"
      @delete="onDelete"
    />
    <div class="access_tip_4" v-if="isShow">
        <ul v-if="res.role == 'companyGroup' || res.role == 'companyManagerGroup'">
          <li><span>姓名：</span><i>{{res.name ? res.name : '-'}}</i></li>
          <li><span>电话：</span><i>{{res.mobile ? res.mobile : '-'}}</i></li>
          <li><span>企业：</span><i>{{res.company_name ? res.company_name : '-'}}</i></li>
          <li><span>身份证号：</span><i>{{res.id_no ? res.id_no : '-'}}</i></li>
          <li><span>性别：</span><i>{{res.sex ? res.sex : '-'}}</i></li>
          <li><span>是否离开本地：</span><i>{{res.is_leave ? res.is_leave : '-'}}</i></li>
          <li><span>离开本地日期：</span><i>{{res.leave_date ? res.leave_date : '-'}}</i></li>
          <li><span>来源地：</span><i>{{res.origin_place ? res.origin_place : '-'}}</i></li>
          <li><span>回程方式：</span><i>{{res.transport ? res.transport : '-'}}</i></li>
          <li><span>到达本地时间：</span><i>{{res.return_date ? res.return_date : '-'}}</i></li>
          <li><span>是否经停疫区：</span><i>{{res.is_disease_area ? res.is_disease_area : '-'}}</i></li>
          <li><span>隔离天数：</span><i>{{res.isolation_days ? res.isolation_days : '-'}}</i></li>
          <li><span>身体状况：</span><i>{{res.physical_condition ? res.physical_condition : '-'}}</i></li>
          <li><span>是否发热：</span><i>{{res.is_heat ? res.is_heat : '-'}}</i></li>
          <li><span>上下班方式：</span><i>{{res.job_traffic ? res.job_traffic : '-'}}</i></li>
        </ul>
        <ul v-if="res.role == 'visitorGroup'">
          <li><span>姓名：</span><i>{{res.name ? res.name : '-'}}</i></li>
          <li><span>电话：</span><i>{{res.mobile ? res.mobile : '-'}}</i></li>
          <li><span>拜访企业：</span><i>{{res.visitor_company ? res.visitor_company : '-'}}</i></li>
          <li><span>身份证号：</span><i>{{res.id_no ? res.id_no : '-'}}</i></li>
          <li><span>是否离开本地：</span><i>{{res.is_leave ? res.is_leave : '-'}}</i></li>
          <li><span>离开本地日期：</span><i>{{res.leave_date ? res.leave_date : '-'}}</i></li>
          <li><span>是否经停疫区：</span><i>{{res.is_disease_area ? res.is_disease_area : '-'}}</i></li>
          <li><span>隔离天数：</span><i>{{res.isolation_days ? res.isolation_days : '-'}}</i></li>
        </ul>
    </div>
    <div class="access_tip_5" v-if="isShow">
        <div class="btn btn_1" @click="submit(2)">禁止进入</div>
        <div class="btn btn_2" @click="submit(1)">允许进入</div>
    </div>
  </div>
</template>

<script>
import filter from "../filter";
import sdk from "../wx-js-sdk";
import companyUser from "@/services/companyUser.js";
import wxLogin from "@/services/wxLogin.js";
let reg = /^(1[0-9][0-9])\d{8}$/; // 手机号正则
export default {
  name: "LoginPage",
  data() {
    return {
      userInfo: {},
      isShow: true,
      errTxt: '',
      color: ['#09C338', '#F45879', '#3485DB'],
      temperature: "",
      jurisdiction: "",
      entry_id: "",
      uid: "",
      user_id: "",
      result: "",
      res: {},
      success: false,
      successTxt: '已准许进入',
      keyboardshow: false,
      status: {
        1: {
          t: '待审核',
          c: '#09C338'
        },
        10: {
          t: '正常',
          c: '#3485DB'
        },
        20: {
          t: '拒绝',
          c: '#F45879'
        }
      }
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
    let _timestamp = Date.parse(new Date());
    let _t = this.$route.params.t * 1000;
    if (_timestamp - _t > 300000) {
            this.isShow = false;
            this.errTxt = "二维码已过期，请重新扫码";
    } else {
          if (this.$route.params.id) {
            this.uid = this.$route.params.id;
            this.entry_id = this.$route.params.eid;
            this.type = this.$route.params.type;
            this.isShow = true;
            this.setUserInfo();
          } else {
            this.isShow = false;
            this.errTxt = "未获取到二维码相关信息，请联系管理员";
          }
    }
  },
  methods: {
    onInput(value) {
      if (this.temperature.length >= 8) {
        return;
      }
      this.temperature = this.temperature + value;
    },
    onDelete() {
      this.temperature = '';
    },
    setUserInfo() {
      wxLogin.getInfo().then(res => {
        this.userInfo = res;
        this.jurisdiction = this.userInfo.role.item_name || "guestGroup";
        if (this.jurisdiction == "securityGroup") {
          this.getList();
        } else {
          this.isShow = false;
          this.errTxt = '非安保人员，扫码无效';
        }
      })
      .catch(err => {
            this.isShow = false;
            this.errTxt = err ? err.message : "网络错误，请重新扫码";
      });
    },
    submit(result) {
      if (this.temperature == '') {
        this.$notify('请输入体温');
        return;
      }
      companyUser
      .entry({
        user_id: this.user_id,
        temperature: this.temperature,
        entry_id: this.entry_id,
        result: result,
        name: this.res.name,
        mobile: this.res.mobile,
        type: this.res.role == 'visitorGroup' ? 2 : 1
      })
      .then(res => {
          if (result == 1) {
            this.isShow = false;
            this.success = true;
          } else {
            this.isShow = false;
            this.success = false;
            this.errTxt = '已禁止进入';
          }
      })
      .catch(err => {
            this.isShow = false;
            this.errTxt = err ? err.message : "网络错误，请重新扫码";
      });
    },
    getList() {
      if (this.type == 1) {
        companyUser
        .getInfo({
          id: this.uid
        })
        .then(res => {
          this.user_id = res.user_id;
          this.res = res;
        })
        .catch(err => {
            this.isShow = false;
            this.errTxt = err ? err.message : "网络错误，请重新扫码";
        });
      } else {
        companyUser.getInfo2({
          id: this.uid
        })
        .then(res => {
          this.user_id = res.user_id;
          this.res = res;
        })
        .catch(err => {
            this.isShow = false;
            this.errTxt = err ? err.message : "网络错误，请重新扫码";
        });
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
.security {
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
    .access_tip_1 {
      height: 4.4rem;
      background: #fff;
      margin-top: .16rem;
      h3 {
        color: #272F35;
        font-size: .26rem;
        height: .9rem;
        line-height: .9rem;
        border-bottom: .01rem solid #E3E8F1;
        span {
          margin: 0 .48rem;
        }
      }
      .status {
        display: flex;
        align-items: center;
        .left {
          width: .92rem;
          padding: 0 .1rem;
          height: 1rem;
          border-radius: .12rem;
          color: #fff;
          margin: .4rem;
          font-size: .28rem;
          line-height: 1rem;
          text-align: center;
          white-space: wrap;
        }
        .right {
          width: 1.4rem;
          text-align: center;
          h4 {
            font-size: .48rem;
            font-weight: bold;
            margin-bottom: .05rem;
          }
          p {
            color: #4A4A4A;
            font-size: .22rem;
          }
        }
        .right_0 {
          background: #E3E8F1;
          height: .9rem;
          width: .02rem;
          margin: 0 .24rem;
        }
      }

    }
    .access_tip_2 {
      width: 100%;
      height: 2.92rem;
      background: #fff;
      margin-top: .16rem;
      position: relative;
      h1 {
        color: #4A4A4A;
        font-size: .44rem;
        font-weight: bold;
        padding-left: .4rem;
        padding-top: .4rem;
        height: .64rem;
        span {
          font-size: .32rem;
          color: #ED5564;
          margin-right: .1rem;
        }
      }
      input {
        width: 6.1rem;
        height: 1.08rem;
        border: 0 none;
        border-radius: .1rem;
        margin-top: .36rem;
        margin-left: .4rem;
        font-size: .32rem;
        padding: 0 .3rem;
        background: #F3F7FD;
      }
      .position_input {
          width: 100%;
         height: 2.92rem;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }
    }
    .access_tip_4 {
      background: #fff;
      margin-top: .16rem;
      padding: .64rem;
      padding-bottom: 1.48rem;
      ul li {
        display: flex;
        margin-bottom: .4rem;
        span {
          color: #272F35;
          font-size:.32rem;
          white-space: nowrap;
        }
        i {
          color: #828282;
          font-size: .28rem;
        }
      }
    }

    .access_tip_5 {
      height: 1.18rem;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      display: flex;
      .btn {
        color: #fff;
        height: 1.18rem;
        line-height: 1.18rem;
        text-align: center;
        font-size: .32rem;
      }
      .btn_1 {
        background: #F45879;
        width: 60%;
      }
      .btn_2 {
        width: 40%;
        background: #3485DB;
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
