<template id="commessages">
    <div class="commessage">
        <div>商品详情:</div>
        <div>{{messagecontent}}</div>
    </div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  props:["messagecontent"],
  methods: {},
  watch: {}
};
</script>
<style scoped lang="less">
.commessage{
    width:100%;
    background:#ffffff;
    >div:nth-of-type(1){
        padding:0.05rem 0;
        margin-left:0.1rem;
        font-size:0.14rem;
    }
    >div:nth-of-type(2){
        margin:0 0.1rem;
        padding-bottom:0.15rem;
    }
}
</style>
