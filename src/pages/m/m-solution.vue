<template>
    <div class="msolution">
        <div class="msolution-banner"><h1>solution</h1><span>解决方案</span></div>
        <div class="msolution-box">
            <div v-for="(item,index) in list" :key="index" :class="item.class" class="msolution-box-title" @click="todetail(item.id)">
                <h1>{{item.name}}</h1>
                <h2>{{item.en}}</h2>
                <div></div>
                <p>查看详情 &gt;&gt;</p>
            </div>
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
                path: '/mssdetail',
                query: {
                    id: index
                }
            })
        }
    }
};
</script>
<style>
.msolution {
    background: #eee;
}
.msolution-banner {
    width: 100%;
    height: 2.4rem;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-solution/msolution1.png') center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: center;
}
.msolution-banner h1 {
    font-size: .5rem;
}
.msolution-banner span {
    font-size: .24rem;
    margin-top: .1rem;
}
.msolution-box {
    padding: 0 .4rem .4rem .4rem;
}
.msolution-img-1 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-solution/msolution2.png') center no-repeat;
    background-size: 100% 100%;
}
.msolution-img-2 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-solution/msolution3.png') center no-repeat;
    background-size: 100% 100%;
}
.msolution-img-3 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-solution/msolution4.png') center no-repeat;
    background-size: 100% 100%;
}
.msolution-img-4 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-solution/msolution5.png') center no-repeat;
    background-size: 100% 100%;
}
.msolution-img-5 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-solution/msolution6.png') center no-repeat;
    background-size: 100% 100%;
}
.msolution-img-6 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-solution/msolution7.png') center no-repeat;
    background-size: 100% 100%;
}
.msolution-img-7 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-solution/msolution8.png') center no-repeat;
    background-size: 100% 100%;
}


.msolution-box-title {
    width: 6.7rem;
    height: 3.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin-top: .3rem;
}
.msolution-box-title h1 {
    font-size: .28rem;
    font-weight: bold;
}
.msolution-box-title h2 {
    font-size: .18rem;
    margin-top: .05rem;
}
.msolution-box-title div {
    width: .26rem;
    height: .02rem;
    background: #ffa00c;
    margin-top: .2rem;
}
.msolution-box-title p {
    font-size: .18rem;
    margin-top: .1rem;
}
</style>