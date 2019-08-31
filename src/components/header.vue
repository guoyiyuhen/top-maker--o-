<template>
    <div class="header">
        <div class="box">
            <div class="box-left">
                <img src="./../assets/image/logo_dengluye@2x.png" alt="">
            </div>
            <div class="box-right">
                <ul class="nav">
                    <li :class="item.active == activeName ? 'active' : ''" v-for="(item,index) in menu" :key="index" @click="changeNav(item.active)">{{item.name}}</li>
                </ul>
                <div class="login">
                    <!-- <img src="./../assets/image/sousuo@2x.png" alt=""> -->
                    <span @click="login(true)">登陆</span>
                    <span @click="login(false)">注册</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['callBack'],
    data() {
        return {
            menu: [{
                name: '精选',
                active: 'home'
            },{
                name: '作品',
                active: 'works'
            },{
                name: '设计师',
                active: 'designer'
            }],
            activeName: 'home'
        }
    },
    mounted() {
        this.activeName = this.$route.path.split('/')[1];
    },
    watch: {
        $route(route) {
            this.activeName = route.path.split('/')[1];
        }
    },
    methods: {
        toHome() {
            this.$router.push({
                name: 'home'
            })
        },
        changeNav(nav) {
            console.log(nav)
            this.activeName = nav;
        },
        login(change) {
            this.callBack(true,change);
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
    width: 100%;
    height: 67px;
    background: #fff;
    .box {
        height: 67px;
        width: 1200px;
        margin: 0 auto;
        overflow: hidden;
        .box-left {
            float: left;
            padding-top: 6px;
            img {
                width: 43px;
                height: 56px;
                cursor: pointer;
            }
        }
        .box-right {
            float: right;
        }
    }
    .nav {
        float: left;
        font-size: 14px;
        padding-top: 20px;
        margin-right: 130px;
        li {
            float: left;
            height: 43px;
            line-height: 43px;
            padding: 0 5px;
            margin-right: 46px;
            border-bottom: 4px solid #fff;
            cursor: pointer;
        }
        .active {
            border-bottom: 4px solid #000;
        }
    }
    .login {
        float: left;
        font-size: 12px;
        padding-top: 35px;
        img {
            display: block;
            float: left;
            width:11px;
            height:12px;
            margin-right: 15px;
            margin-top: 2px;
            cursor: pointer;
        }
        span {
            display: block;
            float: left;
            font-size: 12px;
            margin-right: 14px;
            cursor: pointer;
        }
    }
}
</style>
