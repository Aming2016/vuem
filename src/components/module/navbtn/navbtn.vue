<template id="navbtns">
  <div id="anvbtnwarp" v-if="activeindex==0||activeindex==1||activeindex==2">
    <ul id="anvbtn">
      <li @click="btnrouter">
          <img src="../../../imgs/navbtn/home_selected.png" alt="" v-if="activeindex==0">
          <img src="../../../imgs/navbtn/home_normal.png" alt="" v-else>         
          <div :class="{navactive:activeindex==0}">已购</div>
      </li>
      <li @click="commoditylist">
          <img src="../../../imgs/navbtn/discover_selected.png" alt="" v-if="activeindex==1">
          <img src="../../../imgs/navbtn/discover_normal.png" alt="" v-else>
          <div :class="{navactive:activeindex==1}">导航</div>
      </li>
      <li @click="minebtn">
          <img src="../../../imgs/navbtn/profile_selected.png" alt="" v-if="activeindex==2">
          <img src="../../../imgs/navbtn/profile_normal.png" alt="" v-else>
          <div :class="{navactive:activeindex==2}">我的</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
    };
  },
  computed:{
      activeindex(){         
          return this.$store.state.activebtn
      }
  },
  methods: {
      btnrouter(){
          this.$router.push("/")
      },
      commoditylist(){
          this.$router.push("/commoditylist")
      },
      minebtn(){
          this.$router.push("/mine")
      }
  },
  watch: {}
};
</script>
<style scoped lang="less">
#anvbtnwarp{
    width:100%;
    height:0.5rem;
    position: fixed;
    bottom:0;
    left:0;
    background: #ffffff;
    border-top: 0.01rem solid #999999;
    box-sizing: border-box;
}
#anvbtnwarp {
  width:100%;
    height:0.5rem;
    position: fixed;
    bottom:0;
    left:0;
  > ul {
    display: flex;
    flex-flow: row nowrap;
    display: -webkit-box;
    width: 100%;
    justify-content: space-around;
    > li {
    flex-grow:1;
    text-align: center;
    >img{
        // width:0.2rem;
        height:0.2rem;
        padding-top:0.1rem;
    }
    >div{
        font-size:0.12rem;
    }
    }
  }
}
.navactive{
    color:#20c7c9;
}
</style>
