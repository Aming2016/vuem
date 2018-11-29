<template id="radios">
<div>
    <div v-for="(item,index) in parameter" :key="index" style="margin-bottom:0.1rem;">
      <!-- text框 -->
      <div class="textinput" v-if="item.type=='url'">
        <div>{{item.label}}</div>
        <input type="text" :placeholder="item.placeholder" v-model="parameters[item.name]" @blur="search(item)">
      </div>
      <!-- 判断text框如果要发消息就显示这一块 -->
      <z-checkboxradio v-if="item.type=='url'&&checkboxradio" :checkboxradio="checkboxradio" @radiovalue="radiovalue"></z-checkboxradio>
      <!-- 选择框 -->
      <div class="radio" v-else-if="item.type=='radio'">
          <div id="titlediv">{{item.label}}</div>
          <ul id="titleul">
              <li v-for="(items,index) in item.optional.data" :key="index" :class="{activeclass:items.value==parameters[item.name]}" @click="activeradio(item,index)">{{items.label}}</li>
          </ul>
      </div>
      <!-- 文本输入域 -->
      <div v-else-if="item.type=='textarea'&&item.hidden.value.split(',').indexOf((parameters.comment_type).toString())==-1" id='textboxwarp'>
         <textarea id="textareadiv" cols="30" rows="10" :placeholder="item.placeholder" v-model="parameters[item.name]" @input="inputtext(item.name)"></textarea>
         <div id="textareaxinxi">
           <span>第 {{linenumber}} 行</span>
           <img src="../../../imgs/login/delete.png" alt="" v-if="parameters[item.name]" @click="btnmove(item.name)">
         </div>
      </div>
      <!-- 地区选择 -->
    </div>
</div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data: function() {
    return {
      ordiolist: { ordioname: "粉丝套餐", list: [1, 2, 3, 4, 5, 6] },
      parameters: {}, //选中的数据
      parameterscontent: {}, //传出去的数据
      linenumber: 1,
      checkboxradio: "", //url为投票的数据
      checkborparameters: "" //单选框复选框数据
    };
  },
  props: ["parameter"],
  methods: {
    activeradio(item, index) {
      //点击如果是文本输入域选择框就让文本输入域内容变空
      if (item.name == "comment_type") {
        this.parameters["comment_data"] = "";
      }
      this.parameters[item.name] = item.optional.data[index].value;
      this.extent();
    },
    //移出输入框微信投票或者微博投票发送链接，获取投票信息
    search(item) {
      if (item.optional.type == "remote") {
        this._querys(item);
      } else {
        this.checkboxradio = "";
        this.extent();
      }
    },
    //获取信息
    _querys(item) {
      this.$http
        .get(item.optional.url + "?url=" + this.parameters[item.name])
        .then(res => {
          if (res.data.error_code == "0") {
            this.checkboxradio = res.data.data;
          } else {
            this.checkboxradio = "";
            this.extent();
            Toast({
              message: res.data.error_msg,
              position: "bottom",
              duration: 800
            });
          }
        });
    },
    //点击删除文本框内容
    btnmove(name) {
      this.parameters[name] = "";
      this.linenumber = 1;
    },
    //复选框，单选框  组件传参
    radiovalue(val) {
      // 克隆对象
      var newval = JSON.parse(JSON.stringify(val));
      //改变复选框数据
      for (name in newval) {
        if (newval[name] instanceof Array) {
          newval[name] = newval[name].join(",");
        }
      }
      this.checkborparameters = newval;
      this.extent();
      //深度拷贝
    },
    //实时监听
    inputtext(name) {
      this.linenumber = this.parameters[name].split(/\r?\n/).length;
      this.extent();
      this.$emit("parameters", this.parameterscontent);
    },
    // 合并对象
    extent() {
      if(this.checkboxradio==""){
        this.checkborparameters={}
      }
      let parameters = JSON.parse(JSON.stringify(this.parameters));
      let checkborparameters = JSON.parse(JSON.stringify(this.checkborparameters));
      this.parameterscontent = Object.assign(
        parameters,
        checkborparameters
      );
    }
  },
  created() {
    //产生一个获取数据的传出去的对象；
    this.parameter.forEach(element => {
      if (element.type == "radio") {
        this.$set(
          this.parameters,
          element.name,
          element.optional.data[0].value
        );
      } else {
        this.$set(this.parameters, element.name, "");
      }
    });
    this.extent();
  },
  watch: {
    parameterscontent: {
      handler(newName, oldName) {
        this.$emit("parameters", this.parameterscontent);
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
    margin-bottom: 0.05rem;
    color: #666666;
  }
}
.activeclass {
  background: @color-primary !important;
  color: #ffffff !important;
}
.textinput {
  margin-top: 0.1rem;
  width: 100%;
  background: #ffffff;
  > div:nth-of-type(1) {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
#textboxwarp {
  width: 100%;
  background: #ffffff;
  border-top: 0.005rem solid #999999;
  box-sizing: border-box;
  margin-top: -0.1rem;
  padding-top: 0.1rem;
}
#textareadiv {
  width: 98%;
  float: right;
  height: 1rem;
  border: none;
}
#textareaxinxi {
  width: 100%;
  overflow: hidden;
  background: #ffffff;
  margin-top: -0.05rem;
  > span {
    margin-left: 0.1rem;
    font-size: 0.12rem;
    color: red;
  }
  > img {
    float: right;
    width: 0.2rem;
  }
}
</style>
