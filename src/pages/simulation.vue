<template>
    <div class="simulation">
        <com-returntop></com-returntop>
        <img class="simulation-banner" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/banner.png" alt="">
        <div class="simulation-box">
            <div class="simulation-box-shu">
                <div class="simulation-title simulation-hover" @mouseover="mouseover(0)" @mouseout="mouseout(0)">
                    <h1>控制系统建模工具软件ctrlBuilder</h1>
                    <h2>CONTROL SYSTEM MODELING TOOL</h2>
                    <div></div>
                    <span @click="toActive(34,'控制系统建模工具软件ctrlBuilder')">查看详情 &gt;&gt;</span>
                    <img :style="list[0].style" v-show="!list[0].isHover && list[0].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation9.png" class="simulation-rotate" alt="">
                    <img :style="list[0].style" v-show="list[0].isHover && list[0].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation8.png" alt="">
                </div>
                <img class="simulation-box-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation1.png" alt=""  @mouseover="imgmouseover(0)" @mouseout="imgmouseout(0)">
            </div>
            <div class="simulation-box-shu">
                <img class="simulation-box-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation2.png" alt=""  @mouseover="imgmouseover(1)" @mouseout="imgmouseout(1)">
                <div class="simulation-title simulation-hover" @mouseover="mouseover(1)" @mouseout="mouseout(1)">
                    <h1>工业过程建模工具软件</h1>
                    <h2>INDUSTRIAL SYSTEM MODELING TOOL</h2>
                    <div></div>
                    <span @click="toActive(32,'工业过程建模工具软件PowerBuilder')">查看详情 &gt;&gt;</span>
                    <img :style="list[1].style" v-show="!list[1].isHover && list[1].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation9.png" alt="">
                    <img :style="list[1].style" v-show="list[1].isHover && list[1].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation8.png"  class="simulation-rotate" alt="">
                </div>
            </div>
            <div class="simulation-box-shu">
                <div class="simulation-title simulation-hover" @mouseover="mouseover(2)" @mouseout="mouseout(2)">
                    <h1>电气系统建模工具软件ElecBuilder</h1>
                    <h2>ELE TRICAL SYSTEM MODELING TOOL</h2>
                    <div></div>
                    <span @click="toActive(33,'电气系统建模工具软件ElecBuilder')">查看详情 &gt;&gt;</span>
                    <img :style="list[2].style" v-show="!list[2].isHover && list[2].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation9.png"  class="simulation-rotate" alt="">
                    <img :style="list[2].style" v-show="list[2].isHover && list[2].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation8.png" alt="">
                </div>
                <img class="simulation-box-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation3.png" alt=""  @mouseover="imgmouseover(2)" @mouseout="imgmouseout(2)">
            </div>
        </div>
        <div class="simulation-mod">
            <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation7.png" alt="">
            <div class="simulation-mod-pos">
                <div class="simulation-title">
                    <h1>多学科仿真支撑平台MSP</h1>
                    <h2>MULTI-SUBJECT SIMULATION PLATFORM</h2>
                    <div></div>
                    <span @click="toActive(31,'多学科仿真支撑平台MSP')">查看详情 &gt;&gt;</span>
                </div>
            </div>
        </div>
        <div class="simulation-box">
            <div>
                <div class="simulation-box-shu">
                <div class="simulation-title simulation-hover" @mouseover="mouseover(3)" @mouseout="mouseout(3)">
                    <h1>人机界面软件gView</h1>
                    <h2>GRAPHIC DISPLAY TOOL</h2>
                    <div></div>
                    <span @click="toActive(35,'人机界面软件gView')">查看详情 &gt;&gt;</span>
                    <img :style="list[3].style" v-show="!list[3].isHover && list[3].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation9.png" class="simulation-rotate" alt="">
                    <img :style="list[3].style" v-show="list[3].isHover && list[3].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation8.png" alt="">
                </div>
                <img class="simulation-box-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation4.png" alt=""  @mouseover="imgmouseover(3)" @mouseout="imgmouseout(3)">
            </div>
            </div>
            <div>
                <div class="simulation-box-shu">
                    <img class="simulation-box-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation5.png" alt=""  @mouseover="imgmouseover(4)" @mouseout="imgmouseout(4)">
                    <div class="simulation-title simulation-hover" @mouseover="mouseover(4)" @mouseout="mouseout(4)">
                        <h1>虚拟DCS软件</h1>
                        <h2>VIRTUAL DCS SIMULATION</h2>
                        <div></div>
                        <span @click="toActive(36,'虚拟DCS软件')">查看详情 &gt;&gt;</span>
                    <img :style="list[4].style" v-show="!list[4].isHover && list[4].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation9.png" alt="">
                    <img :style="list[4].style" v-show="list[4].isHover && list[4].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation8.png" class="simulation-rotate" alt="">
                    </div>
                </div>
            </div>
            <div>
                <div class="simulation-box-shu">
                    <div class="simulation-title simulation-hover" @mouseover="mouseover(5)" @mouseout="mouseout(5)">
                        <h1>Surya3D仿真引擎</h1>
                        <h2>3D SIMULATION ENGINE SURYA3D</h2>
                        <div></div>
                        <span @click="toActive(37,'Surya3D仿真引擎')">查看详情 &gt;&gt;</span>
                    <img :style="list[5].style" v-show="!list[5].isHover && list[5].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation9.png" class="simulation-rotate" alt="">
                    <img :style="list[5].style" v-show="list[5].isHover && list[5].isShow" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation8.png" alt="">
                    </div>
                    <img class="simulation-box-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/simulation/simulation6.png" alt=""  @mouseover="imgmouseover(5)" @mouseout="imgmouseout(5)">
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
            list: [{
                style: 'bottom: -13px;',
                isHover: false,
                isShow: true
            },{
                style: 'top: -13px;',
                isHover: false,
                isShow: true
            },{
                style: 'bottom: -13px;',
                isHover: false,
                isShow: true
            },{
                style: 'bottom: -13px;',
                isHover: false,
                isShow: true
            },{
                style: 'top: -13px;',
                isHover: false,
                isShow: true
            },{
                style: 'bottom: -13px;',
                isHover: false,
                isShow: true
            }]
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        mouseover(n) {
            let list = this.list;
            list[n].isHover = true;
            this.list = list;
        },
        mouseout(n) {
            let list = this.list;
            list[n].isHover = false;
            this.list = list;
        },
        imgmouseover(n) {
            let list = this.list;
            list[n].isShow = false;
            this.list = list;
        },
        imgmouseout(n) {
            let list = this.list;
            list[n].isShow = true;
            this.list = list;
        },
        toActive(i,n) {
            let titleList = ['首页','仿真软件', n];
            this.$router.push({
                name: 'solutionActive',
                query: {
                    id: i,
                    type: 90,
                    titleList: titleList
                }
            });  
        }
    }
};
</script>
<style>

