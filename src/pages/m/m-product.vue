<template>
    <div class="mproduct">
        <div class="mproduct-banner"><h1>Simulation Products</h1><span>仿真产品</span></div>
        <com-mpage :list="list" :idx="idx" @changv="changeValue"></com-mpage>
        <div class="mproduct-box">
            <ul>
                <li v-for="(item,index) in dataList" :key="index" :class="index % 2 == 0 ? '' : 'reverse'" @click="todetail(index,item[0].id,item[0].category_id)">
                    <div><span>{{item[0].category.name}}</span><p></p></div>
                    <img :src="item[0].img" alt="">
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import comMpage from "@/components/m/m-page";
import { Article,ArChildren } from './../../services/article';
export default {
    components: {
        comMpage
    },
    data() {
        return {
            list: ['电力仿真','建材仿真','三维仿真','虚拟实验','数学资源库','能源化工仿真','暖通制冷仿真','军工仿真'],
            dataList: [],
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
            }],
            idx: 0
        };
    },
    watch: {},
    created() {},
    mounted() {
        this.menuClick(0);
    },
    methods: {
        changeValue(n) {
            this.menuClick(n);
        },
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
        todetail(index,id,fid) {
            this.$router.push({
                path: '/mpdetail',
                query: {
                    id: id,
                    type: fid
                }
            })
        }
    }
};
</script>
<style>
.mproduct {
    background: #eee;
}
.mproduct-banner {
    width: 100%;
    height: 2.4rem;
    background: url(./../../assets/m-product/mproduct1.png) center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: center;
}
.mproduct-banner h1 {
    font-size: .5rem;
}
.mproduct-banner span {
    font-size: .24rem;
    margin-top: .1rem;
}
.mproduct-box {
    padding: 0 .35rem .6rem .35rem;
}
.mproduct-box ul li {
    display: flex;
}
.mproduct-box .reverse {
    flex-direction: row-reverse;
}
.mproduct-box li div {
    font-size: .3rem;
    color: #333;
    width: 2.6rem;
    height: 1.9rem;
    padding-left: .3rem;
    position: relative;
    background: #e3e3e3;
    padding-top: .6rem;
    padding-right: .5rem;
}
.mproduct-box li span {
    margin-top: .9rem;
}
.mproduct-box li img {
    width: 3.4rem;
    height: 2.5rem;
}
</style>