<template>
    <div class="mhome">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img class="mhome-swiper-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-home/banner1.png" alt=""></div>
                <div class="swiper-slide"><img class="mhome-swiper-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-home/banner2.png" alt=""></div>
                <div class="swiper-slide"><img class="mhome-swiper-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-home/banner3.png" alt=""></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="mhome-dynamic">
            <div class="mhome-dynamic-top">
                <div class="mhome-dynamic-h1">
                    <div></div>
                    <h1>公司动态</h1>
                    <div></div>
                </div>
                <h2>DYNAMIC</h2>
            </div>
            <div class="mhome-dynamic-left">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/images/xinwentu.png" alt="">
                <div class="mhome-dynamic-position">
                    <div class="mhome-dynamic-data">
                        <h1 class="mhome-dynamic-title">{{notice.name}}</h1>
                        <p class="mhome-dynamic-text">{{notice.brief}}</p>
                    </div>
                    <div class="mhome-dynamic-time">
                        <h1>{{notice.tm.M + '-' + notice.tm.D}}</h1>
                        <p>{{notice.tm.Y}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="mhome-notice">
            <div class="nmhome-otice-data">
                <div class="mhome-notice-data-box" v-for="(item,index) in noticelist" :key="index" v-show="(index >= idx * 3) && (index < idx * 3 + 3)" @click="toActive(item.id)">
                    <div class="mhome-notice-data-left">
                        <h1>{{item.tm.M + '-' + item.tm.D}}</h1>
                        <p>{{item.tm.Y}}</p>
                    </div>
                    <div class="mhome-notice-data-right">
                        <h1>{{item.name}}</h1>
                        <p>{{item.brief}}</p>
                    </div>
                </div>
            </div>
            <div class="mhome-notice-bottom" v-if="noticelist.length > 3">
                <div></div>
                <ul>
                    <li v-for="i in circleList" :key="i" @click="changeValue(i)" :class="idx == i - 1 ? 'mhome-notice-active' : ''"></li>
                </ul>
                <div></div>
            </div>
        </div>
    </div>
</template>
<script>
let timer = null;
import { Article, timestampToTime } from './../../services/article';
import Swiper from "swiper";
export default {
    components: {

    },
    data() {
        return {
            banIdx: 0,
            idx: 0,
            noticelist: [],
            notice: {
                tm: {
                    Y: '',
                    M: '',
                    D: ''
                }
            }
        };
    },
    watch: {},
    destroyed () {
        clearInterval(timer);
    },
    mounted() {
        var mySwiper = new Swiper('.swiper-container', {
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: false,
            },
            loop:true,
            disableOnInteraction: false,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        })
        Article({
            category_id: 80
        }).then(res => {
            res.items.forEach((ele,i) => {
                let tm = timestampToTime(ele.release_time);
                ele.tm = tm;
                if (i == 0) {
                    this.notice = ele;
                } else {
                    this.noticelist.push(ele)
                }
            });
        })
    },
    methods: {
        bannertap(item) {
            this.banIdx = item;
        },
        changeValue(i) {
            this.idx = i - 1;
        },
        toActive(id) {
            this.$router.push({
                path: '/mactive',
                query: {
                    id
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
};
</script>
<style>

@import "./../../style/swiper.min.css";
.mhome {
    padding-bottom: .9rem;
}
.mhome-top {
    position: relative;
}
.mhome-top img {
    width: 100%;
}

.mhome-top ul {
    display: flex;
    position: absolute;
    bottom: .4rem;
    width: .72rem;
    left: 50%;
    margin-left: -.36rem;
}
.mhome-top ul li {
    margin: 0 .05rem;
    cursor: pointer;
}
.mhome-top .notive {
    width: .14rem;
    height: .14rem;
    border-radius: 50%;
    background: #dae6ff;
}
.mhome-top .active {
    width: .12rem;
    height: .12rem;
    border-radius: 50%;
    border: .01rem solid #dae6ff;
}

.mhome-dynamic-top {
    margin-top: .6rem;
}
.mhome-dynamic-top h1 {
    font-size: .3rem;
    color: #000;
    text-align: center;
}
.mhome-dynamic-top h2 {
    font-size: .14rem;
    color: #999;
    text-align: center;
    margin-top: .2rem;
}
.mhome-dynamic-h1 {
    display: flex;
    justify-content: center;
    align-items: center;
}
.mhome-dynamic-h1 h1 {
    margin: 0 .2rem;
}
.mhome-dynamic-h1 div {
    width: .36rem;
    height: .02rem;
    background: #d4d4d4;
}
.mhome-dynamic-bottom {
    width: 100%;
}
.mhome-dynamic-left {
    margin: .4rem;
    position: relative;
}
.mhome-dynamic-left img {
    width: 100%;
}
.mhome-dynamic-position {
    cursor: pointer;
    width: 100%;
    height: 1rem;
    background: rgba(0,0,0,.4);
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    color: #fff;
}
.mhome-dynamic-data {
    width: 75%;
    margin-left: .2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.mhome-dynamic-data h1 {
    font-size: .26rem;
    margin-bottom: .15rem;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.mhome-dynamic-data p {
    font-size: .18rem;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.mhome-dynamic-time {
    width: 1rem;
    height: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0a57f4;
}
.mhome-dynamic-time h1 {
    width: .7rem;
    text-align: center;
    font-size: .22rem;
    font-weight: bold;
    padding-bottom: .05rem;
    border-bottom: .01rem solid #fff;
    margin-bottom: .05rem;
}
.mhome-dynamic-time p {
    font-size: .18rem;
}

    .mhome-notice-data-box {
        display: flex;
        margin: .4rem;
        cursor: pointer;
    }
    .mhome-notice-data-left {
        width: 1.4rem;
        height: 1.32rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #fff;
        border: 1px solid #b4b4b4;
        color: #666;
        margin-right: .3rem;
    }
    .mhome-notice-data-left h1 {
        width: .7rem;
        text-align: center;
        font-size: .22rem;
        font-weight: bold;
        padding-bottom: .05rem;
        border-bottom: .01rem solid #b4b4b4;
        margin-bottom: .05rem;
    }
    .mhome-notice-data-left p {
        font-size: .18rem;
    }
    .mhome-notice-data-right {
        width: 75%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        height: 1.20rem;
    }
    .mhome-notice-data-right h1 {
        color: #111;
        font-size: .26rem;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
        margin-bottom: .15rem;
    }
    .mhome-notice-data-right p {
        color: #666;
        font-size: .24rem;
        margin-bottom: .1rem;
        line-height: .36rem;
    }
    .mhome-notice-bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 .4rem;
    }
    .mhome-notice-bottom div {
        width: 2.66rem;
        height: .01rem;
        background: #d4d4d4;
    }
    .mhome-notice-bottom ul {
        display: flex;
        margin: 0 .3rem;
    }
    .mhome-notice-bottom ul li {
        width: .1rem;
        height: .1rem;
        background: #d4d4d4;
        border-radius: 50%;
        margin: 0 .05rem;
        cursor: pointer;
    }
    .mhome-notice-bottom .mhome-notice-active {
        background: #0a57f4;
    }


    .mhome-swiper-img {
        width: 100%;
    }


    .swiper-pagination span {
        background: #fff;
    }
</style>
