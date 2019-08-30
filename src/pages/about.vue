<template>
    <div class="about">
        <img class="about-banner" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/about/about2.png" alt="">
        <div class="about-title">
            <h1>About Us</h1>
            <p>关于我们</p>
        </div>
        <div class="about-menu">
            <ul>
                <router-link v-for="(item,index) in menuList" :key="index" :to="item.path" :class="activeName == item.path ? 'about-menu-active' : 'about-menu-noactive'"><li>{{item.name}}</li></router-link>
            </ul>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            activeName: '',
            menuList: [{
                name: '关于我们',
                path: '/aboutchild'
            },{
                name: '公司资质',
                path: '/qualifications'
            },{
                name: '公司荣誉',
                path: '/glory'
            },{
                name: '合作伙伴',
                path: '/partner'
            },{
                name: '企业文化',
                path: '/culture'
            },{
                name: '招聘信息',
                path: '/recruit'
            }]
        };
    },
    watch: {},
    created() {},
    mounted() {
        this.activeName = this.$route.path;
    },
    watch: {
        $route(route) {
            this.activeName = route.path;
        }
    },
    methods: {

    }
};
</script>
<style>
    .about {
        position: relative;
        background: #eee;
    }
    .about-banner {
        width: 100%;
        height: 450px;
    }
    .about-title {
        position: absolute;
        top: 208px;
        width: 100%;
        text-align: center;
        color: #fff;
    }
    .about-title h1 {
        font-size: 50px;
    }
    .about-title p {
        font-size: 24px;
        margin-top: 10px;
    }
    .about-menu {
        width: 1200px;
        background: #fff;
        position: absolute;
        top: 410px;
        height: 80px;
        left: 50%;
        margin-left: -600px;
    }
    .about-menu ul {
        display: flex;
    }
    .about-menu li {
        width: 200px;
        cursor: pointer;
        height: 80px;
        font-size: 16px;
        text-align: center;
        line-height: 80px;
    }
    .about-menu .about-menu-active {
        background: #0a57f4;
        color: #fff;
    }
    .about-menu .about-menu-noactive {
        background: #fff;
        color: #333;
    }
</style>