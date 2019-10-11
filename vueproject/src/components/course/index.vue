<template>
	<ul class="c-course">
		<router-link to="/detail">
			<li v-for= "item in arryList">
				<img :src="item.imgUrl">
				<h1>{{item.title}}</h1>
				<p>{{item.content}}</p>
			</li>
		</router-link>
	</ul>

</template>

<style>
	/*公用样式清理*/
	a{
		text-decoration: none;
	}
	.c-course{
		font-size: 15px;
		padding-top: 24px;
		overflow: hidden;

	}
	.c-course li{
		width: 335px;
		height: 72px;
		margin: 0 auto;
		padding-bottom: 24px;
		overflow: hidden;
	}
	.c-course li img{
		width: 108px;
		height: 72px;
		position: absolute;	
	}
	.c-course li h1,
	.c-course li p{
		font-family: PingFangSC-Regular;

		color: #2B333B;
		letter-spacing: 0;
		line-height: 17px;
		width: 211px;
		font-weight: normal;
		font-size: 15px;
		margin-left: 124px;
		/*overflow: hidden;*/
	}
	.c-course li p{
		height: 8px;
		font-size: 12px;
		padding-top: 8px;
		color: #71777d;
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
		},
		mounted(){			
		}

	}
</script>