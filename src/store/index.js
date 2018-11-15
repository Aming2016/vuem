import Vue from "vue"
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import createPersistedState from 'vuex-persistedstate'//将vuex存到缓存里面去

Vue.use(Vuex)

export default new Vuex.Store({
	state,
	actions,
	mutations,
	plugins: [createPersistedState({
		storage:window.sessionStorage
	})]
})
