<template>
    <div class="layout">
        <com-mheader v-on:menushow="menuShow"></com-mheader>
        <router-view></router-view>
        <com-mfooter></com-mfooter>
        <com-mmenu v-if="menu" v-on:menuclose="menuClose"></com-mmenu>
    </div>
</template>
<script>
import comMheader from "@/components/m/m-header";
import comMfooter from "@/components/m/m-footer";
import comMmenu from "@/components/m/m-menu";

export default {
    components: {
        comMheader,
        comMfooter,
        comMmenu
    },
    data() {
        return {
            menu: false
        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {
        menuShow() {
            this.menu = true;
        },
        menuClose() {
            this.menu = false;
        }
    }
};
</script>
<style>
.layout {
    width: 100%;
    height: 100%;
}
</style>
