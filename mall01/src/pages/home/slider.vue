<template>  
	<div class="slider-wrapper">
		<me-loading v-if="!sliders.length"></me-loading>
		<me-slider
		:data="sliders"
		:direction="direction"
		:interval="interval"
		:loop="loop"
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
	import MeSlider from 'base/slider';
	import MeLoading from 'base/loading';
	import {swiperSlide} from 'vue-awesome-swiper';
	import {swiperOption} from './config.js';
	import {getHomeSlider} from 'api/home.js';

	export default {
	  name: 'meheader',
	  data () {
	    return {
	    	direction: swiperOption.direction,
			interval: swiperOption.interval,
			loop:  swiperOption.loop,
			pagination: swiperOption.pagination,
	       	sliders:[],
	    }
	  },
	  components:{
	  	MeSlider,
	  	swiperSlide,
	  	MeLoading
	  },
	  created(){
	  	this.getSliders();
	  	// getHomeSlider();
	  },
	  methods:{
	  	// APi
	  	update(){
	  		return this.getSliders();
	  	},

	  	getSliders(){
	  		
	  		return getHomeSlider().then(data => {
	  			// console.log(data);
	  			this.sliders = data;
	  			console.log(this.sliders);
	  		})
	  	}
	  }
	}
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
	
    .slider-wrapper{
    	width: 100%;
    	height: 183px;
		
		.slider-link{
			display: block;
		}

    	.slider-link,
		.slider-img{
			width: 100%;
			height: 100%;
		}
    }
  
</style>
