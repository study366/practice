<template>	
	<swiper :options="swiperOption">
		<slot></slot>
		<div class="swiper-pagination" v-if="pagination" slot = "pagination"></div>
	</swiper>			
</template>
<script> 
	import {swiper} from 'vue-awesome-swiper';
	export default{
		name:'MeSlider',
		data(){
			return{

			}
		},
		components:{
			swiper,
						
		},
		props:{
			direction:{
				type: String,
				default: 'horizontal',
				validator(value) {
					return ['horizontal','vertical'].indexOf(value) > -1;
				}
			},
			interval:{
				type:Number,
				default: 3000,
				validator(value){
					return value >=0;
				}
			},
			loop:{
				type: Boolean,
				default:true
			},
			pagination:{
				type: Boolean,
				default:true
			}
		},
		data(){
			return{
				swiperOption:{
					watchOverflow:true,
					direction:this.direction,
					autoplay:this.interval?{
						delay:this.interval,
						disableOnInteraction: false
					}: false,
					sliderPerView: 1,
					loop: this.loop,
					pagination:{
						el: '.swiper-pagination' ?'.swiper-pagination' : null
					}
				}
			};
		}
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.swiper-container{
		width: 100%;
    	height: 100%;
	}	
</style>