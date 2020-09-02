<template>
      <div>
        <van-loading v-if="loading" color="#1989fa" size="80px" style="margin: 100px auto;" />
        <router-view v-else />
      </div>
      
</template>

<script>
  import getCode from  '@/services/getCode.js'
  import wxLogin from  '@/services/wxLogin.js'
  export default {
    name: 'App',
    data(){
      return{
        code: this.$route.query.code,
        loading: true
      }
    },
    mounted(){
      const request = this.getRequest();
      if (request.code) {
          wxLogin.login(request).then(res => {
            this.loading = false;
            localStorage.setItem('access_token',res.access_token);
            localStorage.setItem('userInfo',JSON.stringify(res));
          }).catch(err => {
            this.$notify(err[0] ? err[0].message : "网络错误");
          });
      } else {
        this.getCode();
      }
    },
    computed: {
      token () {
        return this.$store.state.token;　　//需要监听的数据
      }
    },
    watch: {
      token (newVal, oldVal) {
        if (newVal) {
          this.$store.dispatch('token', false);
          this.$notify('身份过期，请重新扫码进入');
          this.loading = true;
        }
      }
    },
    methods:{
      getCode(){

        let data = {
          appid: 'wx0da0d3167731886a',
          redirect_uri: location.href,
          response_type: 'code',
          scope: 'snsapi_userinfo'
        }

        getCode.get(data);
      },
      getRequest() {
        var url = location.search; //获取url中"?"符后的字符串
        var theRequest = new Object();
        if (url.indexOf("?") != -1) {
          var str = url.substr(1);
          var strs = str.split("&");
          for(var i = 0; i < strs.length; i ++) {
              theRequest[strs[i].split("=")[0]]=(strs[i].split("=")[1]);
          }
        }
        return theRequest;
      }
    }
  }
</script>

