<template id="goodsactions">
    <div class="goodsaction">
        <div>
            <img src="../../../imgs/login/home.png" alt="">
            <p>首页</p>
        </div>
        <div>
            <p>￥{{allmoney}}</p>
            <p @click="buybtn">立即购买</p>
        </div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
    };
  },
  props:['allmoney'],
  methods: {
      buybtn(){
          this.$emit("buybtn")
      }
  },
  watch:{
   
  }
};
</script>
<style scoped lang="less">
.goodsaction {
  width: 100%;
  height: 0.5rem;
  background: #ffffff;
  position: fixed;
  bottom: 0;
  left: 0;
  > div:nth-of-type(1) {
    width: 30%;
    height: 0.5rem;
    text-align: center;
    float: left;
    border-top: 0.005rem solid #999999;
    box-sizing: border-box;
    > img {
      width: 0.3rem;
    }
    > p {
      font-size: 0.1rem;
      line-height: 1;
      color: #999999;
    }
  }
  > div:nth-of-type(2) {
    width: 70%;
    height: 0.5rem;
    background: #ef4754;
    float: left;
    color: #ffffff;
    text-align: center;
    font-size: 0.14rem;
    > p:nth-of-type(1) {
      padding-top: 0.1rem;
    }
    > p {
      line-height: 1.2;
    }
  }
}
</style>
