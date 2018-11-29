<template >
  <div class="regularorder">
    <header>
      <div id="moneydiv">
        <span>￥</span>
        {{details.price}}
      </div>
      <ul id="titleul">
        <li>最低购买数:{{details.minimum}}</li>
        <li>最大购买数:{{details.max_num}}</li>
        <li>参考速度:30000/天</li>
      </ul>
    </header>
    <!-- 新商品 -->
    <div v-if="details.agent_source!==1">
      <z-newtemplate
        style="margin-top:0.1rem;"
        @parameters="parameters"
        :parameter="details.agent_goods_parameter"
      ></z-newtemplate>
      <z-groupnumber
        :groupnumber="details.agent_goods_config.qty_config.data"
        v-if="details.agent_goods_config.qty_type=='2'"
        @num="num"
        @qty_parameters="qty_parametersbtn"
      ></z-groupnumber>
      <z-textinput :inputobject="inputobject" @num="num" v-else></z-textinput>
    </div>
    <!-- 旧商品 -->
    <div v-else>
      <!-- <z-radio style="margin-top:0.1rem;"></z-radio> -->
      <z-textinput style="margin-top:0.1rem;"></z-textinput>
    </div>
    <z-execute
      style="margin-top:0.1rem;"
      @executevalue="executevaluebtn"
      v-if="details.show_exe_type=='1'"
    ></z-execute>
    <z-commessage :messagecontent="details.goods_context" style="margin-top:0.1rem;"></z-commessage>
    <z-goodsaction :allmoney="allmoney" @buybtn="buybtn"></z-goodsaction>
  </div>
</template>

<script>
import { Toast, MessageBox } from "mint-ui";
export default {
  //  普通下单
  name: "regularorder",
  data() {
    return {
      details: "",
      inputobject: {
        name: "购买数量",
        hint: "请输入购买数量",
        type: "number",
        default: ""
      },
      nums: "", //购买数量
      parameter: "", //新模板参数；
      allmoney: "", //总价钱allmoney//总价
      user_id: "", //用户userid
      qty_parameters: "", //组合数量
      executevalue: "" //执行条件参数
    };
  },
  created() {
    this.user_id = this.$store.state.my_data.user_id;
    this.details = this.$store.state.details;
    this.inputobject.default = this.details.minimum;
    this.disposenumber(this.details.price);
  },
  methods: {
    parameters(val) {
      this.parameter = val;
    },
    //判断数字是否为正整数
    checkRate(input) {
      var re = /^[1-9]+[0-9]*]*$/;
      if (!re.test(input)) {
        Toast({
          message: "购买数量我为正整数",
          position: "bottom",
          duration: 1000
        });
        return false;
      } else {
        return true;
      }
    },
    //组合数量
    qty_parametersbtn(val) {
      this.qty_parameters = val;
    },
    //总数量
    num(val) {
      this.nums = val;
    },
    //执行条件
    executevaluebtn(val) {
      this.executevalue = val;
    },
    //金额处理函数保留小数点后面两位小数
    disposenumber(val) {
      val = val.toString();
      if (val.indexOf(".") != -1) {
        let listnumber = val.split(".");
        if (listnumber[1][2]) {
          if (listnumber[1][2] != 0) {
            let dianhounumber = listnumber[1].slice(0, 2);
            if (parseInt(dianhounumber) + 1 >= 10) {
              this.allmoney =
                listnumber[0] + "." + (parseInt(dianhounumber) + 1);
            } else {
              this.allmoney =
                listnumber[0] + ".0" + (parseInt(dianhounumber) + 1);
            }
          } else {
            this.allmoney = listnumber[0] + "." + listnumber[1].slice(0, 2);
          }
        } else {
          this.allmoney = val;
        }
      } else {
        this.allmoney = val + ".00";
      }
    },
    buybtn() {
      if (this.$store.state.my_data) {
        if (parseInt(this.allmoney) >= parseInt(this.details.minimum_money)) {
          this.refer(); //参值
        } else {
          Toast({
            message: "购买数量最低为" + this.details.minimum,
            position: "bottom",
            duration: 1000
          });
        }
      } else {
        MessageBox.confirm('还未登陆，是否前往登陆页面？').then(action => {
          this.$router.push("/login")
        });
      }
      if (parseInt(this.allmoney) >= parseInt(this.details.minimum_money)) {
        this.refer(); //参值
      } else {
        Toast({
          message: "购买数量最低为" + this.details.minimum,
          position: "bottom",
          duration: 1000
        });
      }
    },
    refer() {
      let proms = {
        number: this.nums,
        goods_id: this.details.goods_id,
        user_id: this.user_id,
        parameters: this.parameter,
        qty_parameters: this.qty_parameters
      };
      let newproms = JSON.parse(JSON.stringify(proms));
      let executevalued = JSON.parse(JSON.stringify(this.executevalue));
      let newpromswarp = Object.assign(newproms, executevalued);
      this._querys(newpromswarp);
    },
    //克隆生产对象产值对象
    _querys(prms) {
      this.$http.post(this.$url.URL.waitinfi, prms).then(res => {
        if (res.data.error_code == 0) {
          MessageBox.alert(
            res.data.error_msg +
              " 下单金额为:" +
              res.data.data.total_order_amount +
              "元"
          );
        } else {
          MessageBox.alert(res.data.error_msg);
        }
      });
    }
  },
  watch: {
    //监听购买数量计算总金额
    nums: {
      handler(newName, oldName) {
        if (this.checkRate(this.nums)) {
          this.allmoney = this.nums * this.details.price;
          this.disposenumber(this.allmoney);
        }
      },
      deep: true
    }
  },
  components: {}
};
</script>
<style scoped lang="less">
@import "../../../common/css/allcss.less";
.regularorder {
  margin-top: 0.7rem;
  min-height: calc(100% - 1.2rem);
  background: #ebebeb;
  padding-bottom: 0.5rem;
}
#moneydiv {
  width: 100%;
  padding: 0.05rem 0;
  background: @color-primary;
  color: #ffffff;
  font-size: 0.18rem;
  > span {
    font-size: 0.14rem;
    margin-left: 0.12rem;
  }
}
#titleul {
  width: 100%;
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-flow: row nowrap;
  justify-content: space-around;
  background: #ffffff;
  li {
    padding: 0.05rem 0;
  }
}
</style>
