<template>
    <div class="footer">
        <div class="box">
            <!-- <img src="./../assets/image/weixintubiao.png" alt="">
            <img src="./../assets/image/weibotubiao.png" alt=""> -->
            copyright©2015-2019 - 纪家庙 - 京ICP备17025107号
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
<style lang="scss" scoped>
    .footer {
        height: 75px;
        padding-top: 70px;
        background-color: #333333;
        .box {
            font-size: 16px;
            color: #fff;
            text-align: center;
            position: relative;
            img {
                width: 31px;
                height: 26px;
                position: absolute;
                cursor: pointer;
                top: 0;
                right: 31px;
                &:nth-child(1) {
                    right: 79px;
                }
            }
        }
    }

</style>
