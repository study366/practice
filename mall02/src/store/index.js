import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)//全局调用vuex

export default new Vuex.Store({
	state:{//数据
		count: 0,
		contactData: []
	},
	mutations:{
		increment (state,contactData){
			state.count++;
			state.contactData = contactData;
		},
		pullContact(state,contact){
			state.contactData.push(contact);
		},
		removeContact(state,idCard){
			let targetIndex = state.contactData.findIndex((item) =>{
				if(item.idCard = idCard){
					return item;
				};
			});
			state.contactData.splice(targetIndex, 1);
		},
		removeChatRecord(state,idCard){
			let targetIndex = state.contactData.findIndex((item) =>{
				if(item.idCard = idCard){
					return item;
				};
			});
			state.contactData[targetIndex].content.length = 0;
		},
		cloneContact(state,contactData){
			state.contactData = contactData;
		},
		popContact(state){
			state.contactData.pop();
		}

	},
	actions:{//调用mutation中的方法
		inc({ commit }, obj){//
			commit('increment',obj)
		}
	}
})