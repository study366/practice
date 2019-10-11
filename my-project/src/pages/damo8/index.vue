<template>
	<div>
		<div>事件处理器 使用@缩写v-on：</div>
		<div>----------------</div>
		<!-- 绑定事件， -->
		<!-- 第一种直接写html 中 -->
		<div id="example-1">
			<button v-on:click="counter += 1">
				增加一
			</button>
			<p> 这个按钮被点击了{{counter}}次</p>
		</div>
		<!-- 通过方法名绑定 -->
		<div class="example-2">
			<!-- greet是方法名 -->
			<button @click="greet">greet</button>
		</div>
		<div>-----------</div>
		<!-- 绑定事件并传参 -->
		<div>
			<button v-on:click = "say('hello')">hello</button>
		</div>
		<!-- 阻止事件冒泡 -->
		<div @click="doThis2">
			<!-- stop阻止事件冒泡 -->			
			<button @click.stop="doThis">dothis</button>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				counter: 0,
			}
		},
		methods:{
			greet(){
				alert('greet');
			},
			say(h){
				alert(h);
			},
			doThis(){
				alert('dothis');
			},
			doThis2(){
				alert('dothis2');
			}

		}
	}
</script>