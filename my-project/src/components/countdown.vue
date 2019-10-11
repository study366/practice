<template>
	<p :style="{color: col}">{{time}}</p>

</template>
<script>
	export default{
		data(){
			return{
				time : 10
			}
		},
		mounted(){
			var vm = this;
			var t = setInterval(function () {
				vm.time--;
				if(vm.time === 0){
					// 触发函数 end
					vm.$emit("end");
					clearInterval(t);
				}
			}, 1000)
		},
		// 接收标签参数
		props:{
			col:{
				// 类型 字符串 
				// 默认值
				type: String,
				default:'#f00'

			}
		}
	}
</script>