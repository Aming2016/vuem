<template id="textinputs">
    <div class="textinput">
       <div>{{inputobject.name}}</div>
       <input :type="inputobject.type" :placeholder="inputobject.hint" v-model="inputobject.default">
    </div>
</template>
<script>
export default {
  data: function() {
    return {
    };
  },
  props:["inputobject"],
  methods: {},
  watch: {
     inputobject: {
      handler(newName, oldName) {
       this.$emit("num",this.inputobject.default)
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped lang="less">
.textinput {
  width: 100%;
  height: 0.4rem;
  background: #ffffff;
  > div {
    display: inline-block;
    width: 20%;
    height: 0.4rem;
    line-height: 0.4rem;
    text-indent: 0.1rem;
    vertical-align: middle;
  }
  > input {
    width: 79%;
    height: 0.4rem;
    background: none;
    outline: none;
    border: 0px;
    vertical-align: middle;
  }
}
</style>
