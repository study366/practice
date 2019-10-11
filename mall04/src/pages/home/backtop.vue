<template>
	<a href="javascript:void(0)" class="backtop">
		<i class="iconfont icon-fanhuidingbu"></i>
	</a>
</template>
<script>
	export default{
		name:'BackTop',
		date(){			
		},
	}
</script>
<style scoped="" lang="scss">
	@import "~assets/scss/mixins";
	.backtop{
		display: block;
		width: 50px;
		height: 50px;
		font-size: 18px;
		border-radius: 50%;
		background-color: rgba(255,0,0,0.5);
		@include flex-center();
		align-items: center;
		justify-content: center;			
		box-shadow: 2px 2px 2px #ccc;
	}

	.iconfont{
		color: #fff;
		font-size: 25px;
	}

</style>