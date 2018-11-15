<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="div_1">
        <span>fasdf</span>
      小二</div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
    };
  },
  created(){
    console.log(this.$http.get)
    console.log(this.$url)
  }
}
</script>

<style lang="less">
</style>
