<template>
	<div>
		<div>路由router-link</div>
		<div style="font-size: 12px">首先要 npm install 引入 vue-router包 { 已经帮忙建好了}</div>
		<!-- 跳转到其他页面 -->

		<!--1  直接 跳转到damo9 -->
		<router-link to="/damo9">damo9</router-link>


		<!-- 2  传参 跳转  v-bind  简写 ：-->
		<!-- name 就是配置路由的 name -->
		<!-- 配置路由部分也要改动 -->
		<!-- 结合配置路由 damo9 一起看 -->
		<!-- 传入了一个对象 params	 -->
		<br><div>-----------------</div>
		<router-link :to="{ name: 'damo9',params:{ userId: 123}}">damo9</router-link>

		<!-- 3. 传参 三个参数 效果见跳转后网址   -->
		<br><div>-------------</div>
		<router-link :to="{ name: 'damo9',params:{ userId: 123},query:{ plan: 'private' }}">query</router-link> 
		
		<!-- 4.通过js的方式进行跳转 -->
		<div>
			<button @click = "toURL1" >js跳转的方式1</button>
			<button @click = "toURL2" >js跳转的方式2</button>
			<button @click = "toURL3" >js跳转的方式3</button>
		</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		methods:{
			toURL1(){
				this.$router.push({ path : '/damo8'});	
			},
			toURL2(){	
			// 传参			
				this.$router.push({ name : 'damo9',params:{userId:123}})
			},
			toURL3(){	
			//带查询参数 querry			
				this.$router.push({ name : 'damo9',params:{userId:123},query:{ plan: 'private'}})
			},
		}
	}
</script>