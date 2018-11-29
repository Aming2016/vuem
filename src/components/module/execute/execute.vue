<template id="radios">
  <div>
    <div class="radio">
      <!-- <div id="titlediv">{{item.label}}</div> -->
      <ul id="titleul">
        <li
          v-for="(item,index) in executelist"
          :key="index"
          :class="{activeclass:activevalue==index}"
          @click="activeradio(item,index)"
        >{{item.name}}</li>
      </ul>
      <div id="div_1" v-if="activevalue==1">
        <input type="text" placeholder="请输入排队工单号" v-model="order_wait">
        <div>
          <span>延后</span>
          <input type="number" v-model="delaytime">
          <span>分钟执行</span>
        </div>
      </div>

      <div id="div_1" v-else-if="activevalue==2">
        <div @click="openPickerdate">
          <span>{{executevalue["set_time"]?executevalue["set_time"]:"请选择日期"}}</span>
          <img src="../../../imgs/login/more.png" alt>
        </div>
      </div>

      <div id="div_1" v-else-if="activevalue==3">
        <input type="number" placeholder="请输入执行数量" v-model="number">
        <div @click="openPicker">
          <span>{{executevalue["set_time"]?executevalue["set_time"]:"请选择日期"}}</span>
          <img src="../../../imgs/login/more.png" alt>
        </div>
      </div>
      <mt-datetime-picker ref="picker" type="time" v-model="pickerValue" @confirm="timebtn"></mt-datetime-picker>

      <mt-datetime-picker ref="pickerdate" type="datetime" v-model="pickerdateValue" @confirm="datebtn"></mt-datetime-picker>
    </div>
  </div>
</template>
<script>
import { Toast, DatetimePicker } from "mint-ui";
import moment from "../../../common/js/moment.js"
export default {
  data: function() {
    return {
      activevalue: 0,
      pickerValue: "", //选中的当日时间
      pickerdateValue: "", //选中的当年时间
      delaytime: 0, //延迟时间delay_time
      executevalue:{},//传出去的参数
      number:"",//执行数量
      order_wait:"",//输入订单号
      executelist: [
        {
          name: "立即执行",
          value: "0"
        },
        {
          name: "结束后执行",
          value: "1"
        },
        {
          name: "定时执行",
          value: "2"
        },
        {
          name: "每天执行",
          value: "3"
        }
      ]
    };
  },
  props: ["parameter"],
  methods: {
    activeradio(item, index) {
      this.executevalue={};
      this.number="";
      this.order_wait="";
      this.delaytime=0;
      this.$set(this.executevalue, "is_list",item.value)
      this.activevalue = index;
    },
    //当日  时间插件
    openPicker() {
      this.$refs.picker.open();
    },
    //当年时间插件
    openPickerdate() {
      this.$refs.pickerdate.open();
    },
    //选中当前时间
    timebtn() {
      this.$set(this.executevalue, "set_time",this.pickerValue)
    },
    //选中当年时间
    datebtn() {
      if(this.pickerdateValue){
        this.$set(this.executevalue, "set_time",moment(this.pickerdateValue,"YYYY-MM-DD hh:mm:ss"))
      }else{
        Toast({
          message: "请选择日期",
          position: "bottom",
          duration: 1000
        });
      }
    },
  },
  created() {
    this.$set(this.executevalue, "is_list",this.executelist[0].value)
  },
  watch: {
    number(val){
      this.$set(this.executevalue, "order_wait",val)
    },
    delaytime(val){
      if(val==''){
        this.$set(this.executevalue, "delay_time",'0')
      }else{
        this.$set(this.executevalue, "delay_time",val)
      }
    },
    order_wait(val){
      this.$set(this.executevalue, "order_wait",val)
    },
    executevalue:{
       handler(newName, oldName) {
        this.$emit("executevalue", this.executevalue);
      },
      deep: true,
      immediate: true
    }
  }
};
</script>
<style scoped lang="less">
@import "../../../common/css/allcss.less";
.radio {
  width: 100%;
  background: #ffffff;
}
#titlediv {
  padding: 0.05rem 0.1rem;
  font-size: 0.16rem;
}
#titleul {
  width: 100%;
  overflow: hidden;
  > li {
    float: left;
    padding: 0.03rem;
    background: #ebebeb;
    border-radius: 0.03rem;
    margin-left: 0.1rem;
    margin-top: 0.05rem;
    margin-bottom: 0.05rem;
    color: #666666;
  }
}
.activeclass {
  background: @color-primary !important;
  color: #ffffff !important;
}
#div_1 {
  width: 100%;
  background: #ffffff;
  > input {
    border: none;
    width: 100%;
    height: 0.3rem;
    border-top: 0.005rem solid #cccccc;
    border-bottom: 0.005rem solid #cccccc;
    box-sizing: border-box;
    text-indent: 0.1rem;
  }
  > div {
    width: 100%;
    height: 0.3rem;
    line-height: 0.3rem;
    > span:nth-of-type(1) {
      float: left;
      margin-left: 0.1rem;
    }
    > input {
      height: 100%;
      border: none;
      width: 40%;
      float: left;
      margin-left: 0.1rem;
    }
    > span:nth-of-type(2) {
      float: right;
      margin-right: 0.1rem;
    }
    > img {
      float: right;
      width: 0.1rem;
      margin-right: 0.1rem;
      margin-top: 0.08rem;
    }
  }
}
</style>
