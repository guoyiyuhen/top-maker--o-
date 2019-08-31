<template>
  <div class="layout">
    <com-mheader :callBack="loginShow"></com-mheader>
    <com-mlogin :callBack="cancel" v-if="isshow" :islogin="islogin"></com-mlogin>
    <router-view></router-view>
    <com-mfooter></com-mfooter>
  </div>
</template>
<script>
import comMheader from "@/components/header";
import comMfooter from "@/components/footer";
import comMlogin from "@/components/login";

export default {
    components: {
        comMheader,
        comMfooter,
        comMlogin
    },
    data() {
        return {
          isshow: false,
          islogin: true
        };
    },
    watch: {},
    created() {},
    mounted() {
    },
    methods: {
      loginShow(isshow,change) {
        this.isshow = isshow;
        this.islogin = change;
      },
      cancel() {
        this.isshow = false;
      }
    }
};
</script>
<style>

</style>
