<template>
    <div class="msimulation">
        <div class="msimulation-banner"><h1>Simulation Software</h1><span>仿真软件</span></div>
        <div class="msimulation-box" v-for="(item,index) in list" :key="index" @click="todetail(item.id)">
            <div class="msimulation-box-title">
                <h1>{{item.name}}</h1>
                <h2>{{item.en}}</h2>
                <div></div>
                <p>查看详情 &gt;&gt;</p>
            </div>
            <div class="msimulation-box-img" :class="item.class"></div>
        </div>
    </div>
</template>
<script>
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
            }]
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        todetail(index) {
            this.$router.push({
                path: '/msdetail',
                query: {
                    id: index
                }
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
.msimulation-box {
    padding: .3rem .4rem;
    background: #fff;
    margin-bottom: .2rem;
}
.msimulation-box-title {
    width: 6.7rem;
    height: 1.9rem;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-simulation/msimulation2.png') center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
}
.msimulation-box-title h1 {
    font-size: .28rem;
    padding-top: .25rem;
    font-weight: bold;
}
.msimulation-box-title h2 {
    font-size: .18rem;
    margin-top: .05rem;
}
.msimulation-box-title div {
    width: .26rem;
    height: .02rem;
    background: #ffa00c;
    margin-top: .2rem;
}
.msimulation-box-title p {
    font-size: .18rem;
    margin-top: .1rem;
}
.msimulation-box-img {
    width: 6.7rem;
    height: 3.6rem;
}
.msimulation-box-img-1 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-simulation/msimulation3.png') center no-repeat;
    background-size: 100% 100%;
}
.msimulation-box-img-2 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-simulation/msimulation4.png') center no-repeat;
    background-size: 100% 100%;
}
.msimulation-box-img-3 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-simulation/msimulation5.png') center no-repeat;
    background-size: 100% 100%;
}
.msimulation-box-img-4 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-simulation/msimulation6.png') center no-repeat;
    background-size: 100% 100%;
}
.msimulation-box-img-5 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-simulation/msimulation7.png') center no-repeat;
    background-size: 100% 100%;
}
.msimulation-box-img-6 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-simulation/msimulation8.png') center no-repeat;
    background-size: 100% 100%;
}
.msimulation-box-img-7 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-simulation/msimulation9.png') center no-repeat;
    background-size: 100% 100%;
}
</style>