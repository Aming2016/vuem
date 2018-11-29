let urlboole = false;
let _host =urlboole?'https://www.afagou.com/':"http://10.30.47.8/";// http://test.afagou.com/    http://10.30.43.208/   http://10.30.47.8/
let URL = {
    login:_host+"index/login/login_submit",   //登录
    loginsms:_host+"webapi/login/sms",//验证码登陆
    welcome:_host+"index/welcome/register_send_sms", //获取验证码
    getallcatesub:_host+"index/welcome/get_all_cate_sub",//一级导航
    my_message:_host+'index/Home/my_over',//获取我的个人信息
    goods:_host+"webapi/goods",//获取商品列表
    codesms:_host+"webapi/sms",//获取手机验证码   类型 1注册 2 绑定 3更新绑定手机 4 重置密码 5短信登入 6确认手机
    waitinfi:_host+'/webapi/v2/orders/save',//新商品下单
}
export default {URL};