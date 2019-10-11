<template>
	 <div class="nav">
	 	<ul class="nav-list">
	 		<li class="nav-item" v-for="(item, index) in navs"
	 		:key="index">
	 			<a :href="item.linkUrl" class="nav-link">
	 				<img :src="item.picUrl" class="nav-pic"></img>
	 				<span>{{item.text}}</span>
	 			</a>
	 		</li>
	 	</ul>
	 </div>
</template>

<script>
	// import {swiper,swiperSlide} from 'vue-awesome-swiper'
	import {navItems} from './config';
	export default{
		name: 'HomeNav',
		components:{					
		},
		props:{
			
		},
		data(){
			return {  
			navs: navItems     
      		}
		},
		created(){
			
		},
		methods:{
			
		}
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	
	.nav{
		width: 100%;
		background-color: #FFF;
		padding-top: 10px;

		.nav-list{
			
			@include flex-center();
			flex-wrap: wrap;

			.nav-item{				
				width: 20%;
				margin-bottom: 15px;
				.nav-link{
					@include flex-center(column);
					flex-direction: column;
				}
				.nav-pic{
					width: 60%;
					margin-bottom: 6px;
				}
			}
		}
	}
</style>