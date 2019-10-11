<template><!--template包裹的是模板-->
	<div>
		<div>选项数据</div>
		<div>------------------------</div>
		<div>{{msg}}</div>
		<div>------------------------</div>
		<div>computed:{{aDouble}}</div>
		<div>------------------------</div>
		<div @click="say('hi')">点击我</div>
		<div>-------------</div>
		<!-- 练习1 -->
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
				msg: 'helloWorld',
				a: 2,
				// 练习1
				title: '《诗经国风 .周南》',
				content1: '关关雎鸠，在河之洲。',
				content2:'窈窕淑女，君子好逑。'
			}
		},
		// computed 是一个对象  内部包含函数
		computed:{
			aDouble(){
				return this.a*2;
			}
		},
		// 给事件用的函数
		methods:{
			say(h){
				alert(h);
			}
		}
	}
</script>