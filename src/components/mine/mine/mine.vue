<template id="mines">
  <div id="mine">
      <z-header :show="false" :header="headername"></z-header>
      <button style="margin-top:0.5rem;" @click="rechargebtn">充值</button>
  </div>
</template>
<script>
export default {
  data: function(){
    return {
        headername:"我的"
    };
  },
  computed:{
  },
  methods: {
      //充值页面
      rechargebtn(){
          this.$router.push("/recharge")
      }
  },
  watch: {}
};
</script>
<style scoped lang="less">
#mine{
    width:100%;
    min-height: 100%;
}
</style>
