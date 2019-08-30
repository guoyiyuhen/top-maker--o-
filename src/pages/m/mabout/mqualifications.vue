<template>
    <div class="mqualifications">
        <div class="mqualifications-top">
            <div class="mqualifications-top-list" v-for="(item,index) in list1" :key="index" v-show="idx == item.id">
                <div :class="item.class"></div>
                <span>{{item.name}}</span>
            </div>
        </div>
        <div class="mqualifications-top-tip">
            <div v-for="item in [0,1,2,3]" :key="item" @click="pageto(item)" :class="idx == item ? 'mqualifications-active' : 'mqualifications-tipbg'"></div>
        </div>
        <div class="mqualifications-bottom">
            <div class="mqualifications-top-list2" v-for="(item,index) in list2" :key="index" v-show="idx2 == item.id">
                <div :class="item.class"></div>
                <div>{{item.name}}</div>
            </div>
        </div>
        <div class="mqualifications-top-tip">
            <div v-for="item in [0,1,2]" :key="item" @click="pageto2(item)" :class="idx2 == item ? 'mqualifications-active' : 'mqualifications-tipbg'"></div>
        </div>
    </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            list1: [{
                name: '软著_3D场景漫游与设备结构展示平台',
                class: 'mqualifications-z-img1',
                id: 0
            },{
                name: '软著_3D建材仿真教学系统',
                class: 'mqualifications-z-img2',
                id: 0
            },{
                name: '软著_电力仿真系统软著',
                class: 'mqualifications-z-img3',
                id: 0
            },{
                name: '软著_化学水处理仿真系统',
                class: 'mqualifications-z-img4',
                id: 1
            },{
                name: '软著_商混站生产线仿真教学系统',
                class: 'mqualifications-z-img5',
                id: 1
            },{
                name: '软著_水泥生产过程仿真系统',
                class: 'mqualifications-z-img6',
                id: 1
            },{
                name: '软著_脱硫仿真系统',
                class: 'mqualifications-z-img7',
                id: 2
            },{
                name: '软著_脱硝仿真系统',
                class: 'mqualifications-z-img8',
                id: 2
            },{
                name: '软著_造纸生产过程仿真系统',
                class: 'mqualifications-z-img9',
                id: 2
            },{
                name: '软著_Surya3D虚拟仿真引擎软著',
                class: 'mqualifications-z-img10',
                id: 3
            },{
                name: 'ISO9001证书_中文',
                class: 'mqualifications-z-img11',
                id: 3
            },{
                name: 'ISO9001证书_英文',
                class: 'mqualifications-z-img12',
                id: 3
            }],
            list2: [{
                name: '2018软件产品证书',
                class: 'mqualifications-s-img1',
                id: 0
            },{
                name: '2018第九届理事会会员单位',
                class: 'mqualifications-s-img2',
                id: 0
            },{
                name: '2016高新技术企业',
                class: 'mqualifications-s-img3',
                id: 0
            },{
                name: '2013软件产品登记证书_CtrlBuilder',
                class: 'mqualifications-s-img4',
                id: 0
            },{
                name: '2013件产品登记证书_MSP',
                class: 'mqualifications-s-img5',
                id: 1
            },{
                name: '2013软件产品登记证书_化学水处理',
                class: 'mqualifications-s-img6',
                id: 1
            },{
                name: '2013软件产品登记证书_水泥生产过程仿真系统',
                class: 'mqualifications-s-img7',
                id: 1
            },{
                name: '2013软件产品登记证书_水泥',
                class: 'mqualifications-s-img8',
                id: 1
            },{
                name: '2013软件产品登记证书_脱硫',
                class: 'mqualifications-s-img9',
                id: 2
            },{
                name: '2012软件企业认定证书',
                class: 'mqualifications-s-img10',
                id: 2
            },{
                name: '2012软件产品登记证书_电力仿真系统',
                class: 'mqualifications-s-img11',
                id: 2
            },{
                name: '2015中关村高新技术企业（过期）',
                class: 'mqualifications-s-img12',
                id: 2
            }],
            idx: 0,
            idx2: 0
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        pageto(item) {
            this.idx = item;
        },
        pageto2(item) {
            this.idx2 = item;
        }
    }
};
</script>
<style>
.mqualifications {
    background: #eee;
    padding-bottom: .4rem;
}
.mqualifications-active {
    background: #0055d3;
}
.mqualifications-tipbg {
    background: #999;
}
.mqualifications-top {
    display: flex;
    padding: .4rem .3rem;
    background: #fff;
}
.mqualifications-top-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 2.2rem;
    margin: 0 .05rem;
}
.mqualifications-top-list div {
    width: 2.2rem;
    height: 3rem;
}
.mqualifications-top-list span {
    font-size: .18rem;
    transform: scale(.7);
    color: #333;
}

.mqualifications-top-tip {
    display: flex;
    height: .5rem;
    width: 100%;
    background: #fff;
    justify-content: center;
}
.mqualifications-top-tip div {
    margin: 0 .1rem;
    width: .15rem;
    height: .15rem;
    border-radius: 50%;
}

.mqualifications-bottom {
    margin-top: .2rem;
    display: flex;
    padding: .4rem .25rem;
    flex-wrap: wrap;
    background: #fff;
}
.mqualifications-top-list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 3.4rem;
    margin: 0 .05rem;
    margin-top: .2rem;
}
.mqualifications-top-list2 div:nth-child(1) {
    width: 3.4rem;
    height: 2.4rem;
}
.mqualifications-top-list2 div:nth-child(2) {
    font-size: .18rem;
    width: 3.08rem;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    padding-left: .2rem; 
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-shadow: .04rem .04rem .04rem rgba(200,200,200,.4);
}
.mqualifications-top-list2 div:nth-child(2):active {
    background: #0055d3;
    color: #fff;
}



.mqualifications-z-img1 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture1.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img2 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture2.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img3 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture3.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img4 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture4.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img5 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture5.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img6 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture6.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img7 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture7.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img8 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture8.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img9 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture9.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img10 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture10.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img11 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture11.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-z-img12 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/mculture12.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img1 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu1.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img2 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu2.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img3 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu3.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img4 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu4.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img5 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu5.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img6 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu6.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img7 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu7.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img8 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu8.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img9 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu9.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img10 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu10.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img11 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu11.png') center no-repeat;
    background-size: 100% 100%;
}
.mqualifications-s-img12 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/zhengshu12.png') center no-repeat;
    background-size: 100% 100%;
}
</style>