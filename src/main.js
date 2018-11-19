// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'//共享数据
import {axios} from './common/js/axios.js' //axios
Vue.prototype.$http = axios;
import URL from "./common/js/url.js" //全局url
Vue.prototype.$url = URL;

//解决移动端点击事件延时300毫秒
import FastClick from 'fastclick'
FastClick.attach(document.body)
//全局配置过滤器
import vfilter from "./common/js/vfilter.js"
for (let key in vfilter) {
  Vue.filter(key, vfilter[key])
}
//ios解决键盘挡住输入框指令
Vue.directive('iosinput', {
  inserted: function (el) {
    const oHeight = document.body.clientHeight;
    window.addEventListener('resize', function (params) {
      if (oHeight > document.body.clientHeight) { //键盘弹出
        el.scrollIntoView(false);
      }
    }, false);
  }
})
Vue.config.productionTip = false

//全局修改mint-UI样式
import './assets/css/my-mint.less';
//全局注册组件
//header组件
import zHerder  from "./components/module/captions/index.js";
Vue.use(zHerder)
//手机框
import zUser  from "./components/module/user/index.js";
Vue.use(zUser)
//密码框
import zPassword  from "./components/module/password/index.js";
Vue.use(zPassword)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
