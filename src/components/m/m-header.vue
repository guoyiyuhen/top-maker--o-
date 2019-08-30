<template>
    <div class="mheader">
        <img src="./../../assets/m-home/daohangtiao.png" @click="menuShow" alt="" >
        <img src="./../../assets/m-home/logo.png" @click="toHome" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: false
        }
    },
    mounted() {

    },
    methods: {
        toHome() {
            this.$router.push({
                name: 'mhome'
            })
        },
        menuShow() {
            this.$emit('menushow');
        }
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mheader {
        height: 1.2rem;
        padding: 0 .4rem;
        display: flex;
        background: #333;
        justify-content: space-between;
        align-items: center;
    }
    .mheader img:nth-child(1) {
        width: .58rem;
        height: .45rem;
    }
    .mheader img:nth-child(2) {
        width: 1.4rem;
        height: .51rem;
    }
</style>
