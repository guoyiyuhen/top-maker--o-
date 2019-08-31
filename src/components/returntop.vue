<template>
    <div class="returntap">
        <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active2.png" class="returntap" v-show="isShow" @click="returnTop" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop); 
    },
    methods: {
        scrollToTop(res) {
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 500) {
                this.isShow = true;
            } else {
                this.isShow = false;
            }
        },
        returnTop() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.returntap {
    width: 70px;
    height: 76px;
    position: fixed;
    right: 40px;
    bottom: 240px;
    cursor: pointer;
    z-index: 666;
}
</style>
