<template >
  <div class="bulkorder">
      

  </div>

</template>

<script>
export default {
    //批量下单
  name: "bulkorder",
  data() {
    return {
      details: "",
    };
  },
  created() {
    this.details = this.$store.state.details;
    console.log(this.details);
  },
  methods: {

  },
  components: {}
};
</script>
<style scoped lang="less">
@import "../../../common/css/allcss.less";

</style>
