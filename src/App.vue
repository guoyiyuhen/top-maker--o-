<template>
    <div class="font-content">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
    watch: {
        '$route' () {
            document.title=this.$route.meta.title;
        }
    },
    mounted(){
        console.log('版本号：v1.0.1');
        document.title=this.$route.meta.title;
        if (this._isMobile()) {
            this.$router.push({
                name: 'mhome'
            })
        } else {
            this.$router.push({
                name: 'home'
            })
        }
    },
    methods: {
        _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        }
    }
}
</script>

<style>
    html {
        font-size: 16px;
    }
    .active-return-top {
        width: 70px;
        height: 76px;
        position: fixed;
        right: 40px;
        bottom: 240px;
        cursor: pointer;
    }
</style>
