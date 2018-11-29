
export default {
	my_token({commit},token){
		commit("MY_TOKEN",token)//存储token
	},
	my_message({commit},message){
		commit("MY_MESSAGE",message)//存储个人信息
	},
	details({commit},item){//商品详情
		commit("DETAILS",item)
	}
}

