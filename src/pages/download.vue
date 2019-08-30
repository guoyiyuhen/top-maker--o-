<template>
    <div class="download">
        <com-returntop></com-returntop>
        <div class="download-video" v-if="videoShow">
            <div @click="closeVideo"></div>
            <video :src="src" width="800" height="500" autoplay controls></video>
        </div>
        <img class="download-banner" src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/download/download2.jpg" alt="">
        <h1 class="download-h1">软件演示</h1>
        <div class="download-movie">
            <div class="download-movie-list">
                <ul :style="'left:' + left + 'px'">
                    <li v-for="(item,index) in list" :key="index" @click="showVideo(item.src)"><img :src="item.img" alt=""><span>{{item.name}}</span><img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/download/bofang.png" class="download-movie-list-img" alt=""></li>
                </ul>
            </div>

            <div class="tip download-movie-left" @click="jiantouclick(1)">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/zuo.png" alt="">
            </div>
            <div class="tip download-movie-right" @click="jiantouclick(2)">
                <img src="http://bernouly.oss-cn-beijing.aliyuncs.com/images/qualifications/you.png" alt="">
            </div>
        </div>
        <h1 class="download-h1">资料下载</h1>
        <div class="download-list">
            <div class="download-list-title">
                <div>名称</div>
                <div>大小</div>
                <div>下载</div>
            </div>
            <div class="download-list-list">
                <div>ctrlBuilder控制系统图形化建模软件说明书</div>
                <div>1.98MB</div>
                <div><p><a href="" download="">Download</a></p></div>
            </div>
            <div class="download-list-list">
                <div>gView使用说明书_V3.91</div>
                <div>0.98MB</div>
                <div><p><a href="" download="">Download</a></p></div>
            </div>
            <div class="download-list-list">
                <div>MSP多学科仿真平台使用说明书</div>
                <div>1.01MB</div>
                <div><p><a href="" download="">Download</a></p></div>
            </div>
            <div class="download-list-list">
                <div>PowerBuilder过程系统图形化建模软件说明书</div>
                <div>1.20MB</div>
                <div><p><a href="" download="">Download</a></p></div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import comReturntop from "@/components/returntop";
export default {
    components: {
        comReturntop
    },
    data() {
        return {
            left: 0,
            src: '',
            videoShow: false,
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
            }]
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        jiantouclick(n) {
            if (n == 2) {
                if (this.left - 400 < -1200) {
                    return;
                }
                this.left -= 400;
            } else {
                if (this.left + 400 > 0) {
                    return;
                }
                this.left += 400;
            }
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
.download-banner {
    width: 100%;
    height: 300px;
}
.download-h1 {
    height: 130px;
    line-height: 130px;
    text-align: center;
    font-size: 36px;
    color: #333;
}
.download-list {
    width: 1200px;
    margin: 0 auto;
}
.download-list-title {
    height: 50px;
    display: flex;
    line-height: 50px;
}
.download-list-title div {
    background: #0055d3;
    color: #fff;
    padding-left: 20px;
    font-size: 16px;
}
.download-list-title div:nth-child(1) {
    width: 672px;
    margin-right: 2px;
}
.download-list-title div:nth-child(2) {
    width: 231px;
    margin-right: 2px;
}
.download-list-title div:nth-child(3) {
    width: 231px;
}
.download-list-list {
    height: 70px;
    display: flex;
    line-height: 70px;
    color: #333;
    font-size: 16px;
}
.download-list-list:nth-child(2n + 1) {
    background: #fff;
}
.download-list-list div {
    padding-left: 20px;
}
.download-list-list div:nth-child(1) {
    width: 672px;
    margin-right: 2px;
}
.download-list-list div:nth-child(2) {
    width: 231px;
    margin-right: 2px;
}
.download-list-list div:nth-child(3) {
    width: 231px;
    display: flex;
    align-items: center;
}
.download-list-list div:nth-child(3) p {
    width: 136px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 2px solid #0055d3;
    border-radius: 30px;
    background: #fff;
    cursor: pointer;
}
.download-list-list div:nth-child(3) p a {
    color: #0055d3;
}
.download-list-list div:nth-child(3) p:hover a {
    color: #fff;
}
.download-list-list div:nth-child(3) p:hover {
    background: #0055d3;
}
.download {
    background: #eee;
    padding-bottom: 80px;
}

.download-movie {
    width: 1200px;
    margin: 0 auto;
    position: relative;
}

.download-movie-list {
    width: 1200px;
    overflow: hidden;
    position: relative;
    height: 355px;
}
.download-movie-list ul {
    display: flex;
    position: absolute;
    top: 0;
    height: 355px;
}
.download-movie-list li {
    display: flex;
    height: 355px;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    cursor: pointer;
}
.download-movie-list li img {
    width: 396px;
    height: 316px;
    margin: 0 2px;
}
.download-movie-list li span {
    margin-top: 20px;
    font-size: 18px;
    color: #333;
}
.download-movie-list li .download-movie-list-img {
    width: 80px;
    height: 80px;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -40px;
    margin-top: -65px;
}
.download-movie .tip {
    width: 50px;
    height: 70px;
    position: absolute;
    font-weight: normal;
    top: 50%;
    margin-top: -70px;
}
.download-movie .tip img {
    width: 100%;
    height: 100%;
    border: 0 none;
    box-shadow: none;
    cursor: pointer;
}
.download-movie-left {
    left: -70px;
}
.download-movie-right {
    right: -70px;
}

.download-video {
    background: rgba(0,0,0,.7);
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1001;
}

.download-video div {
    width: 100%;
    height: 100%;
}

.download-video video {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -400px;
    margin-top: -250px;
    z-index: 100;
}
</style>