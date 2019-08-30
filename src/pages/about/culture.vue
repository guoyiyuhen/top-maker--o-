<template>
    <div class="culture">
        <com-returntop></com-returntop>
        <div class="culture-box">
            <div class="culture-title">专注仿真 - 想用户之所想</div>
            <div class="culture-body">
                <div></div>
                <div>
                    <p>锐意创新，不断提高核心竞争力</p>
                    <p>最先进的技术、最可靠的产品、最优质的服务</p>
                    <p>努力满足客户日益提高的需要</p>
                </div>
            </div>
        </div>
        <div class="culture-bottom">
            <div class="culture-bottom-box">
                <div class="culture-bottom-left"></div>
                <div class="culture-bottom-right" @click="toHome">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/culture/culture2.png" alt="">
                    <h2>博努力（北京）仿真技术有限公司</h2>
                </div>
            </div>
            <img class="culture-bottom-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/culture/culture3.png" alt="">
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
        toHome() {
            this.$router.push({
                name: 'home'
            })
        }
    }
};
</script>
<style>
.culture {
    width: 1200px;
    margin: 0 auto;
    padding-top: 120px;
    padding-bottom: 100px;
}
.culture-box {
    height: 380px;
    width: 100%;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/culture/culture1.png') center no-repeat;
}
.culture-title {
    font-size: 60px;
    color: #333;
    font-weight: bold;
    margin-bottom: 50px;
}
.culture-body {
    display: flex;
}
.culture-body div:nth-child(1) {
    width: 63px;
    height: 4px;
    background: #dedede;
}
.culture-body div:nth-child(2) {
    margin-left: 50px;
}
.culture-body div:nth-child(2) p {
    line-height: 30px;
    font-size: 18px;
    color: #333;
}
.culture-bottom {
    position: relative;
    width: 100%;
    height: 234px;
}
.culture-bottom-box {
    width: 624px;
    height: 152px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
}
.culture-bottom-img {
    position: absolute;
    bottom: 0;
    right: 0;
}
.culture-bottom-right {
    width: 572px;
    height: 152px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 52px;
    background: #fff;
    cursor: pointer;
}
.culture-bottom-right h2 {
    font-size: 24px;
    color: #333;
    margin-top: 20px;
}
.culture-bottom-left {
    position: absolute;
    width: 136px;
    height: 14px;
    top: 70px;
    left: 0;
    background: #0055d3;
}
</style>