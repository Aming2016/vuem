import Vue from 'vue'
import Router from 'vue-router'
const home = resolve => require(['@/components/home/home'], resolve)// 首页
const login = resolve => require(['@/components/login/login'], resolve)// 登录页
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'home',
      component: home
    }
  ]
})
