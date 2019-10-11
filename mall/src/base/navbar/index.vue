<template>
	<div class="mine-navbar">
		<div class="mine-navbar-left">
			<slot name="left" ></slot>
		</div>
		<div class="mine-navbar-center">
			<slot name = center></slot>
		</div>
		<div class="mine-navbar-right">
			<slot name="right" ></slot>
		</div>
		<h1 class = "mine-navbar-title" v-if="title" >
			<span v-text="title" class="text"></span>
		</h1>
	</div>
</template>
<script>
	 	
	export default{
		name:'HomeHeader',
		data(){
			return{

			}
		},
		props:{
			title:{
				type:String,
				default: ''
			}
		}

		
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.mine-navbar{
		@include flex-between();
		height: 50px;
		background-color: #FFF;

		&-left{
			margin-left: 10px;
		}

		&-center{
			flex: 1;
			margin:  0 10px;
		}

		&-right{
			margin-right: 10px;
		}
	}
	.mine-navbar-title{
		position: absolute;
		top: 0;
		bottom: 0;
		left: 20%;
		right: 20%;
		@include flex-center();
		font-size: 18px;
		

		.text{
			line-height: 1.3em;
			width: 100%;
			text-align: center;
			@include ellipsis();
		}
	}
	
</style>