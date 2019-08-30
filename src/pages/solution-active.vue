<template>
    <div class="sactive-home">
        <com-returntop></com-returntop>
        <img class="sactive-banner" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/about/about2.png" alt="">
        <div class="sactive-top">
            <div class="sactive-top-box">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active6.png" class="sactive-top-box-img" alt="">
                <div v-for="(item,index) in titleList" :key="index">
                    <img v-show="index !== 0" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active5.png" alt="">
                    <span>{{item}}</span>
                </div>
            </div>
        </div>
        <div class="sactive-bottom">
            <div class="sactive-bottom-menu">
                <p v-for="(item,idx) in list" :key="idx" @click="getList(item.id)">{{item.name}}</p>
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active7.png" class="sactive-bottom-menu-img1" alt="" @click="addbody">
                <div class="sactive-bottom-menu-img2" v-if="all > 1" @click="pageTo(true)"></div>
                <div class="sactive-bottom-menu-img3" v-if="all > 1" @click="pageTo(false)"></div>
            </div>
            <div class="sactive-bottom-right">
                <div>{{title}}</div>
                <div v-html="html"></div>
            </div>
        </div>
    </div>
</template>
<script>
import comReturntop from "@/components/returntop";
import { Article } from './../services/article';
export default {
    components: {
        comReturntop
    },
    data() {
        return {
            titleList: [],
            list: [],
            html: '',
            title: '',
            id: 0,
            type: 0,
            all: 0,
            allid: 0
        };
    },
    mounted() {
        this.titleList = this.$route.query.titleList;
        this.type = this.$route.query.type;
        this.getList2(this.$route.query.id);
    },
    watch: {

    },
    methods: {
        getList(id) {
            this.id = id;
            Article({category_id: this.type}).then(res => {
                this.list = [];
                res.items.forEach((item,index) => {
                    if (index >= this.allid * 6 && index < (this.allid + 1) * 6) {
                        this.list.push(item);
                    }
                })
                this.all = Math.ceil(res.items.length / 6);
                let listArr = [];
                this.list.forEach((item,index) => {
                    if (item.id == id) {
                        this.title = item.name;
                        this.html = item.content;
                        listArr.unshift(item);
                    } else {
                        listArr.push(item);
                    }
                })

                this.list = listArr;
            })
        },
        getList2(id) {
            this.id = id;
            let allid = 0;
            Article({category_id: this.type}).then(res => {
                this.list = [];
                res.items.forEach((item,index) => {
                    if (id == item.id) {
                        allid = parseInt(index/6);
                    }
                })
                res.items.forEach((item,index) => {
                    if (index >= allid * 6 && index < (allid + 1) * 6) {
                        this.list.push(item);
                    }
                })
                this.all = Math.ceil(res.items.length / 6);
                let listArr = [];
                this.list.forEach((item,index) => {
                    if (item.id == id) {
                        this.title = item.name;
                        this.html = item.content;
                        listArr.unshift(item);
                    } else {
                        listArr.push(item);
                    }
                })

                this.list = listArr;
            })
        },
        pageTo(change) {
            if (change) {
                if (this.allid <= 0) {
                    return;
                } else {
                    this.allid = this.allid - 1;
                    this.getList(this.id);
                }
            } else {
                if (this.allid == this.all - 1) {
                    return;
                } else {
                    this.allid = this.allid + 1;
                    this.getList(this.id);
                }
            }
        },
        addbody() {
            let num = Math.floor(Math.random()*(2 - this.list.length) + this.list.length - 1);
            let id = this.list[num].id;
            this.getList(id);
        }
    }
};
</script>
<style>
.sactive-home {
    padding-bottom: 80px;
}
.sactive-banner {
    width: 100%;
    height: 450px;
}
.sactive-top {
    width: 100%;
    height: 90px;
    background: #eee;
}
.sactive-top-box {
    width: 1200px;
    margin: 0 auto;
    height: 90px;
    display: flex;
    align-items: center;
}
.sactive-top-box div {
    font-size: 14px;
    color: #999;
    display: flex;
    align-items: center;
    margin-right: 20px;
}
.sactive-top-box div img {
    width: 6px;
    height: 6px;
    margin-right: 20px;
}
.sactive-top-box-img {
    width: 12px;
    height: 12px;
    margin-right: 14px;
}
.sactive-bottom {
    width: 1200px;
    margin: 0 auto;
    display: flex;
}
.sactive-bottom-menu {
    width: 330px;
    height: 640px;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active1.png') center no-repeat;
    background-size: 100% 100%;
    margin-right: 110px;
    position: relative;
    padding: 55px 0 0 30px;
    overflow: hidden;
}
.sactive-bottom-menu p {
    color: #fff;
    font-size: 20px;
    margin-bottom: 60px;
    overflow : hidden;
    text-overflow : ellipsis;
    white-space : nowrap;
    padding-right: 60px;
    cursor: pointer;
}
.sactive-bottom-right {
    width: 760px;
    margin-top: 40px;
}
.sactive-bottom-right div:nth-child(1) {
    font-size: 30px;
    color: #666;
    padding-bottom: 30px;
    text-align: center;
}
.sactive-bottom-right div:nth-child(2) img {
    width: 100%;
}
.sactive-bottom-menu-img1 {
    width: 36px;
    height: 22px;
    position: absolute;
    right: 20px;
    top: 54px;
    cursor: pointer;
}
.sactive-bottom-menu-img2 {
    width: 15px;
    cursor: pointer;
    height: 20px;
    position: absolute;
    bottom: 40px;
    left: 30px;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active10.png') center no-repeat;
    background-size: 100% 100%;
}
.sactive-bottom-menu-img2:hover {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active11.png') center no-repeat;
}
.sactive-bottom-menu-img3:hover {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active9.png') center no-repeat;
}
.sactive-bottom-menu-img3 {
    width: 15px;
    position: absolute;
    height: 20px;
    bottom: 40px;
    cursor: pointer;
    left: 75px;
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/active/active8.png') center no-repeat;
    background-size: 100% 100%;
}
</style>