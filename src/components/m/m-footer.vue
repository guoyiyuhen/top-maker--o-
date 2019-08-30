<template>
    <div class="mfooter">
        <div class="mfooter-box">
            <p>长按/截图保存小程序二维码</p>
            <p>打开微信“扫一扫”，体验更多功能</p>
            <p>地址：北京市海淀区上地六街28号2号楼2层202</p>
            <p>邮编：100085</p>
            <p>电话：010-56293048</p>
            <p>传真：010-62986911</p>
        </div>
        <div class="mfooter-xuke">许可证号：京ICP备12029869号</div>
    </div>
</template>

<script>

export default {
    data() {
        return {

        }
    },
    mounted() {

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
    .mfooter-erweima {
        width: 2.82rem;
        height: 2.82rem;
    }
    .mfooter-box p {
        color: #fefefe;
        font-size: .24rem;
        margin-bottom: .2rem;
    }
    .mfooter-box p:nth-child(2) {
        margin-top: .3rem;
    }
    .mfooter-box p:nth-child(4) {
        margin-top: .4rem;
    }
    .mfooter-xuke {
        height: 1rem;
        text-align: center;
        line-height: 1rem;
        font-size: .2rem;
        color: #cacaca;
        background: #444;
    }
</style>
