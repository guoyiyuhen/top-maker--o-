<template>
    <div class="detail">
        <div class="box">
            <div class="left" v-html="content"></div>
            <div class="right">
                <img
                    class="detail-head"
                    :src="designer.avatar"
                    alt=""
                >
                <h2>{{designer.name}}</h2>
                <p>标签：{{designer.tags}}</p>
                <div class="follow">
                    <div class="left-c">
                        <img class="list-head" src="./../assets/image/logo_xiao.png" alt="">
                        <span>{{favor}}</span>
                    </div>
                    <div class="right-c">
                        <img class="list-head" src="./../assets/image/yanjing.png" alt="">
                        <span>{{views}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Works } from "./../services/article";
export default {
  data() {
    return {
      content: '',
      designer: {},
      favor: 0,
      views: 0
    };
  },
  watch: {},
  created() {},
  mounted() {
    Works({}, this.$route.params.id).then(res => {{
      this.content = res.content;
      this.designer = res.designer;
      this.favor = res.favor_nums;
      this.views = res.views;
    }})
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
      height: 2000px;
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
          color: #3E3A39;
          font-size: 21px;
          text-align: center;
          margin-top: 33px;
          margin-bottom: 37px;
      }
      p {
          color: #367CC1;
          font-size: 15px;
          text-align: center;
      }
      .follow {
        overflow: hidden;
        margin: 0 auto;
        margin-top: 31px;
        width: 120px;
        span {
          font-size: 12px;
          color: rgba(102, 100, 100, 1);
          float: left;
          margin-left: 3px;
        }
        .left-c {
          float: left;
          margin-right: 10px;
          img {
            float: left;
            width: 12px;
            margin-top: 2px;
            height: 13px;
          }
        }
        .right-c {
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
</style>
