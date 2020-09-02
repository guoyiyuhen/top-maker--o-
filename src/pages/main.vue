<template>
  <div class="layout">
    <com-mheader :callBack="loginShow" :nickname="nickname" :changelogin="changelogin" :isres="isres"></com-mheader>
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
          islogin: true,
          nickname: '',
          isres: false
        };
    },
    watch: {},
    created() {},
    mounted() {
        let nickname = localStorage.getItem('nickname');
        let access_token = localStorage.getItem('access_token');
        if (access_token) {
            this.nickname = nickname;
            this.isres = true;
        }
    },
    methods: {
      loginShow(isshow,change) {
        this.isshow = isshow;
        this.islogin = change;
      },
      cancel(change) {
        this.isshow = false;
        if (change) {
          let nickname = localStorage.getItem('nickname');
          let access_token = localStorage.getItem('access_token');
          if (access_token) {
              this.nickname = nickname;
              this.isres = true;
          }
        }
      },
      changelogin(change, nickname) {
        this.isres = change;
        this.nickname = nickname;
      }
    }
};
</script>
<style lang="scss" scoped>

</style>
