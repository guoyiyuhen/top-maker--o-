<template>
    <div class="designer">
        <el-carousel height="496px">
            <el-carousel-item v-for="item in 4" :key="item">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
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
            <div class="box" v-for="(item, index) in 6" :key="index" @click="toPersonal(index)">
                <div class="left">
                    <img
                        src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png"
                        alt=""
                    >
                    <h2>SPES神鸦社鼓</h2>
                    <p>标签：摄影</p>
                </div>
                <div class="right">
                    <img
                        src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png"
                        alt=""
                    >
                    <img
                        src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png"
                        alt=""
                    >
                    <img
                        src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png"
                        alt=""
                    >
                </div>
            </div>
        </div>
        <div class="page-box">
            <el-pagination
                background=""
                layout="prev, pager, next"
                @current-change="currentChange"
                :page-size="6"
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
    toPersonal(i) {
        this.$router.push({
            name: 'personal'
        })
    }
  }
};
</script>
<style lang="scss" scoped>
.designer {
  background: #fbfbfb;
  .page-box {
    width: 402px;
    margin: 90px auto;
  }
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
    width: 1054px;
    margin: 0 auto;
    margin-top: 50px;
    .box {
      height: 256px;
      background: #fff;
      overflow: hidden;
      margin-bottom: 10px;
      cursor: pointer;
      .left {
        width: 256px;
        float: left;
        height: 100%;
        margin-right: 50px;
        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin-top: 50px;
          margin-bottom: 19px;
          margin-left: 79px;
        }
        h2 {
            margin-bottom: 23px;
            color: #3E3A39;
            font-size: 17px;
            font-weight: bold;
            text-align: center;
        }
        p {
            color: #367CC1;
            font-size: 13px;
            text-align: center;
        }
      }
      .right {
        height: 154px;
        float: left;
        margin-top: 57px;
        img {
          float: left;
          width: 232px;
          height: 154px;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
