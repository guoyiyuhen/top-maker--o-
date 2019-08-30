<template>
    <div class="solution">
        <com-returntop></com-returntop>
        <img class="solution-banner" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/solution/solution1.png" alt="">
        <div class="solution-title">
            多元化解决方案 - 为您提供更优质服务
        </div>
        <div class="solution-box" v-for="(item,index) in dataList" :key="index">
            <div class="solution-box-img" :class="item.class"></div>
            <div class="solution-pos" :class="index % 2 == 0 ? 'solution-right' : 'solution-left'" @click="toActive(item.id, item.name)">
                <div class="solution-pos-c">
                    <h1>{{item.name}}</h1>
                    <div class="solution-flex">
                        <div></div>
                        <h2>{{item.eng}}</h2>
                    </div>
                    <p>{{item.text}}</p>
                    <div class="solution-see">
                        <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/solution/solution2.png" alt="">
                        <span>查看详情 &gt;&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import comReturntop from "@/components/returntop";
export default {
    components: {
        comReturntop
    },
    data() {
        return {
            dataList: [{
                id: 24,
                name: '火电厂仿真方案',
                eng: 'COAL-FIRED POWER PLANT SIMULATION',
                class: 'solution-img-1',
                text: '博努力（北京）仿真技术有限公司拥有丰富的火电站仿真系统开发经验，利用自主开发的高精度建模工具软件PowerBuilder和虚拟DCS仿真技术，可向用户提供全范围高逼真度的火电站仿真系统，以满足客户的当前及长期的培训、操作和工程设计验证的需要。目前已经行成了从50MW到1000MW，从高压到超超临界、从煤粉锅炉到循环流化床锅炉、垃圾锅炉、生物质锅炉等的全系列火电厂仿真机产品。所开发的火电站模拟机软件被全国电力职业教育教学指导委员会指定为行业高校大学生技能竞赛指定软件。'
            },{
                id: 25,
                name: '建材水泥生产系统仿真',
                eng: 'CEMENT PRODUCTION SYSTEM SIMULATION',
                class: 'solution-img-2',
                text: '博努力（北京）仿真技术有限公司拥有丰富的建材行业仿真系统的开发经验，利用自主开发的高精度建模工具软件PowerBuilder和虚拟DCS仿真技术，可向用户提供全范围高逼真度的水泥生产线、混凝土生产线仿真系统，以满足客户的当前及长期的培训、操作和工程设计验证的需要。目前已经开发的5000t/d水泥干法生产线中控室仿真、HTS180商混站仿真系统受到多方用户的好评。其中5000t/d新型干法水泥生产线的仿真被人力资源与社会保障部指定为建材行业全国技能大赛专用软件。'
            },{
                id: 27,
                name: '3D虚拟仿真',
                eng: '3D VIRTUAL SIMULATION',
                class: 'solution-img-3',
                text: '随着3D仿真技术的快速发展，在过程工业系统仿真培训与教学中得到了很大的应用。博努力公司一直致力于电力与建材行业的仿真培训与教学软件的开发，顺应国家鼓励高职高专教学信息化的发展形势，博努力公司自主开发的3D引擎软件Surya3D，着眼于电力、建材领域的教学与培训需要，开发了3D生产场景漫游、生产过程动态展示、设备的拆装、工作原理展示、故障模拟、生产试验、3D仿真与数值仿真系统的交互通讯、以及考评系统软件。'
            },{
                id: 28,
                name: '数字化资源库建设',
                eng: 'DIGITAL TEACHING RESOURCE',
                class: 'solution-img-4',
                text: '为提高大学生的学习兴趣，丰富教师的教学素材，提高教学质量，在教学实践中大量引入和积极推进网络技术、信息技术在教学中的应用。以普通高等教育和高职院校热动专业为例，不论是教师的数字化课件、数字化教材，乃至学生的虚拟仿真实训操作，都离不开基本资源库的建设。'
            },{
                id: 29,
                name: '虚拟实验平台',
                eng: 'VIRTUAL EXPERIMENTAL PLATFORM',
                class: 'solution-img-5',
                text: '将虚拟现实技术、计算机仿真技术和网络技术，应用到高等学校的实验教学，是高等教育信息化建设的重要内容，将学科的专业技术与信息化技术的高度结合，从而促进高等教育的不断发展。教育部颁发了《教育部关于全面提高高等教育质量的若干意见》，和《教育信息化十年发展规划》，并决定于2013年启动国家级虚拟仿真实验的建设工作。'
            },{
                id: 26,
                name: '暖通仿真',
                eng: 'HVAC SYSTEM SIMULATION',
                class: 'solution-img-6',
                text: '面向高等职业院校的暖通专业的教学与学生实践的需要，结合公司多年开发火电机组仿真培训系统的经验，开发了空调制冷相关的物性算法库，如溴化锂的物性算法库。公司以工业过程建模软件PowerBuilder、CtrlBuilder为工具开发的暖通专业仿真软件,得到了暖通行业的广泛认同，以大量应用于高职高专院校等暖通专业的教学工作。'
            },{
                id: 30,
                name: '电力市场交易模拟培训系统',
                eng: 'POWER MARKET TRADING SIMULATION',
                class: 'solution-img-7',
                text: '电力市场交易仿真培训系统提供一个电力市场交易的模拟运行环境，实现对电力市场交易中心的业务功能和运作流程的仿真，根据电厂报价辅助决策系统的基本功能需求，仿真电厂参与电力市场交易时所进行的分析、决策以及竞价过程。实现电力系统和电力市场仿真建模的功能，教师可以灵活地构建电力市场的仿真培训模型，可以根据需要方便地调整模型的配置，以适应不同的培训要求。实现发电侧电力市场技术支持系统的基本功能，模拟电力市场交易中心的运作流程，实现交易中心的基本业务，提供交易中心管理人员的仿真工作任务环境，学员在此环境下能够完成交易中心的基本工作：交易管理、报价管理、合同/结算管理、信息发布。实现电厂报价辅助决策系统的基本功能，模拟电厂报价员参与电力市场交易的工作任务环境，学员在此环境下能够完成报价辅助决策分析和竞价交易。实现培训管理的相关功能，教师能够快捷便利地管理、组织培训、考核学员。'
            }]
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        toActive(index, name) {
            let titleList = ['首页','解决方案', name];
            this.$router.push({
                name: 'solutionActive',
                query: {
                    id: index,
                    type: 91,
                    titleList: titleList
                }
            });
        }
    }
};
</script>
<style>
.solution-banner {
    height: 300px;
    width: 100%;
}
.solution-title {
    height: 150px;
    text-align: center;
    line-height: 150px;
    font-size: 30px;
    font-weight: bold;
}
.solution-box {
    width: 100%;
    position: relative;
}
.solution-box-img {
    width: 100%;
    height: 350px;
}
.solution-pos {
    position: absolute;
    width: 1200px;
    height: 350px;
    left: 50%;
    margin-left: -600px;
    display: flex;
    top: 0;
}
.solution-left {
    justify-content: flex-start;
}
.solution-right {
    justify-content: flex-end;
}
.solution-pos-c {
    width: 488px;
    height: 280px;
    padding: 30px 20px 40px 20px;
    background: rgba(255,255,255,.8);
    color: #333;
    cursor: pointer;
}
.solution-pos-c:hover {
    background: rgba(0,85,211,.8);
    color: #fff;
}
.solution-pos-c h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}
.solution-flex {
    display: flex;
    align-items: center;
}
.solution-flex div {
    width: 6px;
    height: 16px;
    background: #ffa00c;
    margin-right: 10px;
}
.solution-flex h2 {
    font-size: 16px;
}
.solution-pos-c p {
    margin-top: 26px;
    font-size: 14px;
    line-height: 24px;
    -webkit-line-clamp:5;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow: ellipsis;
}
.solution-see {
    display: flex;
    align-items: center;
    font-size: 16px;
    margin-top: 60px;
}
.solution-see img {
    width: 16px;
    height: 16px;
    margin-right: 10px;
}


.solution-img-1 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/solution/solution3.png') center no-repeat;
    background-size: 100% 100%;
}
.solution-img-2 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/solution/solution4.png') center no-repeat;
    background-size: 100% 100%;
}
.solution-img-3 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/solution/solution5.png') center no-repeat;
    background-size: 100% 100%;
}
.solution-img-4 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/solution/solution6.png') center no-repeat;
    background-size: 100% 100%;
}
.solution-img-5 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/solution/solution7.png') center no-repeat;
    background-size: 100% 100%;
}
.solution-img-6 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/solution/solution8.png') center no-repeat;
    background-size: 100% 100%;
}
.solution-img-7 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/solution/solution9.png') center no-repeat;
    background-size: 100% 100%;
}
</style>