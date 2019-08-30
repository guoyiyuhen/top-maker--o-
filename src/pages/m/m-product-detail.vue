<template>
    <div class="mproduct">
        <div class="mproduct-banner"><h1>Simulation Products</h1><span>仿真产品</span></div>
        <div class="mpd-menu">
            <div class="mpd-menu-title" @click="changeShow">{{title}}
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-product/mproduct7.png" v-show="!isShow" alt="">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-product/mproduct8.png" v-show="isShow" alt="">
            </div>
            <ul v-show="isShow">
                <li v-for="(item,index) in list" :key="index" @click="changetitle(index)" :class="index == idx ? 'mpd-menu-active' : ''">{{item.name}}</li>
            </ul>
        </div>
        <div class="mpd-body">
            <div>{{title}}</div>
            <div v-html="html"></div>
        </div>
        <div class="mpd-return-top" v-show="topShop" @click="returnTop"></div>
    </div>
</template>
<script>
import { Article } from './../../services/article';
export default {
    components: {
    },
    data() {
        return {
            list: [],
            title: '',
            html: '',
            isShow: false,
            idx: 0,
            topShop: false,
            type: 0
        };
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
        this.title = this.list[0];
        if (this.$route.query.id) {
            this.title = this.list[this.$route.query.id];
            this.idx = this.$route.query.id;
        } else {
            this.title = this.list[0];
            this.idx = 0;
        }
        this.type = this.$route.query.type;
        this.getList(this.$route.query.id);
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop);
    },
    methods: {
        changeShow() {
            this.isShow = !this.isShow;
        },
        changetitle(index) {
            this.idx = index;
            this.title = this.list[index].name;
            this.isShow = false;
            this.html = this.list[index].content;
        },
        scrollToTop(res) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 320) {
                this.topShop = true;
            } else {
                this.topShop = false;
            }
        },
        returnTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },
        getList(id) {
            Article({category_id: this.type}).then(res => {
                res.items.forEach(item => {
                    if (item.id == id) {
                        this.html = item.content;
                        this.title = item.name;
                    }
                })
                this.list = res.items;
            })
        }
    }
};
</script>
<style>
.mproduct {
    background: #eee;
}

.mpd-body {
    padding: .3rem;
}
.mpd-body div:nth-child(1) {
    font-size: .32rem;
    padding-top: .3rem;
    padding-bottom: .4rem;
    text-align: center;
}
.mpd-body div:nth-child(2) {
    font-size: .25rem;
}
.mpd-body div:nth-child(2) img {
    width: 100%;
}
.mproduct-banner h1 {
    font-size: .5rem;
}
.mproduct-banner span {
    font-size: .24rem;
    margin-top: .1rem;
}
.mpd-menu {
    position: relative;
    padding: .3rem .4rem;
}
.mpd-menu-title {
    width: 6.4rem;
    height: .8rem;
    line-height: .8rem;
    padding-left: .3rem;
    color: #fff;
    font-size: .24rem;
    background: #0055d3;
    position: relative;
}
.mpd-menu-title img {
    position: absolute;
    width: .18rem;
    height: .18rem;
    right: .3rem;
    top: 50%;
    margin-top: -.09rem;
    z-index: 1000;
}
.mpd-menu ul {
    position: absolute;
    left: 50%;
    width: 6.7rem;
    margin-left: -3.35rem;
    top: 1.1rem;
    background: #fff;
    border-top: .01rem solid #eee;
    box-shadow: .04rem .04rem .04rem rgba(200,200,200,.4);
}
.mpd-menu ul li {
    width: 6.4rem;
    height: .8rem;
    line-height: .8rem;
    padding-left: .3rem;
    color: #333;
    background: #fff;
    font-size: .24rem;
    
}
.mpd-menu ul li:active {
    color: #0055d3;
}
.mpd-menu ul .mpd-menu-active {
    background: #0055d3;
    color: #fff;
}
</style>