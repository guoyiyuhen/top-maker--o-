<template>
    <div class="qualifications">
        <com-returntop></com-returntop>
        <div class="qualifications-top">
            <div class="qualifications-list">
                <ul :style="'left:' + left + 'px'">
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications1.jpg" alt=""><span>软著_3D场景漫游与设备结构展示平台</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications2.jpg" alt=""><span>软著_3D建材仿真教学系统</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications3.jpg" alt=""><span>软著_电力仿真系统软著</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications4.jpg" alt=""><span>软著_化学水处理仿真系统</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications5.jpg" alt=""><span>软著_商混站生产线仿真教学系统</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications6.jpg" alt=""><span>软著_水泥生产过程仿真系统</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications7.jpg" alt=""><span>软著_脱硫仿真系统</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications8.jpg" alt=""><span>软著_脱硝仿真系统</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications9.jpg" alt=""><span>软著_造纸生产过程仿真系统</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications10.jpg" alt=""><span>软著_Surya3D虚拟仿真引擎软著</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications11.png" alt=""><span>ISO9001证书_中文</span></li>
                    <li><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/qualifications12.png" alt=""><span>ISO9001证书_英文</span></li>
                </ul>
            </div>

            <div class="tip qualifications-left" @click="jiantouclick(1)">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zuo.png" alt="">
            </div>
            <div class="tip qualifications-right" @click="jiantouclick(2)">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/you.png" alt="">
            </div>
        </div>
        <div class="qualifications-zhengshu">
            <ul>
                <li v-show="idx == 1"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu1.png" alt=""><div><span>2018</span><span>软件产品证书</span></div></li>
                <li v-show="idx == 1"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu2.png" alt=""><div><span>2018</span><span>第九届理事会会员单位</span></div></li>
                <li v-show="idx == 1"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu3.png" alt=""><div><span>2016</span><span>高新技术企业</span></div></li>
                <li v-show="idx == 1"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu4.png" alt=""><div><span>2013</span><span>软件产品登记证书_CtrlBuilder</span></div></li>
                <li v-show="idx == 1"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu5.png" alt=""><div><span>2013</span><span>软件产品登记证书_MSP</span></div></li>
                <li v-show="idx == 1"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu7.png" alt=""><div><span>2013</span><span>软件产品登记证书_化学水处理</span></div></li>
                <li v-show="idx == 2"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu8.png" alt=""><div><span>2013</span><span>软件产品登记证书_水泥生产过程仿真系统</span></div></li>
                <li v-show="idx == 2"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu9.png" alt=""><div><span>2013</span><span>软件产品登记证书_水泥</span></div></li>
                <li v-show="idx == 2"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu10.png" alt=""><div><span>2013</span><span>软件产品登记证书_脱硫</span></div></li>
                <li v-show="idx == 2"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu11.png" alt=""><div><span>2012</span><span>软件企业认定证书</span></div></li>
                <li v-show="idx == 2"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu6.png" alt=""><div><span>2012</span><span>软件产品登记证书_电力仿真系统</span></div></li>
                <li v-show="idx == 2"><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zhengshu12.png" alt=""><div><span>2015</span><span>中关村高新技术企业（过期）</span></div></li>
            </ul>
        </div>
        <div class="qualifications-page">
            <div class="flex">
                <div class="box" :class="idx == 1 ? 'active' : ''" @click="pagetap(1)">1</div>
                <div class="box" :class="idx == 2 ? 'active' : ''" @click="pagetap(2)">2</div>
            </div>
            <div class="box qualifications-page-active" @click="pageto" style="width: 150px;">下一页</div>
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
            left: 0,
            idx: 1
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        jiantouclick(n) {
            if (n == 2) {
                if (this.left - 301 < -2408) {
                    return;
                }
                this.left -= 301;
            } else {
                if (this.left + 301 > 0) {
                    return;
                }
                this.left += 301;
            }
        },
        pagetap(n) {
            this.idx = n;
        },
        pageto() {
            if (this.idx == 1) {
                this.idx = 2;
            } else if (this.idx == 2) {
                this.idx = 1;
            }
        }
    }
};
</script>
<style>
    .qualifications-top {
        width: 1200px;
        margin: 0 auto;
        margin-top: 80px;
        position: relative;
    }
    .qualifications-list {
        width: 1200px;
        height: 450px;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
    }
    .qualifications-top ul {
        width: 1200px;
        position: absolute;
        left: 0;
        top: 0;
        display: flex;
        margin: 0 auto;
    }
    .qualifications-top li {
        margin: 0 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .qualifications-top img {
        width: 273px;
        height: 388px;
        border: 6px solid #fff;
        box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.2);
    }
    .qualifications-top span {
        color: #333;
        font-size: 16px;
        margin-top: 20px;
    }
    .qualifications-top .tip {
        width: 50px;
        height: 70px;
        position: absolute;
        font-weight: normal;
        top: 50%;
        margin-top: -70px;
    }
    .qualifications-top .tip img {
        width: 100%;
        height: 100%;
        border: 0 none;
        box-shadow: none;
        cursor: pointer;
    }
    .qualifications-left {
        left: -70px;
    }
    .qualifications-right {
        right: -70px;
    }
    .qualifications-zhengshu {
        width: 1200px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .qualifications-zhengshu img {
        width: 380px;
        height: 266px;
    }
    .qualifications-zhengshu ul {
        display: flex;
        flex-wrap: wrap;
    }
    .qualifications-zhengshu ul li {
        margin: 0 10px;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .qualifications-zhengshu ul div {
        width: 330px;
        height: 80px;
        background: #fff;
        color: #333;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 20px;
    }
    .qualifications-zhengshu ul div:hover {
        background: #0055d3;
        color: #fff;
    }

    .qualifications-zhengshu ul div span:nth-child(1) {
        font-size: 24px;
    }
    .qualifications-zhengshu ul div span:nth-child(2) {
        font-size: 16px;
        margin-top: 10px;
    }
    .qualifications-page {
        display: flex;
        justify-content: space-between;
        width: 1160px;
        margin: 0 auto;
        margin-top: 30px;
        padding: 0 20px 80px 20px;
    }

    .qualifications-page .box {
        width: 60px;
        height: 60px;
        text-align: center;
        line-height: 60px;
        margin-right: 1px;
        font-size: 16px;
        color: #333;
        background: #ddd;
    }
    .qualifications-page .flex {
        display: flex;
    }

    .qualifications-page .active {
        color: #fff;
        background: #0055d3;
    }
    .qualifications-page-active:active {
        background: #0055d3;
        color: #fff;
    }
</style>