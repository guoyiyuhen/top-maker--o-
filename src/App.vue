<template>
    <div class="font-content">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'app',
    watch: {
        '$route' () {
            document.title=this.$route.meta.title;
        }
    },
    mounted(){
        console.log('版本号：v1.0.1');
    },
    methods: {

    }
}
</script>

<style>
    html {
        font-size: 16px;
    }
    img {
        cursor: pointer;
    }
</style>
