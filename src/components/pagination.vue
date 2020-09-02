<template>
    <div class="pagination" :style="'width:' + width + 'px;'">
        <div class="left" :style="'background-color:' + color + ';'" @click="reduce"></div>
        <div class="box" :style="'background-color:' + color + ';'" v-for="(item,index) in list" :key="index">
            <div v-if="item.y" class="img-box" @click="addFive(item.direction)"></div>
            <div v-else :style="item.n == idx ? 'background-color:' + color2 + ';' : ''" @click="changePage(item.n)">{{item.n}}</div>
        </div>
        <div class="right" :style="'background-color:' + color + ';'" @click="add"></div>
    </div>
</template>

<script>
export default {
  props: ["total", "size", "change", "color", "color2"],
  data() {
    return {
      idx: 1,
      list: [],
      n: 0,
      width: 100
    };
  },
  mounted() {
        let n = Math.ceil(this.total / this.size);
        this.n = n;
        let width = n * 42 + 106;
        this.width = width > 484 ? 484 : width;
        this.changeList();
  },
  watch: {
    total(value) {
        let n = Math.ceil(this.total / this.size);
        this.n = n;
        let width = n * 42 + 106;
        this.width = width > 484 ? 484 : width;
        this.changeList();
    }
  },
  methods: {
    changeList() {
      let list = [];
      let idx = this.idx;
      let n = this.n;
      if (n < 8) {
        for (var i = 0; i < n; i++) {
          list.push({
            n: i + 1,
            y: false,
            direction: 'left'
          });
        }
        this.list = list;
      } else {
        if (idx < 5) {
          for (var i = 0; i < 8; i++) {
            if (i == 6) {
              list.push({
                n: 0,
                y: true,
                direction: 'right'
              });
            } else if (i == 7) {
              list.push({
                n: n,
                y: false,
                direction: 'left'
              });
            } else {
              list.push({
                n: i + 1,
                y: false,
                direction: 'left'
              });
            }
          }
          this.list = list;
        } else if (idx > n - 4) {
          for (var i = 0; i < 8; i++) {
            if (i == 1) {
              list.push({
                n: 0,
                y: true,
                direction: 'left'
              });
            } else if (i == 0) {
              list.push({
                n: 1,
                y: false,
                direction: 'left'
              });
            } else {
              list.push({
                n: n - 7 + i,
                y: false,
                direction: 'left'
              });
            }
          }
          this.list = list;
        } else {
          for (var i = 0; i < 9; i++) {
            if (i == 1) {
              list.push({
                n: 0,
                y: true,
                direction: 'left'
              });
            } else if (i == 0) {
              list.push({
                n: 1,
                y: false,
                direction: 'left'
              });
            } else if (i == 7) {
              list.push({
                n: 0,
                y: true,
                direction: 'right'
              });
            } else if (i == 8) {
                list.push({
                n: n,
                y: false,
                direction: 'left'
              });
            } else {
              list.push({
                n: idx + i - 4,
                y: false,
                direction: 'left'
              });
            }
          }
          this.list = list;
        }
      }
      this.change(this.idx);
    },
    add() {
        let idx = this.idx;
        if (idx + 1 > this.n) {
            return;
        }
        idx += 1;
        this.idx = idx;
        this.changeList();
    },
    reduce() {
        let idx = this.idx;
        if (idx - 1 < 1) {
            return;
        }
        idx -= 1;
        this.idx = idx;
        this.changeList();
    },
    addFive(direction) {
        let idx = this.idx;
        let n = this.n;
        if (direction == 'left') {
            if (idx - 5 < 1) {
                idx = 1;
            } else {
                idx = idx - 5;
            }
            this.idx = idx;
        } else {
            if (idx + 5 > n) {
                idx = n;
            } else {
                idx = idx + 5;
            }
            this.idx = idx;
        }
        this.changeList();
    },
    changePage(page) {
        let idx = this.idx;
        if (idx == page) {
            return;
        }
        this.idx = page;
        this.changeList();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.pagination {
    height: 36px;
    margin: 0 auto;
    div {
        width: 36px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        float: left;
        color: #767676;
        cursor: pointer;
        font-size: 14px;
    }
    .box {
        margin-right: 6px;
    }
    .left {
        background: url(../assets/image/jiantou_zuo.png) no-repeat center;
        margin-right: 20px;
    }
    .right {
        background: url(../assets/image/jiantou_you.png) no-repeat center;
        margin-left: 14px;
    }
    .img-box {
        background: url(../assets/image/gengduo.png) no-repeat center;
    }
}
</style>
