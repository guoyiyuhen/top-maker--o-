<template>
    <div class="footer">
        <div class="footer-box">
            <div class="footer-box-logo">
                <img class="footer-logo" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/images/footer-logo.png" @click="toHome" alt="">
                <h2>博努力（北京）仿真技术有限公司</h2>
                <p>许可证号：京ICP备12029869号</p>
            </div>
            <div class="footer-box-contact">
                <h1>联系我们</h1>
                <p>地址：北京市海淀区上地六街28号2号楼2层202</p>
                <p>邮编：100085</p>
                <p>电话：010-56293048</p>
                <p>传真：010-62986911</p>
            </div>
            <div class="footer-box-erweima">
                <h1>公司二维码</h1>
                <img class="footer-erweima" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/images/erweima.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        toHome() {
            this.$router.push({
                name: 'home'
            })
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer-box {
    width: 1200px;
    height: 182px;
    padding-top: 40px;
    margin: 0 auto;
    color: #fefefe;
    display: flex;
}
.footer-box p {
    font-size: 14px;
    color: #cacaca;
    margin-bottom: 6px;
}
.footer-logo {
    width: 79px;
    height: 31px;
    cursor: pointer;
}
.footer-erweima {
    width: 102px;
    height: 102px;
}
.footer-box h2 {
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 10px;
}
.footer-box h1 {
    font-size: 24px;
    margin-bottom: 20px;
}
.footer-box-contact {
    margin-left: 260px;
}
.footer-box-erweima {
    margin-left: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
