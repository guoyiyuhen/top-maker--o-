<template>
  <div class="designer">
    <el-carousel :height="imgHeight + 'px'">
      <el-carousel-item v-for="item in swiper" :key="item.id">
        <div
          class="banner"
          :style="'background-image: url(' + item.image + ');'"
          @click="toPersonal(item.id)"
        >
          <!-- <div class="box">
            <h1 :style="item.theme_color == 1 ? 'color: #fff;' : ''">{{item.name}}</h1>
            <p :style="item.theme_color == 1 ? 'color: #fff;' : ''">标签：{{item.tags}}</p>
            <h2 :style="item.theme_color == 1 ? 'color: #fff;' : ''">{{item.signature}}</h2>
          </div>-->
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="cascader">
      <h2>筛选：</h2>
      <div>
        <el-select v-model="value" clearable @change="selectchange" placeholder="请选择" size="small">
          <el-option
            v-for="item in options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div>
        <el-select v-model="value2" clearable @change="selectchange" placeholder="请选择" size="small">
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
      <div class="box" v-for="(item, index) in list" :key="index" @click="toPersonal(item.id)">
        <div class="left">
          <img :src="item.avatar" alt />
          <h2>{{item.name}}</h2>
          <p>标签：{{item.tags}}</p>
        </div>
        <div class="right">
          <img :src="item2.image" alt v-for="(item2,index2) in item.works" :key="index2" />
        </div>
      </div>
    </div>
    <div class="page-box">
      <div class="page-table">
        <com-mpage
          :size="size"
          :total="total"
          :change="currentChange"
          :color="'#fff'"
          :color2="'#fbfbfb'"
        ></com-mpage>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Designer,
  DesignrCategory,
  DesignerRecommend,
} from "./../services/article";
import comMpage from "@/components/pagination";
export default {
  components: {
    comMpage,
  },
  data() {
    return {
      options1: [
        {
          value: "created_at",
          label: "最新",
        },
        {
          value: "favor_nums",
          label: "最热",
        },
      ],
      options2: [],
      value: "",
      value2: "",
      list: [],
      page: 1,
      total: 1,
      size: 6,
      swiper: [],
    };
  },
  watch: {},
  computed: {
    imgHeight() {
      return Math.floor(this.$store.state.width / 3.7); //需要监听的数据
    },
  },
  created() {},
  mounted() {
    DesignerRecommend()
      .then((res) => {
        this.swiper = res.items;
      })
      .catch((err) => {
        this.$message.error(err.message);
      });
    DesignrCategory().then(
      (res) => {
        let options2 = [];
        res.items.forEach((item) => {
          let obj = {
            value: item.id,
            label: item.name,
          };
          options2.push(obj);
        });
        this.options2 = options2;
      },
      (err) => {
        this.$message.error(err.message);
      }
    );
    this.getList();
  },
  methods: {
    getList() {
      let params = {
        page: this.page,
        page_size: this.size,
      };
      if (this.value !== "") {
        params.sort_name = this.value;
        params.sort_val = 4;
      }
      if (this.value2 !== "") {
        params.category_id = this.value2;
      }
      Designer(params).then(
        (res) => {
          {
            this.list = res.items;
            this.total = res._meta.totalCount;
          }
        },
        (err) => {
          this.$message.error(err.message);
        }
      );
    },
    selectchange() {
      this.getList();
    },
    currentChange(page) {
      this.page = page;
      this.getList(this.page);
    },
    toPersonal(id) {
      this.$router.push({
        path: "/representative/" + id,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.designer {
  background: #fbfbfb;
  .banner {
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-position: center;
    cursor: pointer;
    .box {
      width: 575px;
      margin-left: 213px;
      padding-top: 178px;
      h1 {
        color: #3e3a39;
        font-size: 30px;
        font-weight: bold;
      }
      h2 {
        font-size: 16px;
        color: #666464;
      }
      p {
        color: #666464;
        font-size: 14px;
        margin-top: 13px;
        margin-bottom: 48px;
      }
    }
  }
  .page-box {
    display: table;
    width: 100%;
    padding: 90px 0;
    .page-table {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
    }
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
          color: #3e3a39;
          font-size: 17px;
          font-weight: bold;
          text-align: center;
        }
        p {
          color: #367cc1;
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
          width: 231px;
          height: 154px;
          margin-right: 4px;
        }
      }
    }
  }
}
</style>
