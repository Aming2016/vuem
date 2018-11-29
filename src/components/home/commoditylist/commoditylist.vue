<template >
  <div class="hello">
    <div id="serchbox">
      <!-- 搜索框 -->
      <z-search @search="search"></z-search>
    </div>
    <!-- 一级导航 -->
    <navtab @oneactive="oneactive"></navtab>
    <div id="contentbox">
      <!-- 二级导航 -->
      <sidebarnavtab style="float:left;" :twonavlist="twonavlist" @activebtn="activebtn"></sidebarnavtab>
      <!-- 商品列表 -->
      <contentbox style="float:right;" :commodityobjct="commodityobjct">
      </contentbox>
    </div>
  </div>

</template>

<script>
import navtab from "./component/navtab.vue";
import sidebarnavtab from "./component/sidebarnavtab.vue";
import contentbox from "./component/content.vue";
export default {
  name: "HelloWorld",
  data() {
    return {
      twonavlist: "",
      search: "",
      commodityobjct: "",
    };
  },
  methods: {
    //搜索框传参
    search(val) {
      // this.search=val;
      // console.log(this.search)
    },
    //一级导航传过来的参数
    oneactive(val) {
      this.twonavlist = val;
      this.commodityobjct = val.cate_list[0];
    },
    activebtn(val) {
      this.commodityobjct = val;
    },
    
  },
  components: {
    navtab,
    sidebarnavtab,
    contentbox
  }
};
</script>
<style scoped lang="less">
.hello{
  // border:1px solid #20c7c9;
  box-sizing: border-box;
}
#serchbox {
  // margin-top:0.4rem;
  width: 100%;
  height: 0.5rem;
  background: #20c7c9;
  padding-top: 0.2rem;
}
#contentbox {
  width: 100%;
  height: calc(100vh - 1.52rem);
  position: fixed;
  bottom: 0.5rem;
}
</style>
