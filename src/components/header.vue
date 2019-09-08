<template>
    <div class="header">
        <div class="box">
            <div class="box-left">
                <img src="./../assets/image/logo_dengluye@2x.png" @click="toHome" alt="">
            </div>
            <div class="box-right">
                <ul class="nav">
                    <li
                        :class="item.active == activeName ? 'active' : ''"
                        v-for="(item,index) in menu"
                        :key="index"
                        @click="changeNav(item.active)"
                    >{{item.name}}</li>
                </ul>
                <div class="login" v-if="isres">
                    <!-- <img src="./../assets/image/sousuo@2x.png" alt=""> -->
                    <span>欢迎回来
                        <i style="color: #367cc1;">{{nickname}}</i>
                    </span>
                    <span @click="goOut">退出</span>
                </div>
                <div class="login" v-else>
                    <!-- <img src="./../assets/image/sousuo@2x.png" alt=""> -->
                    <span @click="login(true)">登陆</span>
                    <span @click="login(false)">注册</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Logout } from "./../services/article";
export default {
  props: ["callBack", "changelogin", "nickname", "isres"],
  data() {
    return {
      menu: [
        {
          name: "精选",
          active: "home"
        },
        {
          name: "作品",
          active: "works"
        },
        {
          name: "设计师",
          active: "designer"
        }
      ],
      activeName: "home"
    };
  },
  mounted() {
    if (
      this.$route.path.split("/")[1] === "representative" ||
      this.$route.path.split("/")[1] === "thumbs"
    ) {
      this.activeName = "designer";
      return;
    }
    if (this.$route.path.split("/")[1] === "detail") {
      this.activeName = "works";
      return;
    }
    this.activeName = this.$route.path.split("/")[1];
  },
  watch: {
    $route(route) {
      if (route.name === "representative" || route.name === "thumbs") {
        this.activeName = "designer";
        return;
      }
      if (route.name === "detail") {
        this.activeName = "works";
        return;
      }
      this.activeName = route.path.split("/")[1];
    }
  },
  methods: {
    changeNav(nav) {
      this.activeName = nav;
      this.$router.push({
        name: nav
      });
    },
    login(change) {
      this.callBack(true, change);
    },
    toHome() {
      this.$router.push({
        name: "home"
      });
    },
    goOut() {
      Logout().then(res => {
        localStorage.removeItem("access_token");
        localStorage.removeItem("nickname");
        this.changelogin(false, "");
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  width: 100%;
  height: 67px;
  background: #fff;
  .box {
    height: 67px;
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .box-left {
      float: left;
      padding-top: 6px;
      img {
        width: 43px;
        height: 56px;
        cursor: pointer;
      }
    }
    .box-right {
      float: right;
    }
  }
  .nav {
    float: left;
    font-size: 14px;
    padding-top: 20px;
    margin-right: 130px;
    li {
      float: left;
      height: 43px;
      line-height: 43px;
      padding: 0 5px;
      margin-right: 46px;
      border-bottom: 4px solid #fff;
      cursor: pointer;
    }
    .active {
      border-bottom: 4px solid #000;
    }
  }
  .login {
    float: left;
    font-size: 12px;
    padding-top: 35px;
    img {
      display: block;
      float: left;
      width: 11px;
      height: 12px;
      margin-right: 15px;
      margin-top: 2px;
      cursor: pointer;
    }
    span {
      display: block;
      float: left;
      font-size: 12px;
      margin-right: 14px;
      cursor: pointer;
    }
  }
}
</style>
