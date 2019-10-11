<template>
	<div>
		<div>自定义组件</div>
		<div>---------------------</div>
		<!-- 事件顺序		 -->
		<!--1 import引入 -->
		<!--2 components注册 -->
		<!--3 通过标签引用 -->
		<countdown></countdown>

		<!-- 传入参数 col = pink -->
		<!-- 给end 事件绑定一个函数 ending -->
		<countdown col = "pink" @end="ending"></countdown>
	</div>
</template>
<script>
	import countdown from '@/components/countdown.vue'
	export default{
		data(){
			return{

			}
		},
		methods:{
			ending(){
				alert('已经结束了');
			}
		},
		// 组件注册
		components:{
			countdown
		}
	}
</script>