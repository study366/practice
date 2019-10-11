<template>	
	<div class="slider-wrapper">
		<me-loading v-if="!sliders.length"></me-loading>
		<me-slider
			:direction="direction"
			:loop="loop"
			:interval="interval"
			:pagination="pagination"
			v-if="sliders.length"
			>
			<swiper-slide  v-for = "(item,index) in sliders"
				:key="index"
				>
				<a :href="item.linkUrl" class="sliders-link">
					<img :src="item.picUrl" class="sliders-img">
				</a>
			</swiper-slide>
		</me-slider>		
	</div>
</template>
<script>	
	import MeSlider from 'base/slider';
	import MeLoading from 'base/loading';
	import { swiper,swiperSlide} from "vue-awesome-swiper";
	import {sliderOptions} from './config';
	import {getHomeSlider} from '../../api/home';

	export default{
		name:'HomeSlider',
		
		components:{
			MeSlider,
			MeLoading,
			swiperSlide,
			swiper
			
		},
		data(){
			return{
				direction: sliderOptions.direction,
				loop: sliderOptions.loop,
				interval: sliderOptions.interval,
				pagination: sliderOptions.pagination,

				sliders:[],
			}
		},
		created(){
			this.getSliders();
		},
		methods:{
			getSliders(){
				getHomeSlider().then(data => {
					this.sliders = data;
				});
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";

	.slider-wrapper{
		height: 183px;
	}
	.sliders-link{		
		display: block;
	}
	.sliders-link,
	.sliders-img{
		width: 100%;		
	}
</style>