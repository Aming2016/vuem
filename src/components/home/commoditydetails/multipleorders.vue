<template >
  <div class="multipleorders">

  </div>

</template>

<script>
export default {
    //多条下单
  name: "multipleorders",
  data() {
    return {
      details: "",
    };
  },
  created() {
    this.details = this.$store.state.details;
  },
  methods: {

  },
  components: {}
};
</script>
<style scoped lang="less">
@import "../../../common/css/allcss.less";

</style>
