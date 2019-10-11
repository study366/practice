<template>
	<div>
		<div>条件渲染</div>
		<div>------------</div>

		<!-- v-if=true才会显示 -->
		<div v-if="ok">v-if</div>

		<div>------------</div>
		<!-- 根据条件判断 =“ ” 中布尔值判断是否能显示 -->
		<div v-if="type==='a'">a</div>
		<div v-else-if="type==='b'">b</div>
		<div v-else-if="type==='c'">c</div>
		<div v-else-if="type==='d'">d</div>
		<div v-else>not a/b/c/d</div>
		<div>-------------</div>
		<!-- v-show = true 才显示 -->
		<div v-show = "isShow">isShow</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				ok : true,
				type: 'c',
				isShow: true
			}
		}
	}
</script>