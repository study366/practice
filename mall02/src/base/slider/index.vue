<template>	
	<swiper :options="swiperOption">
		<slot></slot>
		<div class="swiper-pagination" v-if="pagination" slot="pagination">
			
		</div>
		<!-- <div class="swiper-pagination" v-if="pagination" slot="pagination"></div> -->
	</swiper>	
</template>

<script>
	import {swiper} from 'vue-awesome-swiper';
	export default{
		name: 'MineSlider',
		components:{
			swiper
		},
		props:{
			direction:{
				type: String,
				default: 'horizontal',
				validator(value){
					return [
					'horizontal',
					'vertiacal'
					].indexOf(value) > -1;
				}
			},
			interval:{
				type:Number,
				default: 3000,
				validator(value){
					return value > 0;
				}
			},
			loop:{
				type: Boolean,
				default: true
			},
			// pagination:{
			// 	type: Boolean,
			// 	default: true
			// },
			pagination:{
		  		type: Boolean,
		  		default: true
		  	},
		},
		data(){
			return{
				swiperOption:{
					watchOverflow: true, //只有一张图片 停止轮播
					direction: this.direction,//方向
					autoplay: this.interval ?{
						delay: this.interval,
						disableOnInteraction: false //交互时是否停止轮播
					} :false,
					slidersPerView: 1, //显示几张
					loop: this.loop, //循环滚动
					pagination:{ //分页器
						el: true ? '.swiper-pagination' : null
						// el: true ?'.swiper-pagination' : null
					} 
				}
			}
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