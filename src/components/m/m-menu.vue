<template>
    <div class="mmenu">
        <div class="mmenu-list" v-for="(item,index) in menuList" :key="index">
            
            <div v-if="item.isChild" class="mmenu-box-child">
                <div v-for="(child,cidx) in item.children" :key="cidx" v-show="item.isOpen" @click="toPath(child.path, cidx)">
                    <h2>{{child.name}}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            menuList: [{
                name: '首页',
                path: '/mhome',
                isChild: false,
                isOpen: false
            },{
                name: '仿真产品',
                path: '/mproduct',
                isChild: false,
                children: [],
                isOpen: false
            },{
                name: '解决方案',
                path: '/msolution',
                isChild: false,
                isOpen: false
            },{
                name: '仿真软件',
                path: '/msimulation',
                isChild: false,
                isOpen: false
            },{
                name: '下载',
                path: '/mdownload',
                isChild: false,
                isOpen: false
            },{
                name: '关于我们',
                path: '',
                isChild: true,
                children: [{
                    name: '关于我们',
                    path: '/maboutchild'
                },{
                    name: '公司资质',
                    path: '/mqualifications'
                },{
                    name: '公司荣誉',
                    path: '/mglory'
                },{
                    name: '合作伙伴',
                    path: '/mpartner'
                },{
                    name: '企业文化',
                    path: '/mculture'
                },{
                    name: '招聘信息',
                    path: '/mrecruit'
                }],
                isOpen: false
            }]
        }
    },
    mounted() {

    },
    methods: {
        menuClose() {
            this.$emit('menuclose');
        },
        isOpen(c,i) {
            if (c) {
                let list = this.menuList;
                list[i].isOpen = !list[i].isOpen;
                this.menuList = list;
            }
        },
        toPath(path, id) {
            this.$router.push({
                path: path,
                query: {
                    id: id
                }
            })
            this.menuClose();
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mmenu {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    overflow: auto;
    z-index: 9999;
}
.mmenum-header {
    height: 1.2rem;
    padding: 0 .4rem;
    display: flex;
    background: #333;
    justify-content: space-between;
    align-items: center;
}
.mmenum-header img:nth-child(1) {
    width: .40rem;
    height: .40rem;
}
.mmenum-header img:nth-child(2) {
    width: 1.4rem;
    height: .51rem;
}
.mmenu-box {
    width: 100%;
    height: 1.3rem;
    font-size: .24rem;
    border-bottom: .01rem solid #333;
    line-height: 1.3rem;
    text-align: center;
    position: relative;
}
.mmenu-box h1 {
    color: #fff;
}
.mmenu-box-pos {
    position: absolute;
    top: 50%;
    margin-top: -.2rem;
    right: .8rem;
}
.mmenu-box-pos img {
    width: .4rem;
    height: .4rem;
}
.mmenu-box-child {
    font-size: .22rem;
    height: 1.25rem;
    text-align: center;
    line-height: 1.25rem;
}

.mmenu-box-child h2 {
    color: #fff;
}
</style>
