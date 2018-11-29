<template >
  <div class="login">
      <header id="header">
          <span @click="gobtn">取消</span>
          <!-- <span>注册</span> -->
      </header>
      <div id="loginimg">
          <img src="../../../imgs/login/afagouPlaceholder.png" alt="" srcset="">
          <p>阿法狗商城</p>
      </div>
      <!-- 手机号码 -->
      <z-user @userbtn="userbtn" :usertext="user"></z-user>
      <!-- 密码 -->
      <z-password v-if="pasd" style="margin-top:0.1rem;" :paswdtext="password" @passwordinput="passwordinput"></z-password>  
      <!-- 获取验证码   -->
      <z-codeinput style="margin-top:0.1rem;" :user="user" @codebtn="codebtn" v-else></z-codeinput>
      <!-- <div id="usercache">
          <img src="../../../imgs/login/satisfy.png" alt="" v-if="usercache" @click="usercache=false">
          <img src="../../../imgs/login/unselectedWhite.png" alt="" v-else @click="usercache=true">
          <span @click="usercache=!usercache">记住账号密码</span>
      </div> -->
      <div id="subminbtn" @click="submbtn">登录</div>
      <div id="div_1">
        <span></span>
          <!-- <span @click="forgetpasdbtn">忘记密码</span> -->
          <span @click="pasd=!pasd">{{pasd?'短信登录':'密码登陆'}}</span>
      </div>
      <!-- <div id="div_3">
          <p></p>
          <span>其它方式登录</span>
          <p></p>
      </div>
      <div id="div_4">
          <img src="../../../imgs/login/login_qq.png" alt="">
          <img src="../../../imgs/login/login_wx.png" alt="">
      </div> -->
  </div>
</template>

<script>
import { Toast,MessageBox } from "mint-ui";
export default {
  name: "login",
  data() {
    return {
      pasd: true, //控制密码登陆验证码登陆
      user: "",
      password: "",
      code: "",
      usercache: false
    };
  },
  methods: {
    //忘记密码
    forgetpasdbtn() {
      this.$router.push("/forgetpasd");
    },
    //密码
    passwordinput(val) {
      this.password = val;
    },
    // 账号
    userbtn(val) {
      this.user = val;
    },
    //验证码
    codebtn(val) {
      this.code = val;
    },
    //点击登录
    submbtn() {
      alert("aaaaaaaaa")
      if (this.pasd) {
        alert("bbbbbbbbbbbbbbbbb")
        if (this.user && this.password) {
          if (this.user.length == 11) {
            this._querys();
          } else {
            Toast({
              message: "账户不正确",
              position: "bottom",
              duration: 1000
            });
          }
        } else {
          Toast({
            message: "请输入账号或者密码",
            position: "bottom",
            duration: 1000
          });
        }
      }else{
        if (this.user && this.code) {
          if (this.user.length == 11) {
            this._querystwo();
          } else {
            Toast({
              message: "账户不正确",
              position: "bottom",
              duration: 1000
            });
          }
        } else {
          Toast({
            message: "请输入账号或者验证码",
            position: "bottom",
            duration: 1000
          });
        }
      }
    },
    gobtn(){
      this.$router.push("/commoditylist")
    },
    //发送密码登录请求
    _querys() {
      this.$http
        .post(this.$url.URL.login, {
          user_mobile: this.user, //手机号码
          user_password: this.password //密码
        })
        .then(res => {
          alert("ccccccccccc")
          if (res.data.error_code == "0") {
            this.$store.dispatch("my_token", res.data.data.token);
             MessageBox.alert("登陆成功")
            this.$router.push("/commoditylist")
          }
          this._my_querys();
          Toast({
            message: res.data.error_msg,
            position: "bottom",
            duration: 1000
          });
        });
    },
    _querystwo(){
      this.$http
        .post(this.$url.URL.loginsms, {
          user_mobile: this.user, //手机号码
          code: this.code //密码
        })
        .then(res => {
          console.log(res)
          if (res.data.error_code == "0") {
            this.$store.dispatch("my_token", res.data.data.token);
            MessageBox.alert("登陆成功")
            this.$router.push("/commoditylist")
          }
          this._my_querys();
          Toast({
            message: res.data.error_msg,
            position: "bottom",
            duration: 1000
          });
        });
    },
    //获取我的个人信息
    _my_querys() {
      this.$http.get(this.$url.URL.my_message).then(res => {
        this.$store.dispatch("my_message", res.data.data);
      });
    }
  }
};
</script>
<style scoped lang="less">
.login {
  width: 100%;
  min-height: 100%;
  background: url("../../../imgs/login/loginBg.png");
  background-size:cover;
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
  background: url("../../../imgs/login/loginBtnBg.png");
  background-size: 100% 100%;
  text-align: center;
  line-height: 0.4rem;
  color: #ffffff;
  font-size: 0.16rem;
}
#div_1 {
  margin: 0 0.5rem;
  height: 0.4rem;
  color: #ffffff;
  > span:nth-of-type(2) {
    float: right;
  }
}
#div_3 {
  margin: 0 0.12rem;
  > p {
    width: 35%;
    border-top: 0.005rem solid #ffffff;
    display: inline-block;
  }
  > span {
    margin: 0 0.13rem;
    margin-top: 0.3rem;
    color: #ffffff;
  }
}
#div_4 {
  text-align: center;
  margin-top: 0.2rem;
  > img:nth-of-type(1) {
    margin-right: 0.2rem;
  }
  > img {
    width: 0.4rem;
  }
}
</style>
