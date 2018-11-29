<template id="recharges">
  <div id="recharge">
    <z-header :show="true" :header="headername"></z-header>
    <ul id="ulrecharge">
      <li>
        <div>请选择充值方式</div>
      </li>
      <li>
        <div>
          <img src="../../../imgs/login/zhifubao.png" alt>
          <span>支付宝官方扣费充值</span>
          <img src="../../../imgs/login/unselected.png" alt>
        </div>
      </li>
      <li>
        <div>
          <img src="../../../imgs/login/balance.png" alt>
          <span>支付宝免手续费充值</span>
          <img src="../../../imgs/login/unselected.png" alt>
        </div>
      </li>
      <li>
        <div>
          <img src="../../../imgs/login/weixin.png" alt>
          <span>微信官方充值</span>
          <img src="../../../imgs/login/unselected.png" alt>
        </div>
      </li>
    </ul>
    <ul id="ul_2">
        <li>
            <img src="../../../imgs/login/qrcodePlaceHolder.png" alt="">
            <span>点击获取支付宝二维码</span>
        </li>
        <li>
            <span>点击获取支付宝账号</span>
        </li>
    </ul>
    <input id="codeinput" type="text" placeholder="请输入支付宝交易号">
    <div id="btn">确定充值</div>
    <ul id="ul_3">
        <li>
            <div>提交订单号支付</div>
            <div>
                <p>1.在交易记录中找到这笔交易记录并打开复制交易号</p>
                <p>2.粘贴交易号提交：举例</p>
                <p>20171001200040011100200015050327</p>
            </div>
        </li>
        <li>
            <div>免订单号支付</div>
            <div>
                <p>1.可以直接转账的时候备注商城的手机号来实现转账后自动充值</p>
                <p>一般5分钟内自动充值到账，不需要填写交易号</p>
                <p>（如果充值没到账请换第2种方式确定充值）</p>
            </div>
        </li>
    </ul>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      headername: "余额充值"
    };
  },
  computed: {},
  methods: {},
  watch: {}
};
</script>
<style scoped lang="less">
#recharge {
  width: 100%;
  min-height: 100%;
  background: #ebebeb;
  border-top: 1px solid #ebebeb;
  box-sizing: border-box;
}
#ulrecharge {
  width: 100%;
  background: #ffffff;
  margin-top: 0.7rem;
  > li {
    width: 100%;
    height: 100%;
    border-bottom: 0.005rem solid #ebebeb;
    line-height: 0.4rem;
    > div {
      margin: 0 0.3rem;
      height: 100%;
      font-size: 0.16rem;
      > img:nth-of-type(1) {
        height: 0.2rem;
        margin-right: 0.2rem;
        vertical-align: middle;
      }
      > span {
        vertical-align: middle;
      }
      > img:nth-of-type(2) {
        float: right;
        width: 0.2rem;
        margin-top: 0.1rem;
        vertical-align: middle;
      }
    }
  }
}
#ul_2{
    width:100%;
    overflow: hidden;
    color:#20c7c9;
    margin-top:0.3rem;
    >li{
        width:50%;
        float:left;
        text-align: center;
        >span{
            vertical-align: middle;
        }
        >img{
            vertical-align: middle;
            width:0.15rem;
        }
    }
}
#codeinput{
    background:#ffffff;
    height:0.4rem;
    text-indent: 0.3rem;
    width:100%;
    border:none;
    margin-top:0.2rem;
}
#btn{
    margin:0 0.15rem;
    margin-top:0.4rem;
    padding:0.1rem 0;
    color:#ffffff;
    text-align: center;
    font-size:0.16rem;
    background: #20c7c9;
    border-radius: 0.05rem;
}
#ul_3{
    margin:0 0.15rem;
    margin-top:0.15rem;
    >li{
        margin-bottom:0.15rem;
    }
    >li>div:nth-of-type(1){
        color:#bc4f53;
        margin-bottom:0.15rem;
        font-size:0.16rem;
    }
    >li>div{
        color:#888888;
    }
}
</style>
