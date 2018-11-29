import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'//vuex
const commoditylist = resolve => require(['@/components/home/commoditylist/commoditylist'], resolve)//导航
const mine = resolve => require(['@/components/mine/mine/mine'], resolve)// 我的页面
const login = resolve => require(['@/components/mine/login/login'], resolve)// 登录页
const recharge = resolve => require(['@/components/mine/recharge/recharge'], resolve)// 登录页
const forgetpasd = resolve => require(['@/components/mine/forgetpasd/forgetpasd'], resolve)// 忘记密码页
const commoditydetails = resolve => require(['@/components/home/commoditydetails/commoditydetails'], resolve)//下单页面
const regularorder = resolve => require(['@/components/home/commoditydetails/regularorder'], resolve)//普通页面
const multipleorders = resolve => require(['@/components/home/commoditydetails/multipleorders'], resolve)//多条页面
const bulkorder = resolve => require(['@/components/home/commoditydetails/bulkorder'], resolve)//批量页面
Vue.use(Router)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: { keepAlive: true }
  },
  {
    path:"/mine",
    name:"mine",
    component:mine,
    meta: {
      requiresAuth: true
    }
  },
  {
    path:"/recharge",
    name:"recharge",
    component:recharge,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/commoditylist',
    name: 'commoditylist',
    component: commoditylist,
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
];
const router = new Router({
  mode: 'hash', //history   hash
  routes
});

router.beforeEach((to, from, next) => {
  //判断有没有登陆
  if (to.matched.some(r => r.meta.requiresAuth)) {  // 判断该路由是否需要登录权限
    if (store.state.my_token) {  // 通过vuex 如果当前有登录
      next();
    }
    else {
      next({
        path: '/login'
      })
    }
  }
  else {
    next();
  }
  //控制底部按钮颜色
  var path = to.path;
  if (path == "/") {
    store.state.activebtn = 0;
  } else if (path == "/commoditylist") {
    store.state.activebtn = 1;
  } else if (path == "/mine") {
    store.state.activebtn = 2;
  } else {
    store.state.activebtn = 100;
  }
});

export default router;