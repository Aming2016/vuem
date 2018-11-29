<template id="goodsactions">
    <div class="checkboxradios">
        <div class="checkboxradio" v-for="(items,index) in checkboxradio" :key="index">
            <!-- 单选框 -->
            <div v-if="items.type=='radio'">
                <p>{{items.label}}</p>
                <div class='mycheck'>
                    <div v-for="(item,index) in items.optional.data" :key="index">
                        <input type="radio" v-model="radiovalue[items.name]" :value="item.value" >
                        <label >{{item.label}}</label> 
                    </div>               
                </div>  
            </div>
            <!-- 复选框 -->
            <div v-else>
                <p>{{items.label}}</p>
                <div class='mycheck'>  
                    <div v-for="(item,index) in items.optional.data" :key="index">            
                        <input type="checkbox" v-model="radiovalue[items.name]" :value="item.value" >
                        <label >{{item.label}}</label> 
                    </div>  
                </div>
            </div>         
        </div>         
    </div>
</template>
<script>
export default {
  data: function() {
    return {
      radiovalue: {}
    };
  },
  props: ["checkboxradio"],
  created() {
    //改变数据导出结构
    this.checkboxradio.forEach(element => {
      if (element.type == "radio") {
        this.$set(
          this.radiovalue,
          element.name,
          element.optional.data[0].value
        );
      } else {
        this.$set(this.radiovalue, element.name, [
          element.optional.data[0].value
        ]);
      }
    });
     //如果重新选网址，清空选中
      if(this.checkboxradio==""){
          this.radiovalue={}
          console.log(this.radiovalue)
      }
  },
  methods: {},
  watch: {
    //单选框复选框数据监听
    radiovalue: {
      handler(newName, oldName) {
        this.$emit("radiovalue", this.radiovalue);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>

<style scoped lang="less">
.checkboxradios {
  width: 100%;
}
.checkboxradio {
  width: 100%;
  margin-top: 0.1rem;
  background: #ffffff;
  padding: 0.1rem 0;
  overflow: hidden;
  > div {
    width: 100%;
  }
  > div > p {
    text-indent: 0.1rem;
    font-size: 0.14rem;
  }
}
.mycheck {
  margin: 0 0.1rem;
  > div {
    display: inline-block;
  }
  > div > label {
    margin-right: 0.1rem;
  }
}
</style>