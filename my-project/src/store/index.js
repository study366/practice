import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	// state 数据
	state:{
		count : 0,
		num : 1
	},
	mutations:{
		increment(state,num){
			state.count++
			state.num = num;
		}
	},
	// 调用上面的 mutations的方法 修改状态
	actions:{
		inc ({ commit }, obj){
			commit('increment',obj)
		}
	}
})