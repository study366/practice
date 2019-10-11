<template><!--template包裹的是模板-->
	<div>
		<div>{{title}}</div>
		<div>{{content1}}</div>
		<div>{{content2}}</div>

	</div>
</template>
<script>
	export default{
		// 绑定了一堆变量
		// 本身就是函数
		data(){
			return {
				title: '《诗经国风 .周南》',
				content1: '关关雎鸠，在河之洲。',
				content2:'窈窕淑女，君子好逑。'
			}
		},
		// computed 是一个对象  内部包含函数
		computed:{
			
		},
		// 给事件用的函数
		methods:{
			
	}
</script>