<template>
	
		<button @click="change" :class="classObject">{{msg}}</button>
	
</template>
<style>
	button{
		padding: 5px 8px;
		box-shadow: 0 2px 2px;
		font-size: 16px;
		display: block;
		margin: 0 auto;
	}
	.styleObject{
		background : purple;
		border : none;
		font-size : 20px;
		color: #fff;
	}
	.styleObject1{
		background : pink;
		border : 2px solid yellow;
		font-size : 30px;
		color: #000;
	}
</style>
<script>
	export default{
		data(){
			return {
				msg:'btn',				
				classObject:{
					'styleObject': true,
					'styleObject1': false

				}
				
			}
		},
		methods:{
			change(){
				[this.classObject.styleObject,this.classObject.styleObject1] = [this.classObject.styleObject1,this.classObject.styleObject] 
			}
		}

	}
</script>