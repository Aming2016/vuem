<template >
  <div class="commoditydetails">
      <z-herder :header="header" :show="true"></z-herder>
      <ul>
        <router-link tag="li" :to="item.path" replace v-for="(item,index) in navlist" :key="index" :class="{activeclass:index==active}" @click.native="activebtn(index)">
          {{item.value}}
        </router-link>
      </ul>
       <router-view></router-view>
  </div>

</template>

<script>
export default {
  name: "commoditydetails",
  data() {
    return {
      header: "下单",
      active:0,
      navlist: [{path:"/regularorder",value:"普通下单"},{path:"/multipleorders",value:"多条下单"},{path:"/bulkorder",value:"批量下单"}]
    };
  },
  methods: {
    activebtn(index){
      this.active=index;
    }
  },
  components: {},
};
</script>
<style scoped lang="less">
@import "../../../common/css/allcss.less";
.commoditydetails{
  border-top:0.005rem solid #ffffff;
  box-sizing: border-box;
  height:100%;

}
ul {
  position: fixed;
  top:0.4rem;
  left:0;
  width: 100%;
  background: #ffffff;
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-flow: row nowrap;
  justify-content: space-around;
  li {
    padding: 0.05rem 0;
  }
}
.activeclass{
  border-bottom:0.005rem solid @color-primary;
  box-sizing: border-box;
  color:@color-primary;
}
</style>
