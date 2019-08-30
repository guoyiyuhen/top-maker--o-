<template>
    <div class="mglory">
        <div class="mglory-bottom">
            <div class="mglory-top-list2" v-for="(item,index) in list2" :key="index" v-show="idx == item.id">
                <div :class="item.class"></div>
                <div>{{item.name}}</div>
            </div>
        </div>
        <div class="mglory-top-tip">
            <div v-for="item in [0,1]" :key="item" @click="pageto2(item)" :class="idx == item ? 'mglory-active' : 'mglory-tipbg'"></div>
        </div>
    </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            list2: [{
                name: '2018全国建材职业教育教学指导委员会教学成果奖',
                class: 'mglory-s-img1',
                id: 0
            },{
                name: '2018城乡建设科学技术成果奖',
                class: 'mglory-s-img2',
                id: 0
            },{
                name: '2018商混站仿真教学软件科学技术奖三等奖',
                class: 'mglory-s-img3',
                id: 0
            },{
                name: '2018中国煤炭工业科学技术三等奖',
                class: 'mglory-s-img4',
                id: 0
            },{
                name: '2017建材行指委工作贡献奖',
                class: 'mglory-s-img5',
                id: 1
            },{
                name: '2016山东省电力职工技术成果奖三等奖',
                class: 'mglory-s-img6',
                id: 1
            },{
                name: '2014国家教育成果二等奖',
                class: 'mglory-s-img7',
                id: 1
            }],
            idx: 0
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        pageto2(item) {
            this.idx = item;
        }
    }
};
</script>
<style>
.mglory-s-img1 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-glory/mglory1.png') center no-repeat;
    background-size: 100% 100%;
}
.mglory-s-img2 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-glory/mglory2.png') center no-repeat;
    background-size: 100% 100%;
}
.mglory-s-img3 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-glory/mglory6.png') center no-repeat;
    background-size: 100% 100%;
}
.mglory-s-img4 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-glory/mglory7.png') center no-repeat;
    background-size: 100% 100%;
}
.mglory-s-img5 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-glory/mglory4.png') center no-repeat;
    background-size: 100% 100%;
}
.mglory-s-img6 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-glory/mglory5.png') center no-repeat;
    background-size: 100% 100%;
}
.mglory-s-img7 {
    background: url('http://bernouly.oss-cn-beijing.aliyuncs.com/images/m-glory/mglory3.png') center no-repeat;
    background-size: 100% 100%;
}

.mglory-bottom {
    margin-top: .2rem;
    display: flex;
    padding: .4rem .25rem;
    flex-wrap: wrap;
    background: #fff;
}
.mglory-top-list2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 3.4rem;
    margin: 0 .05rem;
    margin-top: .2rem;
}
.mglory-top-list2 div:nth-child(1) {
    width: 3.4rem;
    height: 2.4rem;
}
.mglory-top-list2 div:nth-child(2) {
    font-size: .18rem;
    width: 3.08rem;
    height: 1rem;
    line-height: 1rem;
    background: #fff;
    padding-left: .2rem; 
    color: #333;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    box-shadow: .04rem .04rem .04rem rgba(200,200,200,.4);
}
.mglory-top-list2 div:nth-child(2):active {
    background: #0055d3;
    color: #fff;
}

.mglory-top-tip {
    display: flex;
    height: .5rem;
    width: 100%;
    background: #fff;
    justify-content: center;
}
.mglory-top-tip div {
    margin: 0 .1rem;
    width: .15rem;
    height: .15rem;
    border-radius: 50%;
}
.mglory-active {
    background: #0055d3;
}
.mglory-tipbg {
    background: #999;
}
</style>