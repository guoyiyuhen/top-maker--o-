<template>
  <div class="personal">
    <div class="banner" :style="'background-image: url(' + designer.image + ');'">
      <div class="bg"></div>
      <div class="box">
        <img :src="designer.avatar" alt="">
        <div>
          <h1>{{designer.name}}</h1>
          <p>标签：{{designer.tags}}</p>
          <span>{{designer.views}}</span>
          <i>人气</i>
          <span>{{designer.favor_nums}}</span>
          <i>赞</i>
        </div>
      </div>
    </div>
    <div class="menu">
      <div @click="toRepresentative" :class="activeName == 'representative' ? 'active' : ''">作品</div>
      <div @click="toThumbs" :class="activeName == 'thumbs' ? 'active' : ''">点赞</div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import { Designer } from "./../services/article";
export default {
  data() {
    return {
      isWhite: true,
      activeName: "representative",
      designer: {}
    };
  },
  watch: {
    $route(route) {
      this.activeName = route.name;
    }
  },
  created() {},
  mounted() {
    Designer({}, this.$route.params.id).then(
      res => {
        {
          this.designer = res;
          this.isWhite = res.theme_color == 1 ? true : false;
        }
      },
      err => {
        this.$message.error(err.message);
      }
    );
    this.activeName = this.$route.name;
  },
  methods: {
    toRepresentative() {
      this.$router.push({
        path: "/representative/" + this.$route.params.id
      });
    },
    toThumbs() {
      this.$router.push({
        path: "/thumbs/" + this.$route.params.id
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.personal {
  .banner {
    width: 100%;
    height: 329px;
    padding-top: 178px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    position: relative;
    .bg {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 90px;
      z-index: 10;
      background: -webkit-linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.6)
      ); /* Safari 5.1 - 6.0 */
      background: -o-linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.6)
      ); /* Opera 11.1 - 12.0 */
      background: -moz-linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.6)
      ); /* Firefox 3.6 - 15 */
      background: linear-gradient(
        rgba(255, 255, 255, 0),
        rgba(0, 0, 0, 0.6)
      ); /* 标准的语法 */
    }
    .box {
      width: 1140px;
      height: 180px;
      position: absolute;
      bottom: -90px;
      z-index: 100;
      left: 50%;
      margin-left: -570px;
      img {
        float: left;
        width: 180px;
        height: 180px;
        border-radius: 50%;
      }
      div {
        margin-left: 35px;
        padding-top: 24px;
        color: #fff;
        float: left;
        h1 {
          float: left;
          font-size: 34px;
          font-weight: bold;
        }
        h2 {
          float: left;
          font-size: 16px;
        }
        p {
          font-size: 13px;
          float: left;
          margin-left: 200px;
          padding-top: 18px;
        }
        span {
          font-weight: bold;
          font-size: 29px;
          margin-left: 100px;
        }
        i {
          font-size: 14px;
          margin-left: 7px;
        }
      }
    }
  }
  .menu {
    width: 256px;
    margin: 0 auto;
    overflow: hidden;
    margin-top: 132px;
    margin-bottom: 44px;
    div {
      color: #040404;
      font-size: 20px;
      float: left;
      margin: 0 33px;
      padding: 5px;
      cursor: pointer;
      border-bottom: 4px solid #fff;
    }
    .active {
      border-bottom: 4px solid #000;
    }
  }
}
</style>
