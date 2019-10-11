<template>
	<div class="home-slider">
		<me-loading inline v-if="!sliders.length"></me-loading>
		<me-slider
		:direction="direction"
		:loop="loop"
		:interval="interval"
		:pagination="pagination"
		v-if="sliders.length"
			>
			<swiper-slide
			v-for="(item, index) in sliders"
			:key="index"
			>
				<a :href="item.linkUrl" class="slider-link">
					<img :src="item.picUrl" class="slider-img">
				</a>	
			</swiper-slide>	
		</me-slider>
	</div>
	
	
</template>

<script>
	import MeSlider from "base/slider";
	import MeLoading from 'base/loading';

	import {swiperSlide} from 'vue-awesome-swiper';
	import {sliderOptions} from './config';
	import {getHomeSlider} from 'api/home';
	

	export default{
		name: 'HomeSlider',
		components:{
			MeSlider,
			swiperSlide,
			MeLoading
		},
		data(){
			return{
				direction: sliderOptions.direction,
				loop: sliderOptions.loop,
				interval: sliderOptions.interval,
				pagination: sliderOptions.pagination,
				sliders:[]
			}
		},
		created(){
			// getHomeSlider();
			this.getSlider();
		},
		methods:{
			getSlider(){
				return getHomeSlider().then(data =>{
					console.log(data)
					this.sliders = data;
				})
			},
			update(){
				console.log('update 已执行');
				return this.getSlider();
			}
		}
	}
</script>
<style lang="scss" scoped>
	.home-slider{
		width: 100%;
		height: 183px;
		
		img{
			width: 100%;
			height: 100%;
		}
	}
</style>