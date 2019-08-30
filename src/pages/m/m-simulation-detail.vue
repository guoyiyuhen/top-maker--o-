<template>
    <div class="msimulation">
        <div class="msimulation-banner"><h1>Simulation Software</h1><span>仿真软件</span></div>
        <div class="msd-menu">
            <div class="msd-menu-title" @click="changeShow">{{title}}
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-product/mproduct7.png" v-show="!isShow" alt="">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-product/mproduct8.png" v-show="isShow" alt="">
            </div>
            <ul v-show="isShow">
                <li v-for="(item,index) in list" :key="index" @click="changetitle(item.id)">{{item.name}}</li>
            </ul>
        </div>
        <div class="msd-body">
            <div>{{title}}</div>
            <div v-html="html"></div>
        </div>
        <div class="msd-return-top" v-show="topShop" @click="returnTop"></div>
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
                name: '多学科仿真支撑平台MSP',
                en: 'MULTI-SUBJECT SIMULATION PLATFORM',
                class: 'msimulation-box-img-1',
                id: 31
            },{
                name: '控制系统建模工具软件ctrlBuilder',
                en: 'CONTROL SYSTEM MODELING TOOL',
                class: 'msimulation-box-img-2',
                id: 34

            },{
                name: '工业过程建模工具软件',
                en: 'INDUSTRIAL SYSTEM MODELING TOOL',
                class: 'msimulation-box-img-3',
                id: 32
            },{
                name: '电气系统建模工具软件',
                en: 'ELE TRICAL SYSTEM MODELING TOOL',
                class: 'msimulation-box-img-4',
                id: 33
            },{
                name: '人机界面软件gView',
                en: 'GRAPHIC DISPLAY TOOL',
                class: 'msimulation-box-img-5',
                id: 35
            },{
                name: '虚拟DCS软件',
                en: 'VIRTUAL DCS SIMULATION',
                class: 'msimulation-box-img-6',
                id: 36
            },{
                name: 'Surya3D仿真引擎',
                en: '3D SIMULATION ENGINE SURYA3D',
                class: 'msimulation-box-img-7',
                id: 37
            }],
            title: '',
            isShow: false,
            topShop: false,
            html: ''
        };
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
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
            Article({category_id: 90}).then(res => {
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
.msimulation-banner h1 {
    font-size: .5rem;
}
.msimulation-banner span {
    font-size: .24rem;
    margin-top: .1rem;
}

.msd-menu {
    position: relative;
    padding: .3rem .4rem;
}
.msd-menu-title {
    width: 6.4rem;
    height: .8rem;
    line-height: .8rem;
    padding-left: .3rem;
    color: #fff;
    font-size: .24rem;
    background: #0055d3;
    position: relative;
}
.msd-menu-title img {
    position: absolute;
    width: .18rem;
    height: .18rem;
    right: .3rem;
    top: 50%;
    margin-top: -.09rem;
    z-index: 1000;
}
.msd-menu ul {
    position: absolute;
    left: 50%;
    width: 6.7rem;
    margin-left: -3.35rem;
    top: 1.1rem;
    background: #fff;
    border-top: .01rem solid #eee;
    box-shadow: .04rem .04rem .04rem rgba(200,200,200,.4);
}
.msd-menu ul li {
    width: 6.4rem;
    height: .8rem;
    line-height: .8rem;
    padding-left: .3rem;
    color: #333;
    background: #fff;
    font-size: .24rem;
    
}
.msd-menu ul li:active {
    color: #0055d3;
}
.msd-menu ul .msd-menu-active {
    background: #0055d3;
    color: #fff;
}

.msd-body {
    padding: .3rem;
}
.msd-body div:nth-child(1) {
    font-size: .32rem;
    padding-top: .3rem;
    padding-bottom: .4rem;
    text-align: center;
}
.msd-body div:nth-child(2) {
    font-size: .25rem;
}
.msd-body div:nth-child(2) img {
    width: 100%;
}
</style>