<template>
  <div class="home">
    <el-carousel height="496px">
      <el-carousel-item v-for="item in swiper" :key="item.id">
        <img class="swiper-img" :src="item.image" @click="toDetail(item)" alt="">
      </el-carousel-item>
    </el-carousel>
    <div class="box">
      <div class="list" v-for="(item,index) in list" :key="index" @click="toDetail(item)">
        <img class="list-img" :src="item.thumb_image" alt="">
        <div class="list-content">
          <div class="list-left">
            <h2>{{item.title}}</h2>
            <p>{{item.brief}}</p>
          </div>
          <div class="list-right">
            <img class="list-head" :src="item.designer.avatar" alt="">
            <p>{{item.designer.name}}</p>
            <div class="follow">
              <div class="left">
                <img class="list-head" src="./../assets/image/logo_xiao.png" alt="">
                <span>{{item.favor_nums}}</span>
              </div>
              <div class="right">
                <img class="list-head" src="./../assets/image/yanjing.png" alt="">
                <span>{{item.views}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Works, Home } from "./../services/article";
let timer = null;
export default {
  components: {},
  data() {
    return {
      banIdx: 0,
      list: [],
      swiper: []
    };
  },
  watch: {},
  destroyed() {
    clearInterval(timer);
  },
  mounted() {
    this.imgWidth = window.innerWidth;
    Home().then(res => {
      this.swiper = res.banners;
    });
    Works({ is_good: 1 }).then(res => {
      {
        this.list = res.items;
      }
    });
  },
  methods: {
    bannertap(item) {
      this.banIdx = item;
      this.left = -item * this.imgWidth;
    },
    toDetail(item) {
      if (item.type && item.type == 2) {
        location.href = item.jump_url;
      } else {
        this.$router.push({
          path: "/detail/" + item.id
        });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@import "./../style/swiper.min.css";
.home {
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 496px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .swiper-img {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .box {
    width: 1296px;
    margin: 40px auto;
    overflow: hidden;
    .list {
      width: 632px;
      cursor: pointer;
      height: 452px;
      box-shadow: 2px 2px 6px 0px rgba(126, 126, 126, 0.3);
      float: left;
      margin: 8px;
      .list-img {
        height: 307px;
        width: 100%;
      }
      .list-content {
        overflow: hidden;
        padding: 40px 0 28px 28px;
        .list-left {
          width: 450px;
          float: left;
          h2 {
            font-size: 18px;
            font-weight: bold;
            color: rgba(62, 58, 57, 1);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          p {
            font-size: 12px;
            font-weight: 400;
            margin-top: 14px;
            color: rgba(159, 160, 160, 1);
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
        }
        .list-right {
          width: 120px;
          float: right;
          .list-head {
            width: 28px;
            height: 27px;
            border-radius: 50%;
          }
          p {
            font-size: 12px;
            margin-top: 12px;
            margin-bottom: 3px;
            font-weight: 400;
            color: rgba(102, 100, 100, 1);
          }
          .follow {
            overflow: hidden;
            span {
              font-size: 12px;
              color: rgba(102, 100, 100, 1);
              float: left;
              margin-left: 3px;
            }
            .left {
              float: left;
              margin-right: 10px;
              img {
                float: left;
                width: 12px;
                margin-top: 2px;
                height: 13px;
              }
            }
            .right {
              float: left;
              img {
                float: left;
                margin-top: 3px;
                width: 14px;
                height: 11px;
              }
            }
          }
        }
      }
    }
  }
}
</style>