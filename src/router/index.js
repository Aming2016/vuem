import Vue from 'vue'
import Router from 'vue-router'
const commoditylist = resolve => require(['@/components/home/commoditylist/commoditylist'], resolve)// 首页
const login = resolve => require(['@/components/mine/login/login'], resolve)// 登录页
const forgetpasd = resolve => require(['@/components/mine/forgetpasd/forgetpasd'], resolve)// 忘记密码页
const commoditydetails = resolve => require(['@/components/home/commoditydetails/commoditydetails'], resolve)//下单页面
const regularorder = resolve => require(['@/components/home/commoditydetails/regularorder'], resolve)//普通页面
const multipleorders = resolve => require(['@/components/home/commoditydetails/multipleorders'], resolve)//多条页面
const bulkorder = resolve => require(['@/components/home/commoditydetails/bulkorder'], resolve)//批量页面
Vue.use(Router)

export default new Router({
  mode: 'hash', //history   hash
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
      meta: { keepAlive: true }
    },
    {
      path: '/commoditylist',
      name: 'commoditylist',
      component: commoditylist
    },
    {
      path: "/forgetpasd",
      name: "forgetpasd",
      component: forgetpasd
    },
    {
      path: "/commoditydetails",
      name: "commoditydetails",
      component: commoditydetails,
      redirect: '/regularorder',
      children: [
        {
          path: '/regularorder',
          name: 'regularorder',
          component: regularorder
        },
        {
          path: '/multipleorders',
          name: 'multipleorders',
          component: multipleorders
        },
        {
          path: '/bulkorder',
          name: 'bulkorder',
          component: bulkorder
        }
      ]
    }
  ]
})
