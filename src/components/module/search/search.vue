<template id="papssword">
    <div class="search">
        <img src="../../../imgs/search.png" alt="">
         <form id="myform" action="" onsubmit="return false;">
        <input type="search" v-model="search" placeholder="请输入您要搜索的内容" @keyup.enter="showbtn($event)">
        </form>
        <span @click="searchbtn">搜索</span>
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      search: ""
    };
  },
  props: {
    paswdtext: String
  },
  methods: {
    gobtn() {
      this.$router.go(-1);
    },
    showbtn(ev) {
        this.$emit("search", this.search);
    },
    searchbtn(){
        this.$emit("search",this.search)
    }
  },
  watch: {
  }
};
</script>
<style scoped lang="less">
.search {
  margin: 0 0.4rem;
height: 0.3rem;
    border-radius: 0.15rem;
    background: #4df1d3;
    >img{
        width:0.2rem;
        margin-left:0.1rem;
        margin-top:0.01rem;
    }
    >span{
        color:#ffffff;
    }
    >form{
        display: inline-block;
        width:75%;
        height:100%;
    }
    input {
    width: 100%;
    height:100%;
    outline: none;
    border: none;
    text-align: center;
    color:#ffffff;
    background:fixed;
  }
}
input::-webkit-input-placeholder {
  color: #ffffff;
}
</style>
