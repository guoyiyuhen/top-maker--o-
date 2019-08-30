<template>
    <div class="active-home">
        <com-returntop></com-returntop>
        <img class="active-banner" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/about/about2.png" alt="">
        <div class="active-top">
            <div class="active-top-box">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active6.png" class="active-top-box-img" alt="">
                <div v-for="(item,index) in titleList" :key="index">
                    <img v-show="index !== 0" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active5.png" alt="">
                    <span>{{item}}</span>
                </div>
            </div>
        </div>
        <div class="active-bottom">
            <div class="active-bottom-menu">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active21.png" alt="">
                <h1>公司动态</h1>
                <p>News</p>
                <div></div>
            </div>
            <div class="active-bottom-right">
                <div class="active-bottom-rtop">
                    <div>
                        <p>{{tm.D}}</p>
                        <span>{{tm.Y + '.' + tm.M}}</span>
                    </div>
                    <div></div>
                    <div>{{name}}</div>
                </div>
                <div class="active-bottom-rmod" v-html="html">

                </div>
                <div class="active-bottom-rbom">
                    <div class="active-bottom-rbbox" @click="getList(c1.id)">
                        <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active23.png" alt="">
                        <div>
                            <p>{{c1.name}}</p>
                            <span>{{c1.tm.M + '-' + c1.tm.D}}</span>
                        </div>
                    </div>
                    <div class="active-bottom-rbbox" @click="getList(c2.id)">
                        <div style="text-align: right;">
                            <p>{{c2.name}}</p>
                            <span>{{c2.tm.M + '-' + c2.tm.D}}</span>
                        </div>
                        <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active22.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import comReturntop from "@/components/returntop";
import { Article, timestampToTime } from './../services/article';
export default {
    components: {
        comReturntop
    },
    data() {
        return {
            titleList: ['首页','公司动态'],
            html: '',
            name: '',
            tm: {
                Y:'',
                M:'',
                D:''
            },
            c1: {
                id: '',
                name: '',
                tm: {
                    Y: '',
                    M: '',
                    D: ''
                }
            },
            c2: {
                id: '',
                name: '',
                tm: {
                    Y: '',
                    M: '',
                    D: ''
                }
            }
        };
    },
    mounted() {
        this.getList(this.$route.query.id);
    },
    watch: {

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
                c1.tm = timestampToTime(res.items[ci1].release_time);
                c2.id = res.items[ci2].id;
                c2.name = res.items[ci2].name;
                c2.tm = timestampToTime(res.items[ci2].release_time);
                this.c1 = c1;
                this.c2 = c2;
            })
        }
    }
};
</script>
<style>
.active-home {
    padding-bottom: 80px;
}
.active-banner {
    width: 100%;
    height: 450px;
}
.active-top {
    width: 100%;
    height: 90px;
    background: #eee;
}
.active-top-box {
    width: 1200px;
    margin: 0 auto;
    height: 90px;
    display: flex;
    align-items: center;
}
.active-top-box div {
    font-size: 14px;
    color: #999;
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.active-top-box div img {
    width: 6px;
    height: 6px;
    margin-right: 20px;
}
.active-top-box-img {
    width: 12px;
    height: 12px;
    margin-right: 14px;
}
.active-bottom {
    width: 1200px;
    margin: 0 auto;
    display: flex;
}
.active-bottom-menu {
    width: 330px;
    height: 640px;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active1.png') center no-repeat;
    background-size: 100% 100%;
    position: relative;
    padding: 50px 30px;
}
.active-bottom-right {
    width: 760px;
    padding-top: 40px;
    padding-left: 110px;
}
.active-bottom-menu img {
    width: 88px;
    height: 88px;
}
.active-bottom-menu h1 {
    font-size: 48px;
    color: #fff;
    margin-top: 22px;
    font-weight: bold;
}
.active-bottom-menu p {
    font-size: 36px;
    color: #7399c1;
    margin-top: 14px;
}
.active-bottom-menu div {
    width: 70px;
    height: 4px;
    background: #f39749;
    margin-top: 40px;
}

.active-bottom-rtop {
    display: flex;
}
.active-bottom-rtop div:nth-child(1) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
}
.active-bottom-rtop div:nth-child(1) p {
    font-size: 70px;
    color: #dedede;
}
.active-bottom-rtop div:nth-child(1) span {
    color: #999;
    font-size: 24px;
}
.active-bottom-rtop div:nth-child(2) {
    width: 8px;
    height: 130px;
    background: #dedede;
    margin-left: 30px;
    margin-right: 25px;
}

.active-bottom-rtop div:nth-child(3) {
    font-size: 22px;
    color: #0055d3;
}
.active-bottom-rmod {
    padding-top: 60px;
    padding-bottom: 40px;
}
.active-bottom-rbom {
    width: 100%;
    border-top: 1px solid #e6e6e6;
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
}

.active-bottom-rbbox {
    display: flex;
    align-items: center;
}

.active-bottom-rbbox img {
    width: 13px;
    height: 23px;
    margin: 0 10px;
}

.active-bottom-rbbox div {
    display: flex;
    flex-direction: column;
    font-size: 14px;
    color: #aaa;
}
.active-bottom-rbbox div:hover {
    color: #0055d3;
    cursor: pointer;
}
.active-bottom-rbbox div p {
    margin-bottom: 4px;
    width: 200px;
    overflow:hidden;
    white-space:nowrap;
    text-overflow:ellipsis;
}

.active-bottom-rmod img {
    width: 100%;
}
</style>