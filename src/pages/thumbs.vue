<template>
  <div class="thumbs">
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
    <div class="content" v-if="isListShow">
      <div class="list">
        <div class="box" v-for="(item,index) in list" :key="index" @click="toDetail(item.id)">
          <img class="box-img" :src="item.thumb_image" alt="">
          <div class="bottom">
            <h3>{{item.title}}</h3>
            <div>
              <img class="img1" :src="item.designer.avatar" alt="">
              <span>{{item.designer.name}}</span>
              <img class="img2" src="./../assets/image/logo_xiao.png" alt="赞" title="赞">
              <span>{{item.favor_nums}}</span>
              <img class="img3" src="./../assets/image/yanjing.png" alt="浏览" title="浏览">
              <span>{{item.views}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="page-box">
        <div class="page-table">
          <com-mpage
            :size="size"
            :total="total"
            :change="currentChange"
            :color2="'#fff'"
            :color="'#fbfbfb'"
          ></com-mpage>
        </div>
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
import { Favors, Category } from "./../services/article";
import comMpage from "@/components/pagination";
export default {
  components: {
    comMpage
  },
  data() {
    return {
      options: [],
      value: "",
      isListShow: true,
      list: [],
      page: 1,
      total: 0,
      size: 20
    };
  },
  watch: {},
  created() {},
  mounted() {
    Category().then(
      res => {
        let options = [];
        res.items.forEach(item => {
          let obj = {
            value: item.id,
            label: item.name
          };
          options.push(obj);
        });
        this.options = options;
      },
      err => {
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
        designer_id: this.$route.params.id
      };
      if (this.value !== "") {
        params.category_id = this.value;
      }
      Favors(params).then(
        res => {
          {
            this.list = res.items;
            this.total = res._meta.totalCount;
            if (res.items.length == 0) {
              this.isListShow = false;
            } else {
              this.isListShow = true;
            }
          }
        },
        err => {
          this.$message.error(err.message);
        }
      );
    },
    selectchange() {
      this.getList();
    },
    currentChange(page) {
      this.page = page;
      this.getList();
    },
    toHome() {
      this.$router.push({
        name: "home"
      });
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
    display: table;
    width: 100%;
    padding: 90px 0;
    .page-table {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
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
            margin-top: 3px;
            float: left;
            margin-left: 38px;
          }
          .img3 {
            margin-top: 3px;
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
