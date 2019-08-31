<template>
    <div class="home">
        <el-carousel height="496px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>



        <div class="box">
            <div class="list" v-for="(item,index) in [1,2,3,4,5,6,7]" :key="index" @click="toDetail(index)">
                <img
                    class="list-img"
                    src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png"
                    alt=""
                >
                <div class="list-content">
                    <div class="list-left">
                        <h2>做含金量最高的摄影培训！右视觉摄影弟子班学生作品</h2>
                        <p>灵感来源于小灯泡有趣的结构特征。被拉伸的底足，圆润的储存空间都有意放大造型的幽默感。无把手壶身强化了与人更直接的接触，赋予人与器物全新的体验感。</p>
                    </div>
                    <div class="list-right">
                        <img
                            class="list-head"
                            src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png"
                            alt=""
                        >
                        <p>suomudesign</p>
                        <div class="follow">
                            <div class="left">
                                <img class="list-head" src="./../assets/image/logo_xiao.png" alt="">
                                <span>10000</span>
                            </div>
                            <div class="right">
                                <img class="list-head" src="./../assets/image/yanjing.png" alt="">
                                <span>10000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Article, timestampToTime } from "./../services/article";
let timer = null;
export default {
  components: {},
  data() {
    return {
      banIdx: 0
    };
  },
  watch: {},
  destroyed() {
    clearInterval(timer);
  },
  mounted() {
    this.imgWidth = window.innerWidth;
  },
  methods: {
    bannertap(item) {
      this.banIdx = item;
      this.left = -item * this.imgWidth;
    },
    toDetail(i) {
        this.$router.push({
            name: 'detail'
        })
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
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
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