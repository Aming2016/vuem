<template >
  <div class="hello">
    <z-herder :header="header" :show="true"></z-herder>
  </div>

</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      header:"首页"
    };
  },
  methods: {
    change(){
    },
    btn() {
    }
  }
};
</script>
<style scoped>  
</style>
