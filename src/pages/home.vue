<template>
    <div class="home">
        
    </div>
</template>
<script>
import { Article, timestampToTime } from './../services/article';
import Swiper from "swiper";
let timer = null;
export default {
    components: {
    },
    data() {
        return {
            banIdx: 0
        };
    },
    watch: {},
    destroyed () {
        clearInterval(timer);
    },
    mounted() {

        // var mySwiper = new Swiper('.swiper-container', {
        //     autoplay: {
        //         delay: 3000,
        //         stopOnLastSlide: false,
        //         disableOnInteraction: false,
        //     },
        //     loop:true,
        //     disableOnInteraction: false,
        //     pagination: {
        //         el: '.swiper-pagination',
        //         clickable: true,
        //         bulletElement: 'div'
        //     }
        // })
        this.imgWidth = window.innerWidth;
    },
    methods: {
        bannertap(item) {
            this.banIdx = item;
            this.left = - item * this.imgWidth;
        }
    }
};
</script>
<style>
@import "./../style/swiper.min.css";
.swiper-pagination div {
    background: #fff;
    width: 14px;
    height: 14px;
}
</style>