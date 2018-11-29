<template >
  <div class="login">
      <div id="gofanhui" @click="btnone">
          返回
      </div>
      <div id="loginimg">
          <img src="../../../imgs/login/afagouPlaceholder.png" alt="" srcset="">
          <p>阿法狗商城</p>
      </div>
      <z-user @userbtn="userbtn" :usertext="user"></z-user>
      <z-password style="margin-top:0.1rem;" :paswdtext="password" @passwordinput="passwordinput"></z-password>    

      <div class="papssword">
        <img src="../../../imgs/login/login_pswd.png" alt="">
        <input type="text" v-model="code"  name="text" placeholder="请输入验证码">
        <span>{{codename}}</span>
    </div>
      <div id="subminbtn">确定修改密码</div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  name: "login",
  data() {
    return {
      user: "",
      password: "",
      code: "",
      usercache: false,
      codename: "获取验证码"
    };
  },
  methods: {
    btnone() {
      this.$router.go(-1);
    },
    passwordinput(val) {
      this.password = val;
    },
    userbtn(val) {
      this.user = val;
    }
  }
};
</script>
<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background: url("../../../imgs/login/loginBg.png");
  background-size: 100% 100%;
  background-color: #37c8b1;
}
#gofanhui {
  color: #ffffff;
  font-size: 0.16rem;
  position: fixed;
  top: 0.12rem;
  left: 0.12rem;
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
  padding-top: 0.8rem;
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
.papssword {
  margin: 0 0.45rem;
  height: 0.4rem;
  margin-top: 0.1rem;
  border: 0.005rem solid #ffffff;
  border-radius: 0.2rem;
  > img {
    width: 0.2rem;
  }
  > img:nth-of-type(1) {
    margin-left: 0.15rem;
  }
  > input {
    width: 55%;
    margin-left: 0.1rem;
    height: 100%;
    background: none;
    outline: none;
    border: 0px;
    color: #ffffff;
  }
  > span {
    color: #ffffff;
  }
  input::-webkit-input-placeholder {
    color: #ffffff;
  }
}
</style>
