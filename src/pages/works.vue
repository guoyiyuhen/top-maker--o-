<template>
  <div class="works">
    <img class="ad" src="./../assets/image/bannertiao@2x.png" alt="">
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
      <div class="box" v-for="(item,index) in list" :key="index" @click="toDetail(item.id)">
        <img class="box-img" :src="item.image" alt="">
        <div class="bottom">
          <h3>{{item.title}}</h3>
          <div>
            <img class="img1" :src="item.designer.avatar" alt="">
            <span>{{item.designer.name}}</span>
            <img class="img2" src="./../assets/image/logo_xiao.png" alt="">
            <span>{{item.favor_nums}}</span>
            <img class="img3" src="./../assets/image/yanjing.png" alt="">
            <span>{{item.views}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="page-box">
      <div class="page-table">
        <el-pagination
          background=""
          layout="prev, pager, next"
          @current-change="currentChange"
          :page-size="size"
          :total="total"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import { Works, Category } from "./../services/article";
export default {
  data() {
    return {
      options1: [
        {
          value: "created_at",
          label: "最新"
        },
        {
          value: "favor_nums",
          label: "最热"
        }
      ],
      options2: [],
      value: "",
      value2: "",
      list: [],
      page: 1,
      total: 0,
      size: 28
    };
  },
  watch: {},
  created() {},
  mounted() {
    Category().then(res => {
      let options2 = [];
      res.items.forEach(item => {
        let obj = {
          value: item.id,
          label: item.name
        }
        options2.push(obj);
      })
      this.options2 = options2;
    });
    this.getList();
  },
  methods: {
    getList() {
      let params = {
        page: this.page,
        page_size: this.size
      };
      if (this.value !== "") {
        params.sort_name = this.value;
        params.sort_val = 4;
      }
      if (this.value2 !== "") {
        params.category_id = this.value2;
      }
      Works(params).then(res => {
        {
          this.list = res.items;
          this.total = res._meta.totalCount;
        }
      });
    },
    selectchange() {
      this.getList();
    },
    currentChange(page) {
      this.page = page;
      this.getList();
    },
    toDetail(id) {
      this.$router.push({
        path: "/detail/" + id
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.works {
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
    margin-bottom: 50px;
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
