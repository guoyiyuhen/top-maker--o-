<template>
  <div class="thumbs">
    <div class="content" v-if="isListShow">
      <div class="select">
        <div class="select-box">
          <el-select v-model="value" clearable @change="selectchange" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
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
      <h2>暂无点赞</h2>
      <div @click="toHome">去首页看看</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "黄金糕",
          label: "黄金糕"
        },
        {
          value: "双皮奶",
          label: "双皮奶"
        },
        {
          value: "蚵仔煎",
          label: "蚵仔煎"
        },
        {
          value: "龙须面",
          label: "龙须面"
        },
        {
          value: "北京烤鸭",
          label: "北京烤鸭"
        }
      ],
      value: "",
      isListShow: true
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    selectchange() {
      console.log(this.value);
    },
    currentChange(page) {
      console.log(page);
    },
    toHome() {
      this.$router.push({
        name: 'home'
      })
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
.thumbs {
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
      background-color: #f7f7f7;
      color: #282725;
      font-size: 16px;
      cursor: pointer;
    }
  }
  .content {
    width: 100%;
  }
  .select {
    margin: 0 auto;
    margin-bottom: 24px;
    width: 1140px;
    overflow: hidden;
    .select-box {
      width: 150px;
      height: 45px;
      float: right;
      margin-right: 10px;
    }
  }
  .page-box {
    width: 402px;
    margin: 90px auto;
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
