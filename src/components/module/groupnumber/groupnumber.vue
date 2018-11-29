<template id="textinputs">
<div>
    <div class="textinput" v-for="(item,index) in groupnumber" :key="index">
       <div>{{item.label}}</div>
       <input type="number" v-model="inputbox[item.name]" :max="item.max_qty" :min="item.min_qty">
    </div>
        <div class="textinput">
            <div>购买总数</div>
            <input type="number" readonly v-model="allnumber" style="color:#999999;">
        </div>
</div>
    
</template>
<script>
export default {
  data: function() {
    return {
      inputbox: {},
      allnumber:0,
    };
  },
  props: ["groupnumber"],
  methods: {},
  created() {
    this.groupnumber.forEach(element => {
      this.$set(this.inputbox, element.name, element.default_qty);
    });
  },
  watch: {
    inputbox: {
      handler(newName, oldName) {  
        this.allnumber=0;
        let inputbox = JSON.parse(JSON.stringify(this.inputbox));
        for(name in inputbox){
            if(inputbox[name]==''){
                inputbox[name]=0;
            }
            this.allnumber=parseInt(this.allnumber)+parseInt(inputbox[name])
        }
        this.$emit("qty_parameters",this.inputbox)
        this.$emit("num",this.allnumber)
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
