<template id="user">
    <div class="user">
        <img src="../../../imgs/login/login_pswd.png" alt="">
        <input type="number"  name="text" v-model="code" placeholder="请输入验证码">
        <div @click="codebtn">{{codename}}</div>
    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      code: "",
      codename: "获取验证码",
      time: 5
    };
  },
  props: ["user"],
  methods: {
    codebtn() {
      if ((this.codename = "获取验证码")) {
        if (this.user) {
          if (this.user.length == 11) {
            this._querys();
          } else {
            Toast({
              message: "手机号码不正确",
              position: "bottom",
              duration: 1000
            });
          }
        } else {
          Toast({
            message: "请输入手机号码",
            position: "bottom",
            duration: 1000
          });
        }
      }
    },
    _querys() {
      this.$http
        .post(this.$url.URL.codesms, {
          mobile: this.user,
          sms_type: "5"
        })
        .then(res => {
          if (res.data.error_code == 0) {
            this.code = res.data.data;
            console.log(res)
            var teminterval = setInterval(() => {
              this.codename = "已发送 " + this.time + " s";
              this.time--;
              if (this.time == 0) {
                clearInterval(teminterval);
                this.codename = "获取验证码";
                this.time = 60;
              }
            }, 1000);
            Toast({
              message: "验证码发送成功",
              position: "bottom",
              duration: 1000
            });
          } else {
            Toast({
              message: res.data.error_msg,
              position: "bottom",
              duration: 1000
            });
          }
        });
    }
  },
  watch: {
    code(val) {
      this.$emit("codebtn", val);
    }
  }
};
</script>
<style scoped lang="less">
.user {
  margin: 0 0.45rem;
  height: 0.4rem;
  border: 0.005rem solid #ffffff;
  border-radius: 0.2rem;
  position: relative;
  > div {
    position: absolute;
    right: 0;
    width: 1rem;
    text-align: center;
    height: 0.4rem;
    line-height: 0.4rem;
    top: 0;
    color: #ffffff;
  }
  > img {
    width: 0.2rem;
    margin-left: 0.15rem;
  }
  > input {
    width: 80%;
    margin-left: 0.1rem;
    height: 100%;
    background: none;
    outline: none;
    border: 0px;
    color: #ffffff;
  }
  input::-webkit-input-placeholder {
    color: #ffffff;
  }
}
</style>
