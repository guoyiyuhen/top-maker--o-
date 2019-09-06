<template>
  <div class="detail">
    <div class="box">
      <div class="left">
        <div class="ql-container">
          <div class="ql-editor" v-html="content"></div>
        </div>
      </div>
      <div class="right">
        <img class="detail-head" :src="designer.avatar" alt="">
        <h2>{{designer.name}}</h2>
        <p>标签：{{designer.tags}}</p>
        <div class="follow">
          <div class="table">
            <img class="list-head" src="./../assets/image/logo_xiao.png" alt="">
            <span>{{favor}}</span>
            <img class="list-head" src="./../assets/image/yanjing.png" alt="">
            <span>{{views}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Works, Monitor } from "./../services/article";
export default {
  data() {
    return {
      content: "",
      designer: {},
      favor: 0,
      views: 0
    };
  },
  watch: {},
  created() {},
  mounted() {
    Monitor({ works_id: this.$route.params.id }).then(res => {
      console.log("浏览成功");
      Works({}, this.$route.params.id).then(res => {
        {
          this.content = res.content;
          this.designer = res.designer;
          this.favor = res.favor_nums;
          this.views = res.views;
        }
      });
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.detail {
  background: #fafafa;
  padding: 64px 0;
  .box {
    width: 1140px;
    overflow: hidden;
    margin: 0 auto;
    background: #ffffff;
    .left {
      width: 761px;
      padding: 44px;
      background: #ffffff;
      float: left;
      border-right: 6px solid #fafafa;
    }
    .right {
      width: 285px;
      float: left;
      padding-top: 44px;
      .detail-head {
        width: 130px;
        height: 130px;
        border-radius: 50%;
        margin: 0 auto;
      }
      h2 {
        color: #3e3a39;
        font-size: 21px;
        text-align: center;
        margin-top: 33px;
        margin-bottom: 37px;
      }
      p {
        color: #367cc1;
        font-size: 15px;
        text-align: center;
      }
      .follow {
        display: table;
        width: 100%;
        margin-top: 31px;
        .table {
          display: table-cell;
          text-align: center;
          vertical-align: middle;
          overflow: hidden;
        }
        span {
          font-size: 12px;
          color: rgba(102, 100, 100, 1);
          margin-left: 3px;
        }
        img:nth-child(1) {
          display: inline-block;
          width: 12px;
          height: 13px;
          vertical-align: middle;
        }
        img:nth-child(3) {
          display: inline-block;
          width: 14px;
          height: 11px;
          margin-left: 10px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
