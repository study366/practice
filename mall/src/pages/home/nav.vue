<template>	
	<nav class="nav">		
		<ul class="nav-list">
			<li class="nav-item" v-for="(item,index) in nav" :key="index">
				<a :href="item.linkUrl" class="nav-link">
					<img :src="item.picUrl" class="nav-pic">
					<span>{{item.text}}</span>					
				</a>
			</li>
		</ul>
	</nav>			
</template>
<script> 
	// import {swiper} from 'vue-awesome-swiper';
	import {navItems} from './config';
	export default{		
		data(){
			return{									
			}
		},
		components:{	
						
		},
		props:{
			
		},	
		created() {
			this.nav = navItems;
		}	
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.nav{
		width: 100%;
		padding-top: 15px;
		background-color: #fff;
	}
	.nav-list{
		display: flex;
		flex-wrap: wrap;
		width: 100%;		
		padding-bottom: 15px;

		.nav-item{
			width: 20%;
			display: flex;
			/*flex-direction: column;*/

			.nav-link{
				@include flex-center(column);
				padding-bottom: 6px;

				.nav-pic{
					width: 60%;
					padding-bottom: 6px;
				}
			}
		}
	}
</style>