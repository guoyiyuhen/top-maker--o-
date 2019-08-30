<template>
    <div class="mdownload">
        <div class="mdownload-video" v-if="videoShow">
            <div @click="closeVideo"></div>
            <video :src="src" autoplay controls></video>
        </div>
        <div class="mdownload-banner"><h1>Download</h1><span>下载中心</span></div>
        <h1 class="mdownload-h1">软件演示</h1>
        <div class="mdownload-movie">
            <div class="mdownload-movie-list">
                <ul>
                    <li v-for="(item,index) in list" :key="index" v-show="index == idx"><img :src="item.img" alt=""  @click="showVideo(item.src)"><div>{{item.name}}</div></li>
                </ul>
            </div>
            <div class="mdownload-movie-tip">
                <div v-for="(item,index) in list" :key="index" :class="idx == index ? 'mdownload-movie-tip1': ''" @click="tiptap(index)"></div>
            </div>
        </div>
        <h1 class="mdownload-h1">资料下载</h1>
        <div class="mdownload-list">
            <div class="mdownload-list-title">
                <div>名称</div>
                <div>大小</div>
                <div>下载</div>
            </div>
            <div class="mdownload-list-list">
                <div>ctrlBuilder控制系统图形化建模软件说明书</div>
                <div>1.98MB</div>
                <div><p><a href="" download="">Download</a></p></div>
            </div>
            <div class="mdownload-list-list">
                <div>gView使用说明书_V3.91</div>
                <div>0.98MB</div>
                <div><p><a href="" download="">Download</a></p></div>
            </div>
            <div class="mdownload-list-list">
                <div>MSP多学科仿真平台使用说明书</div>
                <div>1.01MB</div>
                <div><p><a href="" download="">Download</a></p></div>
            </div>
            <div class="mdownload-list-list">
                <div>PowerBuilder过程系统图形化建模软件说明书</div>
                <div>1.20MB</div>
                <div><p><a href="" download="">Download</a></p></div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    components: {
    },
    data() {
        return {
            idx: 0,
            list: [{
                img: 'http://www.cnr.cn/hnfw/jt/20190704/W020190704298622421348.jpg',
                name: '3D场景漫游与设备结构展示平台1',
                id: 1,
                src: 'http://192.168.31.54:8080/acm.mp4'
            },{
                img: 'http://www.cnr.cn/hnfw/jt/20190704/W020190704298622421348.jpg',
                name: '3D场景漫游与设备结构展示平台2',
                id: 2,
                src: 'http://192.168.31.54:8080/acm.mp4'
            },{
                img: 'http://www.cnr.cn/hnfw/jt/20190704/W020190704298622421348.jpg',
                name: '3D场景漫游与设备结构展示平台3',
                id: 3,
                src: 'http://192.168.31.54:8080/acm.mp4'
            },{
                img: 'http://www.cnr.cn/hnfw/jt/20190704/W020190704298622421348.jpg',
                name: '3D场景漫游与设备结构展示平台4',
                id: 4,
                src: 'http://192.168.31.54:8080/acm.mp4'
            },{
                img: 'http://www.cnr.cn/hnfw/jt/20190704/W020190704298622421348.jpg',
                name: '3D场景漫游与设备结构展示平台5',
                id: 5,
                src: 'http://192.168.31.54:8080/acm.mp4'
            },{
                img: 'http://www.cnr.cn/hnfw/jt/20190704/W020190704298622421348.jpg',
                name: '3D场景漫游与设备结构展示平台6',
                id: 6,
                src: 'http://192.168.31.54:8080/acm.mp4'
            }],
            src: '',
            videoShow: false
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        tiptap(n) {
            this.idx = n;
        },
        showVideo(src) {
            this.src = src;
            this.videoShow = true;
        },
        closeVideo() {
            this.videoShow = false;
        }
    }
};
</script>
<style>
.mdownload-banner {
    width: 100%;
    height: 2.4rem;
    background: url(./../../assets/solution/solution1.png) center no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    color: #fff;
    justify-content: center;
    align-items: center;
}
.mdownload-banner h1 {
    font-size: .5rem;
}
.mdownload-banner span {
    font-size: .24rem;
    margin-top: .1rem;
}
.mdownload-h1 {
    height: 1.3rem;
    line-height: 1.3rem;
    text-align: center;
    font-size: .36rem;
    color: #333;
}
.mdownload-list {
    padding: 0 .3rem;
}
.mdownload-list-title {
    height: .5rem;
    display: flex;
    line-height: .5rem;
}
.mdownload-list-title div {
    background: #0055d3;
    color: #fff;
    padding-left: .2rem;
    font-size: .14rem;
}
.mdownload-list-title div:nth-child(1) {
    width: 4rem;
    margin-right: .02rem;
}
.mdownload-list-title div:nth-child(2) {
    width: .88rem;
    margin-right: .02rem;
}
.mdownload-list-title div:nth-child(3) {
    width: 1.6rem;
}
.mdownload-list-list {
    height: .7rem;
    display: flex;
    line-height: .7rem;
    color: #333;
    font-size: .12rem;
}
.mdownload-list-list:nth-child(2n + 1) {
    background: #fff;
}
.mdownload-list-list div {
    padding-left: .2rem;
}
.mdownload-list-list div:nth-child(1) {
    width: 4rem;
    margin-right: .02rem;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
.mdownload-list-list div:nth-child(2) {
    width: .88rem;
    margin-right: .02rem;
}
.mdownload-list-list div:nth-child(3) {
    width: 1.6rem;
    display: flex;
    align-items: center;
    height: .7rem;
}
.mdownload-list-list div:nth-child(3) p {
    width: 1.36rem;
    height: .3rem;
    line-height: .3rem;
    text-align: center;
    border: .02rem solid #0055d3;
    border-radius: .3rem;
    background: #fff;
    color: #0055d3;
    cursor: pointer;
}
.mdownload-list-list div:nth-child(3) p:active {
    background: #0055d3;
    color: #fff;
}
.mdownload-list-list div:nth-child(3) p a {
    color: #0055d3;
}
.mdownload-list-list div:nth-child(3) p:active a {
    color: #fff;
}
.mdownload {
    background: #eee;
    padding-bottom: .6rem;
}

.mdownload-movie-list {
    margin-top: .6rem;
}
.mdownload-movie-list ul {
    display: flex;
    justify-content: center;
}
.mdownload-movie-list img {
    width: 100%;
}
.mdownload-movie-list li {
    display: flex;
    width: 80%;
    flex-direction: column;
    margin: 0 .04rem;
}
.mdownload-movie-list li div {
    width: 100%;
    height: 1.09rem;
    padding-left: .2rem;
    box-sizing: border-box;
    line-height: 1.09rem;
    font-size: .2rem;
    background: #fff;
    color: #333;
}
.mdownload-movie-tip {
    display: flex;
    margin-top: .4rem;
    justify-content: center;
    margin-bottom: .7rem;
}
.mdownload-movie-tip div {
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background-color: #d4d4d4;
    margin: 0 .1rem;
}
.mdownload-movie-tip .mdownload-movie-tip1 {
    width: .2rem;
    height: .2rem;
    border-radius: 50%;
    background-color: #0a57f4;
}

.mdownload-video {
    background: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
}

.mdownload-video div {
    width: 100%;
    height: 100%;
}

.mdownload-video video {
    position: absolute;
    top: 4rem;
    left: 0;
    width: 100%;
    z-index: 100;
}
</style>