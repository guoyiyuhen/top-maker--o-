<template>
    <div class="home">
        <com-returntop></com-returntop>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide"><img class="home-swiper-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner1.png" alt=""></div>
                <div class="swiper-slide"><img class="home-swiper-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner2.png" alt=""></div>
                <div class="swiper-slide"><img class="home-swiper-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/home/banner3.png" alt=""></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
        </div>
        
        <div class="home-dynamic">
            <div class="home-dynamic-top">
                <h1>公司动态</h1>
                <h2>DYNAMIC</h2>
            </div>
            <div class="home-dynamic-bottom">
                <div class="home-dynamic-left">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/images/xinwentu.png" alt="">
                    <div class="home-dynamic-position" @click="toActive(notice.id)">
                        <div class="home-dynamic-data">
                            <h1 class="home-dynamic-title">{{notice.name}}</h1>
                            <p class="home-dynamic-text">{{notice.brief}}</p>
                        </div>
                        <div class="home-dynamic-time">
                            <h1>{{notice.tm.M}}-{{notice.tm.D}}</h1>
                            <p>{{notice.tm.Y}}</p>
                        </div>
                    </div>
                </div>
                <div class="home-dynamic-right">
                    <com-notice :noticelist="noticelist"></com-notice>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { Article, timestampToTime } from './../services/article';
import comNotice from "@/components/notice";
import comReturntop from "@/components/returntop";
import Swiper from "swiper";
let timer = null;
export default {
    components: {
        comNotice,
        comReturntop
    },
    data() {
        return {
            banIdx: 0,
            imgWidth: 0,
            left: 0,
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
                clickable: true,
                bulletElement: 'div'
            }
        })
        this.imgWidth = window.innerWidth;
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
            this.left = - item * this.imgWidth;
        },
        toActive(id) {
            this.$router.push({
                path: '/active',
                query: {
                    id
                }
            })
        }
    }
};
</script>
<style>
@import "./../style/swiper.min.css";
.home-top {
    position: relative;
    width: 100%;
    overflow: hidden;
}
.swiper-pagination div {
    background: #fff;
    width: 14px;
    height: 14px;
}

.home-swiper-img {
    width: 100%;
}
.home-top div {
    width: 300%;
    position: relative;
}
.home-top div img {
    float: left;
}

.home-top ul {
    display: flex;
    position: absolute;
    bottom: 40px;
    width: 72px;
    left: 50%;
    margin-left: -36px;
}
.home-top ul li {
    margin-left: 10px;
    cursor: pointer;
}
.home-top .notive {
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #dae6ff;
}
.home-top .active {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 1px solid #dae6ff;
}

.home-dynamic-top {
    margin-top: 70px;
}
.home-dynamic-top h1 {
    font-size: 30px;
    color: #000;
    text-align: center;
}
.home-dynamic-top h2 {
    font-size: 14px;
    color: #999;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 60px;
}
.home-dynamic-bottom {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    padding-bottom: 80px;
    justify-content: space-between;
}
.home-dynamic-left {
    width: 570px;
    height: 396px;
    position: relative;
}
.home-dynamic-left img {
    width: 100%;
    height: 100%;
}
.home-dynamic-right {
    width: 558px;
    height: 400px;
}
.home-dynamic-position {
    cursor: pointer;
    width: 100%;
    height: 82px;
    background: rgba(0,0,0,.4);
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    color: #fff;
}
.home-dynamic-data {
    width: 75%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.home-dynamic-data h1 {
    font-size: 16px;
    margin-bottom: 15px;
    width: 100%;
    overflow: hidden;
    font-weight: bold;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.home-dynamic-data p {
    font-size: 14px;
    width: 100%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.home-dynamic-time {
    width: 82px;
    height: 82px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0a57f4;
}
.home-dynamic-time h1 {
    width: 70px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 5px;
    border-bottom: 1px solid #fff;
    margin-bottom: 5px;
}
.home-dynamic-time p {
    font-size: 16px;
}
.transitionLeft {
    transition: left 2s;
    -moz-transition: left 2s;	/* Firefox 4 */
    -webkit-transition: left 2s;	/* Safari 和 Chrome */
    -o-transition: left 2s;
}

.home-dynamic-title:hover {
    color: #0a57f4;
}
</style>