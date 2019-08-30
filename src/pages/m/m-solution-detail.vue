<template>
    <div class="msolution">
        <div class="msolution-banner"><h1>Simulation Software</h1><span>仿真软件</span></div>
        <div class="mssd-menu">
            <div class="mssd-menu-title" @click="changeShow">{{title}}
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-product/mproduct7.png" v-show="!isShow" alt="">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-product/mproduct8.png" v-show="isShow" alt="">
            </div>
            <ul v-show="isShow">
                <li v-for="(item,index) in list" :key="index" @click="changetitle(item.id)">{{item.name}}</li>
            </ul>
        </div>
        <div class="mssd-body">
            <div>{{title}}</div>
            <div v-html="html"></div>
        </div>
        <div class="mssd-return-top" v-show="topShop" @click="returnTop"></div>
    </div>
</template>
<script>
import { Article } from './../../services/article';
export default {
    components: {
    },
    data() {
        return {
            list: [{
                name: '火电厂仿真方案',
                en: 'COAL-FIRED POWER PLANT SIMULATION',
                class: 'msolution-img-1',
                id: 24
            },{
                name: '建材水泥生产系统仿真',
                en: 'CEMENT PRODUCTION SYSTEM SIMULATION',
                class: 'msolution-img-2',
                id: 25
            },{
                name: '3D虚拟仿真',
                en: '3D VIRTUAL SIMULATION',
                class: 'msolution-img-3',
                id: 27
            },{
                name: '数字化资源库建设',
                en: 'DIGITAL TEACHING RESOURCE',
                class: 'msolution-img-4',
                id: 28
            },{
                name: '虚拟实验平台',
                en: 'VIRTUAL EXPERIMENTAL PLATFORM',
                class: 'msolution-img-5',
                id: 29
            },{
                name: '暖通仿真',
                en: 'HVAC SYSTEM SIMULATION',
                class: 'msolution-img-6',
                id: 26
            },{
                name: '电力市场交易模拟培训系统',
                en: 'POWER MARKET TRADING SIMULATION',
                class: 'msolution-img-7',
                id: 30
            }],
            title: '',
            isShow: false,
            topShop: false,
            html: ''
        };
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop);
        this.getList(this.$route.query.id);
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop); 
    },
    methods: {
        changeShow() {
            this.isShow = !this.isShow;
        },
        changetitle(id) {
            this.getList(id);
            this.isShow = false;
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
            Article({category_id: 91}).then(res => {
                res.items.forEach(item => {
                    if (item.id == id) {
                        this.html = item.content;
                        this.title = item.name;
                    }
                })
            })
        }
    }
};
</script>
<style>
.msimulation {
    background: #eee;
}
.msimulation-banner {
    width: 100%;
    height: 2.4rem;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-simulation/msimulation1.png') center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: center;
}
.msimulation-banner h1 {
    font-size: .5rem;
}
.msimulation-banner span {
    font-size: .24rem;
    margin-top: .1rem;
}

.mssd-menu {
    position: relative;
    padding: .3rem .4rem;
}
.mssd-menu-title {
    width: 6.4rem;
    height: .8rem;
    line-height: .8rem;
    padding-left: .3rem;
    color: #fff;
    font-size: .24rem;
    background: #0055d3;
    position: relative;
}
.mssd-menu-title img {
    position: absolute;
    width: .18rem;
    height: .18rem;
    right: .3rem;
    top: 50%;
    margin-top: -.09rem;
    z-index: 1000;
}
.mssd-menu ul {
    position: absolute;
    left: 50%;
    width: 6.7rem;
    margin-left: -3.35rem;
    top: 1.1rem;
    background: #fff;
    border-top: .01rem solid #eee;
    box-shadow: .04rem .04rem .04rem rgba(200,200,200,.4);
}
.mssd-menu ul li {
    width: 6.4rem;
    height: .8rem;
    line-height: .8rem;
    padding-left: .3rem;
    color: #333;
    background: #fff;
    font-size: .24rem;
    
}
.mssd-menu ul li:active {
    color: #0055d3;
}
.mssd-menu ul .mssd-menu-active {
    background: #0055d3;
    color: #fff;
}
.mssd-return-top {
    position: fixed;
    right: .3rem;
    bottom: 9rem;
    width: .8rem;
    height: .86rem;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active2.png') center no-repeat;
    background-size: 100% 100%;
}
.mssd-return-top:active {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active3.png') center no-repeat;
    background-size: 100% 100%;
}
.mssd-body {
    padding: .3rem;
}
.mssd-body div:nth-child(1) {
    font-size: .32rem;
    padding-top: .3rem;
    padding-bottom: .4rem;
    text-align: center;
}
.mssd-body div:nth-child(2) {
    font-size: .25rem;
}
.mssd-body div:nth-child(2) img {
    width: 100%;
}
</style>