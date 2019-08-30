<template>
    <div class="recruit">
        <com-returntop></com-returntop>
        <div class="recruit-title">
            <p>CAREER OPPORTUNITY</p>
            <p>招聘岗位</p>
        </div>
        <div class="recruit-box">
            <div class="recruit-box-small">
                <div style="background: #0a5990;" @click="recruitTap(1)">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/recruit/recruit5.png" alt="">
                    <span>热能动力工程师 &gt;</span>
                </div>
                <div style="background: #0a9087;" @click="recruitTap(2)">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/recruit/recruit2.png" alt="">
                    <span>电气工程师 &gt;</span>
                </div>
                <div style="background: #83a865;" @click="recruitTap(3)">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/recruit/recruit4.png" alt="">
                    <span>控制工程师 &gt;</span>
                </div>
                <div style="background: #91a79a;" @click="recruitTap(4)">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/recruit/recruit7.png" alt="">
                    <span>系统工程师 &gt;</span>
                </div>
            </div>
            <div class="recruit-box-big" style="background: #a89865;"  @click="recruitTap(5)">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/recruit/recruit1.png" alt="">
                    <span>3D工程师 &gt;</span>
            </div>
        </div>
        <div class="recruit-bottom">
            <p>联系电话：<span>010-56293048</span></p>
            <p>投递邮箱：<span>bernouly@126.com</span></p>
            <p></p>
        </div>
        <div class="recruit-fixed" v-if="idx != 0">
            <div class="recruit-fixed-box">
                <img class="recruit-fixed-close" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/recruit/recruit3.png" alt="" @click="closeTap">
                <div class="recruit-fixed-body" v-show="idx == 1">
                    <h1>热能动力工程师</h1>
                    <h2>职位描述</h2>
                    <p>1. 负责热力系统的仿真模型开发、调试</p>
                    <p>2. 负责热能、动力专业课程课件的开发</p>
                    <p>3. 负责仿真系统的技术支持与培训</p>
                    <h2>岗位要求</h2>
                    <p>1. 热能、动力等相关专业毕业，本科及以上学历</p>
                    <p>2. 熟悉FORTRAN语言，具有一定的编程能力</p>
                    <p>3. 具有良好的沟通能力及团队协作能力</p>
                    <p>4. 具有良好的英语水平</p>
                    <p>5. 有火电厂工作经验者优先</p>
                </div>
                <div class="recruit-fixed-body" v-show="idx == 2">
                    <h1>电气工程师</h1>
                    <h2>职位描述</h2>
                    <p>1. 负责电气系统的仿真模型开发、调试</p>
                    <p>2. 负责电气系统培训课件的开发</p>
                    <p>3. 负责仿真系统的技术支持与培训</p>
                    <h2>岗位要求</h2>
                    <p>1. 电气工程及自动化相关专业毕业，本科及以上学历</p>
                    <p>2. 熟悉C/FORTRAN语言，具有一定的编程能力</p>
                    <p>3. 具有良好的沟通能力及团队协作能力</p>
                    <p>4. 具有良好的英语水平</p>
                    <p>5. 有电力系统工作经验者优先</p>
                </div>
                <div class="recruit-fixed-body" v-show="idx == 3">
                    <h1>控制工程师</h1>
                    <h2>职位描述</h2>
                    <p>1. 负责控制系统仿真模型开发、调试</p>
                    <p>2. 负责仿真系统的技术支持与培训</p>
                    <h2>岗位要求</h2>
                    <p>1. 控制工程及自动化等相关专业毕业，本科及以上学历</p>
                    <p>2. 熟悉C/FORTRAN语言，具有一定的编程能力</p>
                    <p>3. 具有良好的沟通能力及团队协作能力</p>
                    <p>4. 具有良好的英语水平</p>
                    <p>5. 有控制专业工作经验者优先</p>
                </div>
                <div class="recruit-fixed-body" v-show="idx == 4">
                    <h1>系统工程师</h1>
                    <h2>职位描述</h2>
                    <p>1. 负责仿真平台的维护与开发</p>
                    <p>2. 负责通讯接口软件的开发</p>
                    <p>3. 负责仿真系统的技术支持与培训</p>
                    <h2>岗位要求</h2>
                    <p>1. 计算机软件及自动化等相关专业毕业，本科及以上学历</p>
                    <p>2. 熟悉各种常用计算机语言，具有较强的编程能力</p>
                    <p>3. 具有良好的沟通能力及团队协作能力</p>
                    <p>4. 具有良好的英语水平</p>
                    <p>5. 有仿真软件开发经验者优先</p>
                </div>
                <div class="recruit-fixed-body" v-show="idx == 5">
                    <h1>3D工程师</h1>
                    <h2>职位描述</h2>
                    <p>1. 负责设备3D仿真模型的开发</p>
                    <p>2. 负责仿真系统的技术支持与培训</p>
                    <h2>岗位要求</h2>
                    <p>1. 有一定美术功底及良好的三维空间想象力</p>
                    <p>2. 熟悉3Dmax、AutoCAD等软件</p>
                    <p>3. 具有良好的沟通能力及团队协作能力</p>
                    <p>4. 具有良好的英语水平</p>
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
            idx: 0
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        recruitTap(n) {
            this.idx = n;
        },
        closeTap() {
            this.idx = 0;
        }
    }
};
</script>
<style>
.recruit {
    padding-bottom: 80px;
}
.recruit-title {
    margin-top: 100px;
    color: #333;
    font-size: 30px;
    text-align: center;
    margin-bottom: 40px;
}
.recruit-title p {
    margin-bottom: 20px;
}
.recruit-box {
    width: 1200px;
    margin: 0 auto;
    display: flex;
}
.recruit-box-small {
    display: flex;
    width: 840px;
    flex-wrap: wrap;
}
.recruit-box-small div {
    width: 400px;
    height: 240px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.recruit-box-big {
    cursor: pointer;
    width: 320px;
    height: 500px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.recruit-box-big:hover {
    box-shadow: 0px 3px 3px #666;
}
.recruit-box-small div:hover {
    box-shadow: 0px 3px 3px #666;
}
.recruit-box-small span {
    margin-top: 34px;
    font-size: 24px;
    color: #fff;
}
.recruit-box-big span {
    margin-top: 124px;
    font-size: 24px;
    color: #fff;
}
.recruit-box-small img {
    width: 120px;
}
.recruit-box-big img {
    width: 180px;
}

.recruit-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
}
.recruit-bottom p {
    margin: 0 20px;
    color: #666;
    font-size: 18px;
}
.recruit-bottom p span {
    margin: 0 20px;
    color: #0055d3;
    font-size: 24px;
    font-weight: bold;
}
.recruit-fixed {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.6);
    z-index: 1001;
}
.recruit-fixed-box {
    width: 550px;
    height: 438px;
    position: absolute;
    margin-left: -275px;
    margin-top: -219px;
    left: 50%;
    top: 50%;
    background: #fff url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/recruit/recruit6.png') center no-repeat;
}
.recruit-fixed-close {
    position: absolute;
    right: -76px;
    top: -28px;
    cursor: pointer;
}
.recruit-fixed-body {
    padding-top: 40px;
    padding-left: 30px;
}
.recruit-fixed-body h1 {
    font-weight: bold;
    color: #0055d3;
    font-size: 30px;
    margin-bottom: 20px;
}
.recruit-fixed-body h2 {
    font-weight: bold;
    color: #666;
    font-size: 18px;
    margin-bottom: 10px;
    margin-top: 10px;
}
.recruit-fixed-body p {
    color: #666;
    font-size: 18px;
    line-height: 28px;
}
</style>