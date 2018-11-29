
export default {
	MY_TOKEN(state,token){//获取token
		state.my_token = token
	},
	MY_DATA(state,message){//获取个人信息
		state.my_data = message
	},
	DETAILS(state,item){//商品详情
		state.details=item
	}
}