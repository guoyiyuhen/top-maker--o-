<template>
    <div class="works">
        <img class="ad" src="./../assets/image/bannertiao@2x.png" alt="">
        <div class="cascader">
            <h2>筛选：</h2>
            <div>
                <el-select
                    v-model="value"
                    clearable
                    @change="selectchange"
                    placeholder="请选择"
                    size="small"
                >
                    <el-option
                        v-for="item in options1"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    ></el-option>
                </el-select>
            </div>
            <div>
                <el-select
                    v-model="value2"
                    clearable
                    @change="selectchange"
                    placeholder="请选择"
                    size="small"
                >
                    <el-option
                        v-for="item in options2"
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
</template>
<script>
export default {
  data() {
    return {
      options1: [
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
      options2: [
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
      value2: ""
    };
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    selectchange() {
      console.log(this.value, this.value2);
    },
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
.works {
  .page-box {
    width: 402px;
    margin: 90px auto;
  }
  .ad {
    height: 67px;
    width: 100%;
    cursor: pointer;
  }
  .cascader {
    margin: 0 auto;
    margin-top: 50px;
    width: 1140px;
    overflow: hidden;
    h2 {
      color: #999999;
      font-size: 15px;
      float: left;
      height: 32px;
      line-height: 32px;
      margin-left: 300px;
      margin-right: 17px;
    }
    div {
      float: left;
      margin: 0 5px;
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
