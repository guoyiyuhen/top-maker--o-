<template>
    <div class="mactive">
        <div class="mactive-banner"><h1>Company News</h1><span>公司动态</span></div>
        <div class="mactive-body">
            <h2 class="mactive-body-time">{{tm.Y + '.' + tm.M + '.' + tm.D}}</h2>
            <h1 class="mactive-body-title">{{name}}</h1>
            <div class="mactive-body-html" v-html="html"></div>
        </div>
        <div class="mactive-bottom">
            <p @click="getList(c1.id)">上一篇：{{c1.name}}</p>
            <p @click="getList(c2.id)">下一篇：{{c2.name}}</p>
        </div>
    </div>
</template>
<script>
import { Article, timestampToTime } from './../../services/article';
export default {
    components: {

    },
    data() {
        return {
            t1: '博努力MSP多学科仿真平台1.0发布',
            t2: '博努力MSP多学科仿真平台1.0发布',
            html: '',
            name: '',
            tm: {
                Y:'',
                M:'',
                D:''
            },
            c1: {
                id: '',
                name: ''
            },
            c2: {
                id: '',
                name: ''
            }
        };
    },
    watch: {},
    created() {},
    mounted() {
        this.getList(this.$route.query.id);
    },
    methods: {
        getList(id) {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            Article({category_id: 80}).then(res => {
                let ci1 = 0;
                let ci2 = 0;
                let c1 = {};
                let c2 = {};

                res.items.forEach((ele, index) => {
                    if (ele.id == id) {
                        this.html = ele.content;
                        this.tm = timestampToTime(ele.release_time);
                        this.name = ele.name;
                        ci1 = index - 1;
                        ci2 = index + 1;
                    }
                })

                if (res.items.length <= 2) {
                    return;
                }
                if (ci1 == -1) {
                    ci1 = res.items.length - 1;
                }
                if (ci2 >= res.items.length) {
                    ci2 = 0;
                }
                c1.id = res.items[ci1].id;
                c1.name = res.items[ci1].name;
                c2.id = res.items[ci2].id;
                c2.name = res.items[ci2].name;
                this.c1 = c1;
                this.c2 = c2;
            })
        }
    }
};
</script>
<style>
.mactive {
    background: #eee;
}
.mactive-banner h1 {
    font-size: .5rem;
}
.mactive-banner span {
    font-size: .24rem;
    margin-top: .1rem;
}
.mactive-body {
    padding: .6rem .4rem;
}
.mactive-body-title {
    font-size: .36rem;
    color: #333;
    margin: .2rem 0 .5rem 0;
}
.mactive-body-time {
    font-size: .48rem;
    color: #0055d3;
}

.mactive-bottom {
    padding: .4rem;
    border-top: .01rem solid #e7e7e7;
}
.mactive-bottom p {
    font-size: .26rem;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
    color: #aaa;
    margin-bottom: .3rem;
}

.mactive-bottom p:active {
    color: #0055d3;
}

.mactive-body-html img {
    width: 100%;
}
.mactive-body-html {
    font-size: .24rem;
}
</style>