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
// 引入fastclick
import fastclick from 'fastclick'
// 官方推荐将fastclick绑定到body下，这样在body下的元素都不会有300ms的延迟
fastclick.attach(document.body)

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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
