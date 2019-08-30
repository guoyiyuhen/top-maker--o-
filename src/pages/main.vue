<template>
  <div class="layout">
    <com-mheader></com-mheader>
    <router-view></router-view>
    <com-mfooter></com-mfooter>
  </div>
</template>
<script>
import comMheader from "@/components/header";
import comMfooter from "@/components/footer";

export default {
    components: {
        comMheader,
        comMfooter
    },
    data() {
        return {

        };
    },
    watch: {},
    created() {},
    mounted() {

    },
    methods: {

    }
};
</script>
<style>

</style>
