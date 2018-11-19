<template >
  <div class="login">
      <header id="header">
          <span>取消</span>
          <span>注册</span>
      </header>
      <div id="loginimg">
          <img src="../../imgs/login/afagouPlaceholder.png" alt="" srcset="">
          <p>阿法狗商城</p>
      </div>
      <z-user @userbtn="userbtn" :usertext="user"></z-user>
      <z-password style="margin-top:0.1rem;" :paswdtext="password" @passwordinput="passwordinput"></z-password>    
      <div id="usercache">
          <img src="../../imgs/login/satisfy.png" alt="" v-if="usercache" @click="usercache=false">
          <img src="../../imgs/login/unselectedWhite.png" alt="" v-else @click="usercache=true">
          <span @click="usercache=!usercache">记住账号密码</span>
      </div>
      <div id="subminbtn" @click="submbtn">登录</div>
      <div id="div_1">
          <span>忘记密码</span>
          <span>短信登录</span>
      </div>
      <div id="div_3">
          <p></p>
          <span>其它方式登录</span>
          <p></p>
      </div>
      <div id="div_4">
          <img src="../../imgs/login/login_qq.png" alt="">
          <img src="../../imgs/login/login_wx.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: "",
      usercache: false
    };
  },
  methods: {
    passwordinput(val) {
      this.password = val;
    },
    userbtn(val) {
      this.user = val;
    },
    //点击登录
    submbtn(){
        if(this.user&&this.password){
            this._querys();
        }
    },
    //发送登录请求
    _querys(){
        this.$http.post(this.$url.URL.login,{
            sign:"73dc070e136f99fe0a7eccdd8ac3f704",//签名
            time:new Date().getTime(),//时间戳
            mobile:this.user,
            password:this.password,//加密后密码
            version3:"1",//版本号
        })
        .then(res=>{
            console.log(res)
        })
    }
  }
};
</script>
<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background: url("../../imgs/login/loginBg.png");
  background-size: 100% 100%;
  background-color: #37c8b1;
}
#header {
  color: #ffffff;
  font-size: 0.16rem;
  overflow: hidden;
  > span:nth-of-type(1) {
    float: left;
    margin-left: 0.12rem;
    margin-top: 0.12rem;
  }
  > span:nth-of-type(2) {
    float: right;
    margin-right: 0.12rem;
    margin-top: 0.12rem;
  }
}
#loginimg {
  width: 25%;
  margin: auto;
  margin-top: 0.8rem;
  margin-bottom: 0.3rem;
  > img {
    width: 100%;
  }
  > p {
    width: 100%;
    text-align: center;
    color: #ffffff;
    margin-top: 0.05rem;
    font-size: 0.17rem;
  }
}
#usercache {
  margin: 0.1rem 0.5rem;
  > img {
    width: 0.2rem;
    vertical-align: middle;
  }
  > span {
    vertical-align: middle;
    color: #ffffff;
  }
}
#subminbtn {
  margin: 0.2rem 0.45rem;
  height: 0.4rem;
  border-radius: 0.2rem;
  background: url("../../imgs/login/loginBtnBg.png");
  background-size: 100% 100%;
  text-align: center;
  line-height: 0.4rem;
  color: #ffffff;
  font-size: 0.16rem;
}
#div_1 {
  margin: 0 0.5rem;
  height: 0.4rem;
  color:#ffffff;
  >span:nth-of-type(2){
      float:right;
  }
}
#div_3{
    margin:0 0.12rem;
    >p{
        width:35%;
        border-top:0.005rem solid #ffffff;
        display: inline-block;
    }
    >span{
        margin:0 0.13rem;
        margin-top:0.3rem;
        color:#ffffff;
    }
}
#div_4{
    text-align: center;
    margin-top:0.2rem;
    >img:nth-of-type(1){
        margin-right:0.2rem;
    }
    >img{
        width:0.4rem;
    }
}
</style>
