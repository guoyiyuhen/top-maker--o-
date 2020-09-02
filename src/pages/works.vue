<template>
  <div class="works">
    <a :href="jump_url ? jump_url : ''">
      <img class="ad" :src="image_jump" alt="">
    </a>
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
        <img class="box-img" :src="item.thumb_image" alt="">
        <div class="bottom">
          <h3>{{item.title}}</h3>
          <div>
            <img class="img1" :src="item.designer.avatar" alt="">
            <span>{{item.designer.name}}</span>
            <img class="img2" src="./../assets/image/logo_no.png" alt="赞" title="赞">
            <span>{{item.favor_nums}}</span>
            <img class="img3" src="./../assets/image/yanjing.png" alt="浏览" title="浏览">
            <span>{{item.views}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="page-box">
      <div class="page-table" id="cmcc">
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
</template>
<script>
import { Works, Category, Article } from "./../services/article";
import comMpage from "@/components/pagination";
export default {
  components: {
    comMpage
  },
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
      size: 28,
      image_jump: "",
      jump_url: ""
    };
  },
  watch: {},
  created() {},
  mounted() {
    Article({
      category_id: 3,
      type: 2
    }).then(
      res => {
        if (res.items.length > 0) {
          this.image_jump = res.items[0].image;
          this.jump_url = res.items[0].jump_url;
        }
      },
      err => {
        this.$message.error(err.message);
      }
    );
    Category().then(
      res => {
        let options2 = [];
        res.items.forEach(item => {
          let obj = {
            value: item.id,
            label: item.name
          };
          options2.push(obj);
        });
        this.options2 = options2;
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
        page_size: this.size
      };
      if (this.value !== "") {
        params.sort_name = this.value;
        params.sort_val = 4;
      }
      if (this.value2 !== "") {
        params.category_id = this.value2;
      }
      Works(params).then(
        res => {
          {
            this.list = res.items;
            this.total = res._meta.totalCount;
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
      // this.page = page;
      // this.getList();
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
    width: 1125px;
    overflow: hidden;
    .box {
      width: 270px;
      cursor: pointer;
      float: left;
      margin: 5px;
      height: 261px;
      .box-img {
        height: 180px;
        width: 270px;
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
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
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
            vertical-align: middle;
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
