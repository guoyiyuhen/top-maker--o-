<template>
  <div class="detail">
    <div class="position">

      <div class="mark"></div>
    </div>
    <div class="box">
      <div class="left">
        <div class="ql-container">
          <div class="ql-editor" v-html="content" @click="editorClick"></div>
        </div>
      </div>
      <div class="right">
        <img class="detail-head" :src="designer.avatar" @click="todesigner" alt="">
        <h2>{{designer.name}}</h2>
        <p>标签：{{designer.tags}}</p>
        <div class="cmcc">
          <el-row :gutter="20">
            <el-col :span="12" :offset="6">
              <div class="grid-content bg-purple">
                <img
                  src="./../assets/image/logo_xiao.png"
                  alt="取消点赞"
                  title="取消点赞"
                  v-if="isfavor"
                  @click="changefavor(false)"
                >
                <img
                  src="./../assets/image/logo_no.png"
                  alt="点赞"
                  title="点赞"
                  v-else
                  @click="changefavor(true)"
                >
                <span>{{favor}}</span>
                <img src="./../assets/image/yanjing.png" alt="浏览" title="浏览">
                <span>{{views}}</span>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Works,
  Monitor,
  Dofavor,
  Undofavor,
  View2
} from "./../services/article";
export default {
  data() {
    return {
      content: "",
      designer: {},
      favor: 0,
      views: 0,
      isfavor: false,
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      srcList: [
        "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
        "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg"
      ]
    };
  },
  watch: {},
  created() {},
  mounted() {
    Monitor({ works_id: this.$route.params.id }).then(res => {
      this.getList();
    });
  },
  methods: {
    getList() {
      let access_token = localStorage.getItem("access_token");
      if (access_token) {
        Works({}, this.$route.params.id).then(
          res => {
            {
              this.content = res.content;
              this.designer = res.designer;
              this.favor = res.favor_nums;
              this.views = res.views;
              this.isfavor = res.isfavor;
            }
          },
          err => {
            if (err.status == 401) {
              this.getList();
              return;
            }
            this.$message.error(err.message);
          }
        );
      } else {
        View2(this.$route.params.id).then(
          res => {
            {
              this.content = res.content;
              this.designer = res.designer;
              this.favor = res.favor_nums;
              this.views = res.views;
              this.isfavor = res.isfavor;
            }
          },
          err => {
            this.$message.error(err.message);
          }
        );
      }
    },
    changefavor(change) {
      let access_token = localStorage.getItem("access_token");
      if (access_token) {
        if (change) {
          Dofavor({ works_id: this.$route.params.id }).then(
            res => {
              this.$message({
                message: "点赞成功",
                type: "success"
              });
              this.getList();
            },
            err => {
              if (err.status == 401) {
                this.$alert("请重新登陆", "登陆过期", {
                  confirmButtonText: "确定",
                  center: true,
                  callback: action => {
                    location.reload();
                  }
                });
                return;
              }
              this.$message.error(err.message);
            }
          );
        } else {
          Undofavor({ works_id: this.$route.params.id }).then(
            res => {
              this.$message({
                message: "取消点赞",
                type: "success"
              });
              this.getList();
            },
            err => {
              if (err.status == 401) {
                this.$alert("请重新登陆", "登陆过期", {
                  confirmButtonText: "确定",
                  center: true,
                  callback: action => {
                    location.reload();
                  }
                });
                return;
              }
              this.$message.error(err.message);
            }
          );
        }
      } else {
        this.$message("请登陆");
      }
    },
    todesigner() {
      this.$router.push({
        path: "/representative/" + this.designer.id
      });
    },
    editorClick(e) {
      if (e.path[0].src) {

      }
    }
  }
};
</script>
<style lang="scss" scoped>
.detail {
  background: #fafafa;
  padding: 64px 0;
  .position {
    position: fixed;
    width: 100%;
    height: 100%;
    .mark {

    }
  }
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
      .cmcc {
        text-align: center;
        margin-top: 30px;
        span {
          font-size: 12px;
          color: rgba(102, 100, 100, 1);
          margin-left: 3px;
        }
        img:nth-child(1) {
          display: inline;
          vertical-align: middle;
        }
        img:nth-child(3) {
          display: inline;
          margin-left: 10px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
