<template>
    <div class="representative">
        <div class="content" v-if="isListShow">
            <div class="button">
                <div>上传作品</div>
            </div>
            <div class="list">
                <div class="box" v-for="(item,index) in 20" :key="index" @click="toDetail(index)">
                    <img
                        class="box-img"
                        src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png"
                        alt=""
                    >
                    <div class="bottom">
                        <h3>小猪佩奇 《Hidden Innocence》</h3>
                        <div>
                            <img
                                class="img1"
                                src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png"
                                alt=""
                            >
                            <span>mos摩森文斯</span>
                            <img class="img2" src="./../assets/image/logo_xiao.png" alt="">
                            <span>10000</span>
                            <img class="img3" src="./../assets/image/yanjing.png" alt="">
                            <span>10000</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="page-box">
                <el-pagination
                    background=""
                    layout="prev, pager, next"
                    @current-change="currentChange"
                    :page-size="28"
                    :total="1000"
                ></el-pagination>
            </div>
        </div>
            <div v-else class="noList">
      <img src="./../assets/image/zanwudianzan.png" alt="">
      <h2>暂无作品</h2>
      <div>去上传作品</div>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
        isListShow: true
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    currentChange(page) {
      console.log(page);
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
.representative {
      .noList {
    padding-bottom: 130px;
    padding-top: 130px;
    img {
      width: 126px;
      height: 138px;
      margin: 0 auto;
    }
    h2 {
      margin-top: 15px;
      margin-bottom: 40px;
      color: #040404;
      font-size: 21px;
      text-align: center;
    }
    div {
      margin: 0 auto;
      width: 150px;
      height: 45px;
      text-align: center;
      line-height: 45px;
      border-radius: 6px;
      background-color: #333333;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }
  }
    .content {
        width: 100%;
    }
  .page-box {
    width: 402px;
    margin: 90px auto;
  }
  .button {
    margin: 0 auto;
    margin-bottom: 24px;
    width: 1140px;
    height: 45px;
    overflow: hidden;
    div {
      width: 150px;
      height: 45px;
      float: right;
      background: #f7f7f7;
      border-radius: 6px;
      text-align: center;
      line-height: 45px;
      color: #282725;
      font-size: 16px;
      cursor: pointer;
      margin-right: 10px;
    }
  }
  .list {
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 200px;
    width: 1140px;
    overflow: hidden;
    .box {
      width: 274px;
      cursor: pointer;
      float: left;
      margin: 5px;
      height: 261px;
      .box-img {
        height: 186px;
        width: 100%;
      }
      .bottom {
        height: 61px;
        padding-left: 16px;
        padding-top: 14px;
        background: #fafafa;
        h3 {
          margin-bottom: 14px;
          font-size: 14px;
          color: #3e3a39;
          font-weight: bold;
        }
        div {
          height: 21px;
          .img1 {
            width: 21px;
            height: 21px;
            float: left;
            border-radius: 50%;
          }
          .img2 {
            width: 12px;
            height: 13px;
            margin-top: 4px;
            float: left;
            margin-left: 38px;
          }
          .img3 {
            width: 14px;
            height: 11px;
            margin-top: 5px;
            float: left;
            margin-left: 11px;
          }
          span {
            color: #666464;
            font-size: 12px;
            float: left;
            height: 21px;
            line-height: 21px;
            margin-left: 4px;
          }
        }
      }
    }
  }
}
</style>
