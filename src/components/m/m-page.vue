<template>
    <div class="mpage">
        <div class="mpage-box">
            <ul :style="'left: ' + left + 'rem'">
                <li v-for="(item,index) in list" :key="index" :class="cidx == index ? 'mpage-active' : ''" @click="changeValue(index)">{{item}}</li>
            </ul>
            <div class="mpage-box-jiantou">
                <div @click="changeUl(1)"></div>
                <div @click="changeUl(2)"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['list', 'idx'],
    data() {
        return {
            left: 0,
            aidx: 0
        }
    },
    mounted() {
        this.aidx = this.idx;
    },
    watch: {
        idx: {
            handler(newName, oldName) {
                this.aidx = newName;
                let len = this.list.length - 3;
                if (newName <= len) {
                    this.left = - (2.1 * newName);
                } else {
                    this.left = - (2.1 * len);
                }
            },
            immediate: true
        }
    },
    methods: {
        changeUl(n) {
            let len = this.list.length - 3;
            if (n == 1) {
                if (this.left + 2.1 > 0) {
                    return;
                }
                this.left += 2.1;
            } else if (n == 2) {
                if (this.left - 2.1 < -(len * 2.1)) {
                    return;
                }
                this.left -= 2.1;
            }
        },
        changeValue(idx) {
            this.cidx = idx;
            this.$emit('changv', idx);
        }
    },
    computed: {
        cidx: {
            get() {
                return this.aidx;
            },
            set(value) {
                this.aidx = value;
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mpage {
        width: 100%;
        height: 1rem;
        position: relative;
    }
    .mpage-box {
        width: 7rem;
        height: 1rem;
        position: absolute;
        left: 50%;
        margin-left: -3.5rem;
        top: -.4rem;
        background: #fff;
        color: #333;
        font-size: .24rem;
        overflow: hidden;
    }
    .mpage-box ul {
        overflow: hidden;
        position: absolute;
        top: 0;
        height: 1rem;
    }
    .mpage-box ul li {
        float: left;
        width: 2.1rem;
        height: 1rem;
        text-align: center;
        line-height: 1rem;
    }
    .mpage-active {
        background: #0055d3;
        color: #fff;
    }

    .mpage-box-jiantou {
        position: absolute;
        width: .8rem;
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        right: 0;
        top: 0;
        z-index: 1000;
    }
    .mpage-box-jiantou div {
        width: .12rem;
        height: .18rem;
        margin: .06rem;
    }
    .mpage-box-jiantou div:nth-child(1) {
        background: url('./../../assets/m-product/mproduct2.png') center no-repeat;
        background-size: 100% 100%;
    }
    .mpage-box-jiantou div:nth-child(2) {
        background: url('./../../assets/m-product/mproduct4.png') center no-repeat;
        background-size: 100% 100%;
    }
    .mpage-box-jiantou div:nth-child(1):active {
        background: url('./../../assets/m-product/mproduct3.png') center no-repeat;
        background-size: 100% 100%;
    }
    .mpage-box-jiantou div:nth-child(2):active {
        background: url('./../../assets/m-product/mproduct5.png') center no-repeat;
        background-size: 100% 100%;
    }
</style>
