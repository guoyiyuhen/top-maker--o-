<template>
    <div class="personal">
        <div
            class="banner"
            style="background: url(http://bernouly.oss-cn-beijing.aliyuncs.com/images/about/about2.png) no-repeat center;background-size: 100% 100%;"
        >
            <div class="box">
                <img
                    src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png"
                    alt=""
                >
                <div>
                    <h1 :style="isWhite ? 'color: #fff;' : ''">YUM汤汤</h1>
                    <h2 :style="isWhite ? 'color: #fff;' : ''">创意泡泡无限冒的汤宝宝</h2>
                    <p :style="isWhite ? 'color: #fff;' : ''">标签：平面设计、插画设计</p>
                    <span :style="isWhite ? 'color: #fff;' : ''">34768</span>
                    <i :style="isWhite ? 'color: #fff;' : ''">人气</i>
                    <span
                        :style="isWhite ? 'color: #fff;margin-left: 50px;' : 'margin-left: 50px;'"
                    >450</span>
                    <i :style="isWhite ? 'color: #fff;' : ''">赞</i>
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
export default {
  data() {
    return {
      isWhite: true,
      activeName: "representative"
    };
  },
  watch: {
    $route(route) {
      this.activeName = route.name;
    }
  },
  created() {},
  mounted() {},
  methods: {
    toRepresentative() {
      this.$router.push({
        name: "representative"
      });
    },
    toThumbs() {
      this.$router.push({
        name: "thumbs"
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
    .box {
      width: 1140px;
      margin: 0 auto;
      height: 180px;
      overflow: hidden;
      img {
        float: left;
        width: 180px;
        height: 180px;
        border-radius: 50%;
      }
      div {
        margin-left: 35px;
        float: left;
        h1 {
          color: #3e3a39;
          font-size: 34px;
          font-weight: bold;
        }
        h2 {
          font-size: 16px;
          color: #666464;
          margin-top: 13px;
          margin-bottom: 36px;
        }
        p {
          color: #666464;
          font-size: 13px;
          margin-bottom: 4px;
        }
        span {
          color: #272727;
          font-weight: bold;
          font-size: 29px;
        }
        i {
          color: #666464;
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
    margin-top: 32px;
    margin-bottom: 44px;
    div {
      color: #040404;
      font-size: 24px;
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
