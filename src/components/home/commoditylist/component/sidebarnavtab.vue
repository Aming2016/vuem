<template>
    <div id="sidebarnavtab">
        <ul>
            <li v-for="(item,index) in twonavlist.cate_list" :key="index" :class="{nativeclass:active==index}" @click="activebtn(item,index)">{{item.category_sub_name}}</li> 
        </ul>
    </div>

</template>
<script>
export default {
  name: "navtab",
  data() {
    return {
      navlist: "",
      active: 0,
      commoditylist:"",
    };
  },
  props:["twonavlist"],
  methods: {
      activebtn(item,index){
          this.active=index;
        this.$emit("activebtn",item)
      }
  },
  watch:{
      twonavlist(){
          this.active=0;
      }
  }
  
};
</script>

<style scoped lang="less">

#sidebarnavtab {
  width: 30%;
  height:100%;
  > ul {
    width: 100%;
    height:100%;
    display: flex;
    flex-flow: column nowrap;
    overflow: scroll;
    display: -webkit-box;
    -webkit-overflow-scrolling: touch;
    border-right: 0.005rem solid #cccccc;
    box-sizing: border-box;
    > li {
      padding:0.05rem 0;
      width:100%;
      text-align: center;
      color:#20c7c9;
    }
  }
}
.nativeclass{
    background:#20c7c9;
    position: relative;
    color:#ffffff !important;
}
</style>
