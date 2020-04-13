<template>
    <nav class="tab-bar">
        <div class="tab-item" v-for="(item,index) in tabBarList" :key="index" @click="tabBarClick(index)">
            <img :src="item.img" ><h4 :class="item.textClass">{{item.value}}</h4>
        </div>
    </nav>
</template>

<script>
  let imgOnList=[require('@/images/meeting-on.png'),require('@/images/my-on.png')];
  let imgList=[require('@/images/meeting.png'),require('@/images/my.png')];

  export default {
    name: 'tabbar',
    props:['path'],
    data(){
      return{
        tabBarList:[
          {img:require('@/images/meeting.png'),value:'出入证',textClass:'',router:'/access/0'},
          {img:require('@/images/my.png'),value:'我的',textClass:'',router:'/user'},
          ]
      }
    },
    mounted(){
      this.setOn();
    },
    watch: {
      $route(route) {
        this.setOn();
      }
    },
    methods:{
      setOn(){
        let tabBarList = this.tabBarList,path = this.$route.path;
        console.log(this.$route);
        for (var i in tabBarList){
          let item = tabBarList[i];
          {
            if (item.router == path){
              this.tabBarList[i].textClass = 'on';
              this.tabBarList[i].img = imgOnList[i];
              continue;
            }
          }
          if (path !== '/'){
            item.textClass = '';
            item.img = imgList[i];
          }
        }
      },
      tabBarClick(index){
        let id = index;
        this.tabBarList[id].textClass = 'on';
        this.tabBarList[id].img = imgOnList[id];
        for(var i in this.tabBarList){
          let item = this.tabBarList[i]
          if(i == id){
            continue;
          }
          item.textClass = '';
          item.img = imgList[i];
        }
      // if (this.$store.getters.isiostrue) {
      //   location.href = this.tabBarList[id].router;
      // } else {
      //   this.$router.push(this.tabBarList[id].router);
      // }
        this.$router.push(this.tabBarList[id].router);
      }
    }
  }
</script>

<style lang="scss" scoped>

    .tab-bar{
        width: 100%;
        height:1.04rem;
        display: flex;
        position: fixed;
        bottom: 0;
        background:rgba(251,251,251,0.8);
        box-shadow:0 .1rem .32rem .12rem rgba(0,0,0,0.3);
        .tab-item{
            flex:1;
            filter:blur(0px);
            img{
                margin: .18rem auto .06rem;
                width: .48rem;
            }
            h4{
                text-align: center;
                font-size:.18rem;
                color: #606367;
                line-height:.2rem;
            }
            .on{
                color: #BC0A0A;
            }
        }
        &:before{
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            content: '';
            background:rgba(251,251,251,0.8);
            filter: blur(10px);
        }
    }
</style>
