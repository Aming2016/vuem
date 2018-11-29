
export default {
	MY_TOKEN(state,token){//获取token
		state.my_token = token
	},
	MY_MESSAGE(state,message){//获取个人信息
		state.my_message = message
	},
	DETAILS(state,item){//商品详情
		state.details=item
	}
}