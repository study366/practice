<template>
	<div>
		<div>过渡效果</div>
		<div>-------------------</div>
		<div id="demo">
			<!-- 绑定事件 点击 show 变 ！show -->
			<button v-on:click="show =!show">
				toggle
			</button>
			<!-- 增加transition 增加过渡效果 -->
			<!-- 通过样式书写增加过渡效果 -->
			<transition name= "fade">
				<!-- if show =true 展示 -->
				<p v-if="show">hello</p>
			</transition>	
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				show:true
			}
		}
	}
</script>
<style>
	/*.name.leave-active*/
	/*fade 对应 name*/
	.fade-enter-active,
	.fade-leave-active{
		transition: opacity .5s
	}
	.fade-enter,
	.fade-leave-to{
		opacity: 0
	}
	.fade-enter-to{
		opacity: 1
	}
</style>