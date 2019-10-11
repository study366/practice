<template>
	<div>
		<div>使用computed实现对数组进行升序排列</div>
		<div ref="arr"></div>
	</div>

</template>
<script>
	export default{
		data(){
			return {
				arr : [1,4,6,7,-9,4,0,-2,-1,8],
				items:[
					{message: 'foo'},
					{message: 'bar'}
				],
			}
		},
		
		mounted(){
			var arr1 = this.arr.sort(function (a,b) {
					return a- b;
				})
			this.$refs.arr.innerHTML = arr1;
			console.log(arr1);

		},
		// 不晓得为啥没得用
		computed:{
			arrSort(arr){
				return arr.sort(function (a,b) {
					return a- b;
				})
			}
		},
	}
</script>