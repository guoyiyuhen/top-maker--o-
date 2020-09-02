<template>
  <div class="login">
    <div class="box">
      <img src="./../assets/image/logo_dengluye@2x.png" class="logo" alt="">
      <h2>欢迎回来</h2>
      <!-- <input type="text" placeholder="姓名" maxlength="10" v-model="name" v-if="!islogin"> -->

      <input type="text" class="input-top" placeholder="手机号" maxlength="11" v-model="params.mobile">
      <div class="code">
        <input type="text" placeholder="短信验证码" maxlength="6" v-model="params.code">
        <div @click="send">{{time}}</div>
      </div>
      <div class="submit" @click="submit">{{islogin ? '登陆' : '注册'}}</div>
      <!-- <h3>第三方账号登陆</h3>
            <div class="third">
                <img src="./../assets/image/qq.png" class="logo" alt="">
                <img src="./../assets/image/weiixn.png" class="logo" alt="">
      </div>-->
    </div>
    <div class="mask" @click="cancel"></div>
  </div>
</template>

<script>
import { SmsCode, WebLogin, WebRegister } from "./../services/article";
export default {
  props: ["islogin", "callBack"],
  data() {
    return {
      params: {
        mobile: "",
        code: ""
      },
      time: "获取短信验证码",
      timer: null,
      isSend: false,
      name: ""
    };
  },
  mounted() {

  },
  methods: {
    cancel() {
      this.callBack(false);
    },
    send() {
      if (this.isSend) {
        return;
      }
      if (!/^1[3456789]\d{9}$/.test(this.params.mobile)) {
        alert("请输入正确的手机号");
        return;
      }
      this.isSend = true;
      let idx = 60;
      clearInterval(this.timer);
      this.time = idx + "s";
      SmsCode({ mobile: this.params.mobile, type: 1 }).then(res => {

      });
      this.timer = setInterval(() => {
        idx--;
        if (idx <= 0) {
          this.time = "重新获取";
          this.isSend = false;
          clearInterval(this.timer);
          return;
        }
        this.time = idx + "s";
      }, 1000);
    },
    submit() {
      if (!/^1[3456789]\d{9}$/.test(this.params.mobile)) {
        alert("请输入正确的手机号");
        return;
      }
      if (this.params.code == "") {
        alert("请输入短信验证码");
        return;
      }
      if (this.islogin) {
        WebLogin(this.params).then(res => {
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("nickname", res.nickname);
          this.callBack(true);
          this.$router.push({
            path: "/home"
          });
        }).catch(err => {
          this.$message.error(err);
        });
      } else {
        if (this.name == "") {
          alert("请输入姓名");
          return;
        }
        this.params.name = this.name;
        WebRegister(this.params).then(res => {
          localStorage.setItem("access_token", res.access_token);
          localStorage.setItem("nickname", res.nickname);
          this.callBack(true);
          this.$router.push({
            path: "/home"
          });
        }).catch(err => {
          this.$message.error(err);
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  .mask {
    background: rgba(14, 14, 14, 0.7);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 10;
  }
  .box {
    width: 416px;
    height: 542px;
    position: absolute;
    z-index: 100;
    top: 120px;
    left: 50%;
    margin-left: -208px;
    background: #fff;
    border-radius: 12px;
    padding-top: 50px;
    .logo {
      margin: 0 auto;
      width: 52px;
      height: 70px;
    }
    h2 {
      text-align: center;
      margin-top: 13px;
      margin-bottom: 50px;
      font-size: 28px;
      font-weight: bold;
      color: #161312;
    }
    input {
      width: 300px;
      height: 45px;
      display: block;
      border: 2px solid rgba(244, 244, 244, 1);
      border-radius: 6px;
      margin: 0 auto;
      padding: 0 11px;
      font-size: 14px;
    }
    .input-top {
      margin-top: 32px;
    }
    .code {
      width: 330px;
      height: 50px;
      margin: 0 auto;
      margin-top: 32px;
      margin-bottom: 34px;
      position: relative;
      div {
        position: absolute;
        background: #f4f4f4;
        height: 32px;
        line-height: 32px;
        width: 106px;
        right: 8px;
        color: #333333;
        font-size: 12px;
        top: 50%;
        margin-top: -16px;
        border-radius: 6px;
        text-align: center;
        cursor: pointer;
      }
    }
    .submit {
      width: 322px;
      height: 42px;
      line-height: 42px;
      text-align: center;
      background: rgba(51, 51, 51, 1);
      border: 2px solid rgba(51, 51, 51, 1);
      border-radius: 6px;
      color: #fff;
      font-size: 18px;
      margin: 0 auto;
      cursor: pointer;
    }
    h3 {
      font-size: 14px;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      text-align: center;
      margin-top: 50px;
      margin-bottom: 18px;
    }
    .third {
      overflow: hidden;
      width: 102px;
      margin: 0 auto;
      img {
        width: 36px;
        height: 36px;
        float: right;
        cursor: pointer;
        &:nth-child(1) {
          float: left;
        }
      }
    }
  }
}
</style>
