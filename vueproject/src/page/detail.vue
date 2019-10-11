<template>
	<div>
		<div class="detail-page">
			
		</div>
		<div class="back-home">
			<router-link to="/home">
				<
			</router-link>
		</div>
	</div>
</template>
<!-- scoped 只应用在style元素及其子元素 -->
<style scoped>
	.detail-page{
		width: 20px;
		/*后面的 是告诉插件 不用计算这个*/
		height: 40px;/*no*/  
	}
</style>
<script>
	export default{
		data(){
			return{

			}
		}
	}
</script>