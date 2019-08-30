<template>
    <div class="mrecruit">
        <div class="mrecruit-title">
            <p>CAREER OPPORTUNITY</p>
            <p>招聘岗位</p>
        </div>
        <div class="mrecruit-box">
            <div style="background: #0a5990;" class="mrecruit-small-box" @click="recruitTap(1)">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/m-culture1.png" alt="">
                <span>热能动力工程师</span>
            </div>
            <div style="background: #0a9087;" class="mrecruit-small-box" @click="recruitTap(4)">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/m-culture2.png" alt="">
                <span>系统工程师</span>
            </div>
        </div>
        <div class="mrecruit-box">
            <div class="mrecruit-box2">
                <div style="background: #83a865;" class="mrecruit-small-box" @click="recruitTap(2)">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/m-culture3.png" alt="">
                    <span>电气工程师</span>
                </div>
                <div style="background: #91a79a;" class="mrecruit-small-box" @click="recruitTap(3)">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/m-culture4.png" alt="">
                    <span>控制工程师</span>
                </div>
            </div>
            <div class="mrecruit-box3" style="background: #a89865;" @click="recruitTap(5)">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/m-culture5.png" alt="">
                <span>3D工程师</span>
            </div>
        </div>
        
        <div class="mrecruit-bottom">
            <p>联系电话：<span>010-56293048</span></p>
            <p>投递邮箱：<span>bernouly@126.com</span></p>
        </div>

        <div class="mrecruit-fixed" v-if="idx != 0">
            <div class="mrecruit-fixed-box">
                <img class="mrecruit-fixed-close" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/m-culture6.png" alt="" @click="closeTap">
                <div class="mrecruit-fixed-body" v-show="idx == 1">
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
                <div class="mrecruit-fixed-body" v-show="idx == 2">
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
                <div class="mrecruit-fixed-body" v-show="idx == 3">
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
                <div class="mrecruit-fixed-body" v-show="idx == 4">
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
                <div class="mrecruit-fixed-body" v-show="idx == 5">
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

export default {
    components: {
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
.mrecruit-title {
    margin-top: .2rem;
    text-align: center;
    font-size: .3rem;
    color: #333;
}
.mrecruit-title p {
    margin-bottom: .2rem;
}
.mrecruit-box {
    display: flex;
    justify-content: center;
}
.mrecruit-small-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 3.26rem;
    height: 2.26rem;
    margin: .1rem;
    border-radius: .1rem;
}
.mrecruit-small-box img {
    width: 1.2rem;
    height: 1.2rem;
    margin-bottom: .2rem;
}
.mrecruit-small-box span {
    font-size: .3rem;
    color: #fff;
}
.mrecruit-box2 {
    display: flex;
    flex-direction: column;
}
.mrecruit-box3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 3.26rem;
    height: 4.7rem;
    margin: .1rem;
    border-radius: .1rem;
}
.mrecruit-box3 img {
    width: 1.2rem;
    height: 1.2rem;
    margin-top: .8rem;
    margin-bottom: .9rem;
}
.mrecruit-box3 span {
    font-size: .3rem;
    color: #fff;
}
.mrecruit-bottom {
    display: flex;
    justify-content: space-between;
    padding: .3rem .5rem .4rem .5rem;
}
.mrecruit-bottom p {
    font-size: .18rem;
    color: #666;
}
.mrecruit-bottom p span{
    font-size: .24rem;
    font-weight: bold;
    color: #0055d3;
}
.mrecruit-fixed {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 9999;
    background: rgba(0,0,0,.6);
}

.mrecruit-fixed-box {
    width: 5.6rem;
    height: 5rem;
    padding: .4rem;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-culture/m-culture7.png') center no-repeat;
    background-size: 100% 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -3.2rem;
    margin-top: -2.9rem;
}
.mrecruit-fixed-body h1 {
    font-size: .3rem;
    color: #0055d3;
    font-weight: bold;
}
.mrecruit-fixed-body h2 {
    font-size: .24rem;
    font-weight: bold;
    color: #666;
    margin-bottom: .2rem;
    margin-top: .3rem;
}
.mrecruit-fixed-body p {
    font-size: .24rem;
    color: #666;
}
.mrecruit-fixed-close {
    position: absolute;
    width: .56rem;
    height: .56rem;
    top: -.96rem;
    left: 50%;
    margin-left: -.28rem;
}
</style>