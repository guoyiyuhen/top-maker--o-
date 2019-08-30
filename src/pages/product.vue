<template>
    <div class="product">
        <com-returntop></com-returntop>
        <img class="product-banner" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/product/banner.png" alt="">
        <div class="product-title">
            <h1>Simulation Products</h1>
            <p>仿真产品</p>
        </div>
        <div class="product-menu">
            <ul>
                <li v-for="(item,index) in menuList" :key="index" :class="activeName == index ? 'product-menu-active' : 'product-menu-noactive'" @click="menuClick(index)">{{item.name}}</li>
            </ul>
        </div>
        <div class="product-list">
            <div class="product-list-box" v-for="(item,index) in dataList" :key="index">
                <div class="product-list-text" v-if="index % 2 == 0"> 
                    <h1>{{item[0].category.name}}</h1>
                    <div></div>
                    <p>
                        <span v-for="(child,cid) in item" :key="cid" @click="toDetail(child.id,child.category_id,item[0].category.name)"><span v-show="cid != 0">、</span>{{child.name}}</span>
                    </p>
                </div>
                <div class="product-list-img">
                    <img :src="item[0].img" alt="">
                </div>
                <div class="product-list-text"  v-if="index % 2 != 0">
                    <h1>{{item[0].category.name}}</h1>
                    <div></div>
                    <p>
                        <span v-for="(child,cid) in item" :key="cid" @click="toDetail(child.id,child.category_id,item[0].category.name)"><span v-show="cid != 0">、</span>{{child.name}}</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import comReturntop from "@/components/returntop";
import { Article,ArChildren } from './../services/article';
import { setTimeout } from 'timers';
export default {
    components: {
        comReturntop
    },
    data() {
        return {
            activeName: 0,
            menuList: [{
                name: '电力仿真',
                id: '82'
            },{
                name: '建材仿真',
                id: '83'
            },{
                name: '三维仿真',
                id: '84'
            },{
                name: '虚拟实验',
                id: '85'
            },{
                name: '教学资源库',
                id: '86'
            },{
                name: '能源化工仿真',
                id: '87'
            },{
                name: '暖通制冷仿真',
                id: '88'
            },{
                name: '军工仿真',
                id: '89'
            }],
            dataList: [[{
                category_id: 0,
                id: 0,
                name: '',
                category: {
                    name: ''
                }
            }]],
            cList: [{
                id: '82',
                cid: ['93','94','95','96','97','98','99']
            },{
                id: '83',
                cid: ['100','101','102','103','104','105','106','107']
            },{
                id: '84',
                cid: ['108','109','110','111','112','113','114','115','116','117','118','119','120']
            },{
                id: '85',
                cid: ['121']
            },{
                id: '86',
                cid: ['122','123','124']
            },{
                id: '87',
                cid: ['125']
            },{
                id: '88',
                cid: ['126','127','128','129','130','131','132','133','134']
            },{
                id: '89',
                cid: ['135']
            }]
        };
    },
    watch: {},
    created() {},
    mounted() {
        this.menuClick(0);
    },
    methods: {
        menuClick(index) {
            this.activeName = index;
            let dataList = [];
            let id = this.cList[index].id;
            ArChildren({
                pid: id
            }).then(res1 => {
                let imgList = res1.items;
                this.cList[index].cid.forEach(item => {
                    Article({
                        category_id: item
                    }).then(res2 => {
                        if (res2.items.length > 0) {
                            imgList.forEach(citem => {
                                if (citem.id == res2.items[0].category_id) {
                                    res2.items[0].img = citem.image;
                                }
                            })
                            dataList.push(res2.items);
                            this.dataList = dataList;
                        }
                    })
                })
            })
        },
        toDetail(id,fid,name) {
            let titleList = ['首页','仿真产品', this.menuList[this.activeName].name, name];
            this.$router.push({
                name: 'solutionActive',
                query: {
                    id: id,
                    type: fid,
                    titleList: titleList
                }
            });
        }
    }
};
</script>
<style>
.product {
        position: relative;
        background: #eee;
        padding-bottom: 80px;
    }
    .product-banner {
        width: 100%;
        height: 450px;
    }
    .product-title {
        position: absolute;
        top: 208px;
        width: 100%;
        text-align: center;
        color: #fff;
    }
    .product-title h1 {
        font-size: 50px;
    }
    .product-title p {
        font-size: 24px;
        margin-top: 10px;
    }
    .product-menu {
        width: 1200px;
        background: #fff;
        position: absolute;
        top: 410px;
        height: 80px;
        left: 50%;
        margin-left: -600px;
    }
    .product-menu ul {
        display: flex;
        width: 1200px;
        margin: 0 auto;
    }
    .product-menu li {
        width: 150px;
        cursor: pointer;
        height: 80px;
        font-size: 16px;
        text-align: center;
        line-height: 80px;
    }
    .product-menu .product-menu-active {
        background: #0a57f4;
        color: #fff;
    }
    .product-menu .product-menu-noactive {
        background: #fff;
        color: #333;
    }
    .product-list {
        padding-top: 100px;
        width: 1200px;
        margin: 0 auto;
    }

    .product-list-box {
        display: flex;
    }
    .product-list-img {
        position: relative;
        width: 600px;
        height: 294px;
    }
    .product-list-img img {
        width: 600px;
        height: 294px;
        cursor: pointer;
        transition: all ease 0.8s;
    }
    .product-list-img img:hover {
        transform: scale(1.03);
    }
    .product-list-text {
        width: 520px;
        height: 294px;
        padding: 0 40px;
        background: #e3e3e3;
        color: #333;
    }
    .product-list-text h1 {
        font-size: 34px;
        margin-top: 60px;
    }
    .product-list-text div {
        margin-top: 27px;
        margin-bottom: 30px;
        width: 36px;
        height: 3px;
        background: #0055d3;
    }
    .product-list-text p {
        font-size: 16px;
        line-height: 28px;
    }
    .product-list-text span {
        cursor: pointer;
    }
    .product-list-text span:hover {
        color: #0055d3;
    }
</style>