<template>
    <div class="mculture">
        <div class="mculture-box">
            <div class="mculture-title">专注仿真 - 想用户之所想</div>
            <div class="mculture-body">
                <div></div>
                <div>
                    <p>锐意创新，不断提高核心竞争力</p>
                    <p>最先进的技术、最可靠的产品、最优质的服务</p>
                    <p>努力满足客户日益提高的需要</p>
                </div>
            </div>
        </div>
        <div class="mculture-bottom">
            <div class="mculture-bottom-box">
                <div class="mculture-bottom-left"></div>
                <div class="mculture-bottom-right" @click="toHome">
                    <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/culture/culture2.png" alt="">
                    <h2>博努力（北京）仿真技术有限公司</h2>
                </div>
            </div>
            <img class="mculture-bottom-img" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/culture/culture4.png" alt="">
        </div>
    </div>
</template>
<script>

export default {
    components: {
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
                name: 'mhome'
            })
        }
    }
};
</script>
<style>
.mculture {
    width: 100%;
    padding-top: .2rem;
    padding-bottom: 2.3rem;
}
.mculture-box {
    height: 3.8rem;
    padding-left: .9rem;
    padding-top: .3rem;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/culture/culture1.png') center no-repeat;
    background-size: 100% 100%;
}
.mculture-title {
    font-size: .5rem;
    color: #333;
    font-weight: bold;
    margin-bottom: .5rem;
}
.mculture-body {
    display: flex;
}
.mculture-body div:nth-child(1) {
    width: .63rem;
    height: .04rem;
    background: #dedede;
}
.mculture-body div:nth-child(2) {
    margin-left: .5rem;
}
.mculture-body div:nth-child(2) p {
    line-height: .3rem;
    font-size: .18rem;
    color: #333;
}
.mculture-bottom {
    position: relative;
    width: 100%;
    height: 2.34rem;
}
.mculture-bottom-box {
    width: 6.24rem;
    height: 1.52rem;
    position: absolute;
    top: -1rem;
    left: .4rem;
    z-index: 100;
}
.mculture-bottom-img {
    position: absolute;
    bottom: -1.25rem;
    right: 50%;
    width: 6.7rem;
    height: 3.5rem;
    margin-right: -3.35rem;
}
.mculture-bottom-right {
    width: 5.72rem;
    height: 1.52rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: .52rem;
    background: #fff;
    cursor: pointer;
}
.mculture-bottom-right h2 {
    font-size: .24rem;
    color: #333;
    margin-top: .2rem;
}
.mculture-bottom-left {
    position: absolute;
    width: 1.36rem;
    height: .14rem;
    top: .7rem;
    left: 0;
    background: #0055d3;
}
</style>