<template>
    <div class="header" :style="bgcolor">
        <div class="header-box">
            <img class="header-logo" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/images/header-logo.png" alt="" @click="toHome">
            <ul class="header-nav">
                <router-link v-for="(item,idx) in menu" :key="idx" class="routelink" :to="'/' + item.path"><li :class="activeName === item.path ? 'active' : ''">{{item.name}}</li></router-link>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeName: '',
            bgcolor: 'background: rgba(0,25,60, .7);',
            menu: [{
                name: '首页',
                path: 'home'
            },{
                name: '仿真产品',
                path: 'product'
            },{
                name: '解决方案',
                path: 'solution'
            },{
                name: '仿真软件',
                path: 'simulation'
            },{
                name: '下载',
                path: 'download'
            },{
                name: '关于我们',
                path: 'about'
            }]
        }
    },
    mounted() {
        let activeName = this.$route.path.split('/')[1];
        switch(activeName) {
            case 'culture': this.activeName = 'about';
                break;
            case 'partner': this.activeName = 'about';
                break;
            case 'qualifications': this.activeName = 'about';
                break;
            case 'recruit': this.activeName = 'about';
                break;
            case 'glory': this.activeName = 'about';
                break;
            case 'aboutchild': this.activeName = 'about';
                break;
            default:
                this.activeName = this.$route.path.split('/')[1];
        }
    },
    watch: {
        $route(route) {
            let activeName = route.path.split('/')[1];
            switch(activeName) {
                case 'culture': this.activeName = 'about';
                    this.bgcolor = 'background: rgba(0,29,78, .7);';
                    break;
                case 'partner': this.activeName = 'about';
                    this.bgcolor = 'background: rgba(0,29,78, .7);';
                    break;
                case 'qualifications': this.activeName = 'about';
                    this.bgcolor = 'background: rgba(0,29,78, .7);';
                    break;
                case 'recruit': this.activeName = 'about';
                    this.bgcolor = 'background: rgba(0,29,78, .7);';
                    break;
                case 'glory': this.activeName = 'about';
                    this.bgcolor = 'background: rgba(0,29,78, .7);';
                    break;
                case 'aboutchild': this.activeName = 'about';
                    this.bgcolor = 'background: rgba(0,29,78, .7);';
                    break;
                case 'home': this.activeName = 'home';
                    this.bgcolor = 'background: rgba(18,16,20, .7);';
                    break;
                case 'download': this.activeName = 'download';
                    this.bgcolor = 'background: rgba(0,19,48, .7);';
                    break;
                case 'product': this.activeName = 'product';
                    this.bgcolor = 'background: rgba(25,37,51, .7);';
                    break;
                case 'simulation': this.activeName = 'simulation';
                    this.bgcolor = 'background: rgba(0,25,60, .7);';
                    break;
                case 'solution': this.activeName = 'solution';
                    this.bgcolor = 'background: rgba(0,33,59, .7);';
                    break;
                default:
                    this.activeName = route.path.split('/')[1];
            }
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
.header {
    width: 100%;
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,25,60, .7);
    z-index: 1000;
}
.header-box {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-logo {
    width: 102px;
    height: 37px;
    cursor: pointer;
}
.header-nav {
    display: flex;
}
.header-nav li {
    width: 100px;
    height: 80px;
    color: #fefefe;
    line-height: 80px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
}
.header-nav li:hover {
    background: #0a57f4;
}
.header-nav .active {
    background: #0a57f4;
}
.routelink {
    color: #fefefe;
    text-decoration: none;
}
</style>
