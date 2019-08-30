<template>
    <div class="notice">
        <div class="notice-data">
            <div class="notice-data-box" v-for="(item,index) in noticelist" :key="index" v-show="(index >= idx * 3) && (index < idx * 3 + 3)" @click="toActive(item.id)">
                <div class="notice-data-left">
                    <h1>{{item.tm.M + '-' + item.tm.D}}</h1>
                    <p>{{item.tm.Y}}</p>
                </div>
                <div class="notice-data-right">
                    <h1>{{item.name}}</h1>
                    <p>{{item.brief}}</p>
                </div>
            </div>
        </div>
        <div class="notice-bottom"  v-if="noticelist.length > 3">
            <div></div>
            <ul>
                <li v-for="i in circleList" :key="i" @click="changeValue(i)" :class="idx == i - 1 ? 'notice-active' : ''"></li>
            </ul>
            <div></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        noticelist: Array
    },
    data() {
        return {
            idx: 0
        }
    },
    methods: {
        changeValue(i) {
            this.idx = i - 1;
        },
        toActive(i) {
            this.$router.push({
                path: '/active',
                query: {
                    id: i
                }
            })
        }
    },
    computed: {
        circleList: function () {
            let i = Math.ceil(this.noticelist.length / 3);
            return i
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    .notice-data-box {
        display: flex;
        margin-bottom: 50px;
        cursor: pointer;
    }
    .notice-data-left {
        width: 84px;
        height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        border: 1px solid #b4b4b4;
        color: #666;
        margin-right: 30px;
    }
    .notice-data-left h1 {
        width: 70px;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        padding-bottom: 5px;
        border-bottom: 1px solid #b4b4b4;
        margin-bottom: 5px;
    }
    .notice-data-left p {
        font-size: 16px;
    }
    .notice-data-right {
        width: 75%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        height: 80px;
    }
    .notice-data-right h1 {
        color: #111;
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    .notice-data-right p {
        color: #666;
        font-size: 14px;
        margin-bottom: 10px;
        line-height: 24px;
    }
    .notice-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .notice-bottom div {
        width: 214px;
        height: 1px;
        background: #d4d4d4;
    }
    .notice-bottom ul {
        display: flex;
        margin: 0 30px;
    }
    .notice-bottom ul li {
        width: 10px;
        height: 10px;
        background: #d4d4d4;
        border-radius: 50%;
        margin: 0 5px;
        cursor: pointer;
    }
    .notice-bottom .notice-active {
        background: #0a57f4;
    }
    .notice-data-right h1:hover {
        color: #0a57f4;
    }
</style>
