<template>
	<div>
		<div>vue dom 操作</div>
		<div>-------------------------------</div>
		<!-- ref -->
		<div ref="head" class="head"></div>
	</div>
</template>

<script>
	export default{
		data(){
			return{

			}
		},
		//只有在mounted下才能进行dom操作
		//mounted 在dom已经生成中执行
		mounted(){
			// 例如：
			// $(".head").heml("123")
			// 使用 this.$refs.head找到 head
			this.$refs.head.innerHTML = 'hello world';
		}
	}
</script>