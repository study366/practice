<template>
	<ul class="footer">
		<li v-for="item in arryList">
			<img :src="item.imgUrl">
			<p>{{item.msg}}</p>			
		</li>
	</ul>
</template>
<style>
	.footer{
		font-size: 10px;
		
		width: 375px;
		height: 49px;
		box-shadow: 0px -1px 1px #333;
	}
	.footer li{		
		display: inline-block;
	}
	.footer li img,
	.footer li p{
		padding: 6px 33px;	
		width: 24px;
		height: 24px;
	}
	.footer li p{
		padding: 0px 33px;
	}
</style>
<script>
	export default{
		data(){
			return{

			}
		},
		props:{
			arryList:Array
		}

	}
</script>