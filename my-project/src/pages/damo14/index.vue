<template>
	<div>
		<div>状态管理vuex</div>
		<p>npm install 引入 vuex 包</p>
		<p>多页面传数据</p>
		
		<button @click="change">change</button>
		<div>{{msg}}</div>

		<h3>使用状态管理的  步</h3>
		<p>安装vuex  npm install vuex --save</p>
		<p>src下新建store > index.js (详见js文件)</p>
		<p>main.js中引入新建的 store > index.js</p>
		<p>在methods 中 获取 修改公共数据（详见本页面js代码）</p>
		
	</div>
</template>
<script>
	export default{
		data(){
			return {
				msg:'123',
			}
		},
		methods:{
			change(){
				// vuex 取 store 中 state 中的公共数据count
				this.msg = this.$store.state.count;
				// 修改公共数据
				// 使用dispatch 方法传入参数 inc 
				// 调用  store中 actions中的inc函数
				// inc函数又执行mutations 中的函数
				this.$store.dispatch('inc',100);
				this.msg = this.$store.state.num;
			}
		}
	}
</script>