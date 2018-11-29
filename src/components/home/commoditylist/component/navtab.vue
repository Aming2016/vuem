<template>
    <div id="navtab">
        <ul>
            <li v-for="(item,index) in navlist" :key="index" :class="{activeli:active==index}" @click="activebtn(index)">{{item.category_name}}</li>           
        </ul>
    </div>
</template>
<script>
export default {
  name: "navtab",
  data() {
    return {
        navlist:"",
        active:0,
    };
  },
  created(){
      this.$http.get(this.$url.URL.getallcatesub)
      .then(res=>{
          this.navlist=res.data.data;
          this.$emit("oneactive",res.data.data[0])
      })
  },
  methods: {
      activebtn(index){
          this.active=index
           this.$emit("oneactive",this.navlist[index])
      }
  }
};
</script>
<style scoped lang="less">
#navtab {
  //   width: 100%;
  height: 0.3rem;
  > ul {
    display: flex;
    flex-flow: row nowrap;
    overflow: scroll;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
    border-bottom: 0.01rem solid #999999;
    box-sizing: border-box;
    width: 100%;
    > li {
      flex: 1rem 0 0;
      line-height: 0.3rem;
      padding: 0 0.2rem;
      box-sizing: border-box;
    }
  }
  .activeli{
      border-bottom: 0.005rem solid #20c7c9;
      color:#20c7c9;
  }
}
</style>