.simulation-rotate {
    transform:rotate(180deg);
    -ms-transform:rotate(180deg); 	/* IE 9 */
    -moz-transform:rotate(180deg); 	/* Firefox */
    -webkit-transform:rotate(180deg); /* Safari 和 Chrome */
    -o-transform:rotate(180deg); 	/* Opera */
}
.simulation {
    background: #eee;
    padding-bottom: 80px;
}
.simulation-box {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    cursor: pointer;
}
.simulation-box-shu {
    width: 400px;
}

.simulation-box-img {
    width: 400px;
    height: 290px;
    position: relative;
    z-index: 100;
    transition: all ease 0.8s;
}
.simulation-box-img:hover {
    transform: scale(1.03);
}
.simulation-banner {
    width: 100%;
    height: 300px;
    margin-bottom: 80px;
}
.simulation-mod {
    width: 1200px;
    height: 290px;
    margin: 0 auto;
    cursor: pointer;
    position: relative;
}
.simulation-title {
    width: 400px;
    height: 194px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 96px;
    color: #fff;
}
.simulation-hover:hover {
    color: #fff;
    background: #0055d3;
}
.simulation-hover {
    color: #333;
    background: #fff;
    position: relative;
}
.simulation-hover img {
    position: absolute;
    width: 24px;
    height: 13px;
    left: 50%;
    z-index: 300;
    margin-left: -12px;
}
.simulation-title h1 {
    font-weight: bold;
    font-size: 24px;
}
.simulation-title h2 {
    font-size: 16px;
    margin-top: 10px;
}
.simulation-title div {
    width: 26px;
    height: 2px;
    background: #ffa00c;
    margin-top: 20px;
}
.simulation-title span {
    font-size: 16px;
    margin-top: 40px;
}
.simulation-mod-pos {
    position: absolute;
    top: 0;
    left: 50%;
    margin-left: -200px;
}
</style>