<template>
    <div class="main">
        <div class="userHeader">
            <img :src="userInfo.avatar" v-if="isShow" alt="">
            <img src="./../images/userAge.png" v-else alt="">
            <h2 v-if="isShow">{{userInfo.nickname}}</h2>
            <button v-if="jurisdiction === 'guestGroup'" @click="login">登录</button>
            <h2 v-if="jurisdiction == 'companyGroup' || jurisdiction == 'companyManagerGroup'">{{company}}</h2>
            <h2 v-if="jurisdiction == 'securityGroup'">安保人员</h2>
            <h2 v-if="jurisdiction == 'visitorGroup'">访客</h2>
        </div>
        <div class="menu">
            <ul class="menuList">
                <li>
                    <div class="link" @click="tomyAbout">
                        <img class="icon" src="../images/visitor.png" alt="">
                        <h2>关于我们</h2>
                        <img class="arrow" src="../images/Arrow.png" alt="">
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import sdk from "../wx-js-sdk";
import wxLogin from "@/services/wxLogin.js";
export default {
  name: "UserPage",
  data() {
    return {
      userInfo: {},
      isShow: false,
      company: "",
      jurisdiction: "guestGroup" // guestGroup   companyGroup    companyManagerGroup securityGroup visitorGroup
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
    this.setUserInfo();
  },
  methods: {
    setUserInfo() {
      wxLogin.getInfo().then(res => {
        this.userInfo = res;
        this.jurisdiction = this.userInfo.role.item_name || "guestGroup";
        if (this.jurisdiction == "guestGroup") {
          this.isShow = false;
          this.company = res.company.name;
        } else {
          this.isShow = true;
        }
      })
      .catch(err => {
          this.$notify(err ? err.message : "网络错误");
      });
    },
    login() {
      this.$router.push("/login");
    },
    tomyAbout() {
      this.$router.push("/about");
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  .userHeader {
    background: #fff;
    padding: 0.48rem 0 0.8rem;
    margin-bottom: 0.16rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 1.6rem;
      height: 1.6rem;
      margin: 0 auto;
      border-radius: 50%;
    }
    h2 {
      color: #4a4a4a;
      font-size: 0.34rem;
      height: 0.36rem;
      line-height: 0.36rem;
      text-align: center;
      margin-top: 0.3rem;
      font-weight: 500;
    }
    button {
      width: 2.4rem;
      height: 0.64rem;
      line-height: 0.64rem;
      border-radius: 0.32rem;
      font-size: 0.28rem;
      color: #c61a1a;
      text-align: center;
      border: 0.01rem solid #c60b0b;
      margin-top: 0.24rem;
      background: #fff;
    }
  }
  .menu {
    margin-bottom: 0.16rem;
    background: #fff;
    .menuList {
      margin: 0 0.42rem;
      li {
        border-bottom: 0.01rem #e3e8f1 solid;
        &:last-child {
          border-bottom: none;
        }
        .link {
          padding: 0.48rem 0;
          display: block;
          overflow: hidden;
          position: relative;
          .tips {
            position: absolute;
            border-radius: 0.24rem;
            display: block;
            width: 0.48rem;
            height: 0.48rem;
            background: #bc0a0a;
            text-align: center;
            line-height: 0.48rem;
            color: #ffffff;
            font-size: 0.24rem;
            right: 0.6rem;
            z-index: 100;
          }
          .icon {
            display: block;
            float: left;
            width: 0.48rem;
            height: 0.48rem;
          }
          h2 {
            float: left;
            line-height: 0.48rem;
            height: 0.48rem;
            color: #4a4a4a;
            font-size: 0.32rem;
            margin-left: 0.32rem;
          }
          .arrow {
            float: right;
            width: 0.4rem;
            height: 0.4rem;
            float: right;
            margin-top: 0.04rem;
          }
        }
      }
    }
  }
}
</style>

<style>
html,
body {
  background-color: #f8f8f8;
}
</style>
