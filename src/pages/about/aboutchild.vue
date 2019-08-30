<template>
    <div class="aboutchild">
        <com-returntop></com-returntop>
        <div class="aboutchild-top">
            <div class="aboutchild-left">
                <h1>Company</h1>
                <h1>Profile</h1>
                <h2>公司简介</h2>
                <p>博努力（北京）仿真技术有限公司，简称“博努力”，是一家以仿真技术、多媒体技术、虚拟现实技术和网络技术为手段，面向电力、能源、暖通、化工、建材等工业领域，提供工艺系统仿真、控制系统设计验证、仿真操作培训；以及面向高等院校，提供高等教育数字化资源库、虚拟实验教学、仿真实训操作等整体解决方案的高新技术企业。</p>
                <p>公司拥有一支高水平的研发队伍，40%的技术人员拥有硕士及以上学位，主要技术人员具有10年以上的仿真平台和仿真模型的开发经验，多位技术人员具有高级技术职称，为高精度工艺系统仿真的开发提供了可靠保证。同时，公司与清华大学、浙江大学、郑州电力高等专科学校等相关院系、研究所建立了紧密的技术合作关系。</p>
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/about/about1.png" alt="">
            </div>
            <div class="aboutchild-right">
                <div></div>
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/about/about3.png" alt="">
            </div>
        </div>
        <div class="aboutchild-bottom">
            <p>公司拥有一支高水平的研发队伍，40%的技术人员拥有硕士及以上学位，主要技术人员具有10年以上的仿真平台和仿真模型的开发经验，多位技术人员具有高级技术职称，为高精度工艺系统仿真的开发提供了可靠保证。同时，公司与清华大学、浙江大学、郑州电力高等专科学校等相关院系、研究所建立了紧密的技术合作关系。</p>
            <p>公司拥有完全自主知识产权的多学科仿真支撑平台MSP（Multi-Subject Simulation Platform）和过程工业图形化建模工具软件PowerBuilder，在3D建模领域自主开发了3D引擎Surya3D，3D模型与常规的仿真模型具有通讯接口，使3D仿真与常规仿真融为一体。这些技术已在我公司开发的电力、水泥、化工等领域的仿真系统中得到广泛的应用，并取得了数十项软件著作权。</p>
            <p>公司郑重向各方用户承诺，在所有项目的开发中，全面贯彻ISO9001质量管理体系，确保该项目的工期与质量。</p>
            <p>公司设有运转规范、良好的售后服务系统，为各方用户提供24小时全方位的售后服务，公司的服务热线为4006-56362。我公司向所有用户承诺，在仿真系统的整个生命周期内，提供免费的系统软件升级服务，以及最优惠的技术服务。</p>
            <p>我们的宗旨是“专注仿真，想用户之所想”，真诚希望与各方客户通力合作，努力打造具有世界先进水平的工艺系统仿真。</p>
            <div>
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/about/about4.png" alt="">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/about/about5.png" alt="">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/about/about6.png" alt="">
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

        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {

    }
};
</script>
<style>
    .aboutchild {
        width: 1200px;
        margin: 0 auto;
    }
    .aboutchild-left {
        width: 625px;
        margin-top: 130px;
        margin-right: 135px;
    }
    .aboutchild-left h1 {
        font-size: 48px;
        color: #333;
        font-weight: bold;
    }
    .aboutchild-left h2 {
        font-size: 20px;
        color: #333;
        margin-top: 30px;
        margin-bottom: 41px;
    }
    .aboutchild-left p {
        font-size: 14px;
        color: #000;
        line-height: 24px;
        margin-bottom: 10px;
    }
    .aboutchild-left img {
        margin-top: 70px;
        width: 449px;
        height: 206px;
    }
    .aboutchild-top {
        padding-bottom: 40px;
        border-bottom: 1px solid #d7d7d7;
        display: flex;
    }
    .aboutchild-right {
        width: 440px;
        position: relative;
        margin-top: 120px;
    }
    .aboutchild-right div {
        width: 402px;
        height: 550px;
        position: absolute;
        top: 96px;
        right: 38px;
        background: rgba(0,85,211,.06);
    }
    .aboutchild-right img {
        width: 402px;
        height: 550px;
        position: absolute;
        top: 0;
        right: 0;
    }
    .aboutchild-bottom {
        margin-top: 80px;
    }
    .aboutchild-bottom p {
        font-size: 14px;
        color: #000;
        line-height: 24px;
        margin-bottom: 5px;
    }
    .aboutchild-bottom div {
        margin-top: 50px;
        display: flex;
        padding-bottom: 80px;
    }
    .aboutchild-bottom div img:nth-child(2) {
        margin: 0 30px;
    }
</style>