<template>
	<div>
		<div>模板语法</div>
		<div>-----------------</div>
		<div>
			data:{{msg}}
		</div>
		<div>-----------------</div>
		<div>
			<!-- 模板嵌套js代码 -->
			{{ number + 1}}
		</div>
		<div>-----------------</div>
		<!-- 指令 v-html	 动态添加子元素-->
		<div v-html = "rawHtml">
			
		</div>
		<!-- 指令 v-bind  动态绑定-->
		<div class="red" v-bind:class="red">
			v-bind 动态绑定
		</div>
		<!-- 指令 v-on  绑定事件-->
		<div>-----------------</div>
		<div v-on:click = "say('hi')">
			点击我
		</div>
		<!-- v-on 的简写   -->
		<div @click= 'change'>颜色改变</div>
		<div>{{ message | capitalize}}</div>
	</div>
</template>
<script>
	export default{
		data (){
			return {
				msg : 'helloworld',
				number : 1,
				rawHtml : '<span>v-html 使用 </span>',
				red: 'red active',
				message: 'agagag'
			}
		},
		// 定义了一堆服务于事件的函数
		methods:{
			change(){
				this.red = 'red';
			},
			say(h){
				alert(h);
			}
		},
		// 过滤器 
		filters:{
			capitalize(){
				return '123';
			}
		}


	}
</script>