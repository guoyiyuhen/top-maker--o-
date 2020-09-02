<template>
  <div class="main">
    <div class="about">智合疫情管理系统</div>
  </div>
</template>

<script>
import filter from "../filter";
import sdk from "../wx-js-sdk";

export default {
  name: "LoginPage",
  data() {
    return {

    };
  },
  created() {
    function callback() {}
    let data = {
      title: "疫情信息管理系统",
      desc: "",
      link: location.href.split('?')[0] + '#' + location.href.split('#')[1],
      imgUrl: ""
    };
    sdk.forward(window.location.href.split('#')[0], data, callback);
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.main {
   .about {
     font-size: .48rem;
     font-weight: bold;
     padding: .5rem;
     text-align: center;
   }
}
</style>

<style>
html,
body {
  background: #f8f8f8;
}
</style>
