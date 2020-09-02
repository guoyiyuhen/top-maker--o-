<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      path: ""
    };
  },
  mounted() {
    if (this.$route.path === "/") {
      this.$router.push('/access/0');
    }
  },
  methods: {}
};
</script>

<style scoped>
</style>
