<template>
    <div class="personal">
        <div
            class="banner"
            :style="'background-image: url(' + designer.image + ');'"
        >
            <div class="box">
                <img
                    :src="designer.avatar"
                    alt=""
                >
                <div>
                    <h1 :style="isWhite ? 'color: #fff;' : ''">{{designer.name}}</h1>
                    <h2 :style="isWhite ? 'color: #fff;' : ''">{{designer.signature}}</h2>
                    <p :style="isWhite ? 'color: #fff;' : ''">标签：{{designer.tags}}</p>
                    <span :style="isWhite ? 'color: #fff;' : ''">{{designer.views}}</span>
                    <i :style="isWhite ? 'color: #fff;' : ''">人气</i>
                    <span
                        :style="isWhite ? 'color: #fff;margin-left: 50px;' : 'margin-left: 50px;'"
                    >{{designer.favor_nums}}</span>
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
    Designer({}, this.$route.params.id).then(res => {{
      this.designer = res;
      this.isWhite = res.theme_color == 1 ? true : false;
    }})
    this.activeName = this.$route.name;
    if (this.$route.name == 'personal') {
        this.$router.push({
          path: '/representative/' + this.$route.params.id
        })
    }
  },
  methods: {
    toRepresentative() {
        this.$router.push({
          path: '/representative/' + this.$route.params.id
        })
    },
    toThumbs() {
      this.$router.push({
        path: '/thumbs/' + this.$route.params.id
      })
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
