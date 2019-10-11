<template>
	<div>
		<div>slot插槽</div>
		<div>=---------------</div>
		<!-- 组件内部预留了插槽 内部123才显示 -->
		<slots>
			<div>123</div>
			<!-- 显示在slot name = bottom 的 slot 中 -->
			<p slot="bottoms">666</p>
		</slots>

	</div>
</template>
<script>
	import slots from '@/components/slot.vue';
	export default{
		data(){
			return{

			}
		},
		// 组件注册
		components:{
			slots
		}
	}
</script>