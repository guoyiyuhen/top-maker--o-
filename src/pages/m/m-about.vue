<template>
    <div class="about">
        <div class="about-banner"><h1>About Us</h1><span>关于我们</span></div>
        <com-mpage :list="list" :idx="idx" @changv="changeValue"></com-mpage>
        <router-view></router-view>
    </div>
</template>
<script>
import comMpage from "@/components/m/m-page";
export default {
    components: {
        comMpage
    },
    data() {
        return {
            list: ['关于我们','公司资质','公司荣誉','合作伙伴','企业文化','招聘信息'],
            idx: 0
        };
    },
    mounted() {
        if (this.$route.query.id !== undefined) {
            this.idx = this.$route.query.id;
        } else {
            let activeName = this.$route.path.split('/')[1];
            this.changeidx(activeName);
        }
    },
    watch: {
        $route(route) {
            if (route.query.id !== undefined) {
                this.idx = route.query.id;
            } else {
                let activeName = route.path.split('/')[1];
                this.changeidx(activeName);
            }
        }
    },
    methods: {
        changeValue(n) {
            let path = '/maboutchild'
            switch(n) {
                case 0: path = '/maboutchild';
                    break;
                case 1: path = '/mqualifications';
                    break;
                case 2: path = '/mglory';
                    break;
                case 3: path = '/mpartner';
                    break;
                case 4: path = '/mculture';
                    break;
                case 5: path = '/mrecruit';
                    break;
            }
            this.$router.push({
                path: path
            })
        },
        changeidx(activeName) {
            switch(activeName) {
                case 'maboutchild': this.idx = 0;
                    break;
                case 'mqualifications': this.idx = 1;
                    break;
                case 'mglory': this.idx = 2;
                    break;
                case 'mpartner': this.idx = 3;
                    break;
                case 'mculture': this.idx = 4;
                    break;
                case 'mrecruit': this.idx = 5;
                    break;
                default:
                    this.idx = 0;
            }
        }
    }
};
</script>
<style>
.about {
    background: #eee;
}
.about-banner h1 {
    font-size: .5rem;
}
.about-banner span {
    font-size: .24rem;
    margin-top: .1rem;
}
</style>