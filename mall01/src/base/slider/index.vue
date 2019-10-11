<template>  
	<swiper :options="swiperOption" :key="keyId">
		<slot></slot>
		<div class="swiper-pagination" v-if="pagination" slot="pagination">
			
		</div>
	</swiper>
</template>
<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	
	export default {
	    name: 'meslider',
		data () {
		    return {
		    	keyId: Math.random(),
		       	
		    }
		},
		created(){
			this.init();
		},
	  	components:{
		  	swiper, 
		  	swiperSlide
		  	
	  	},
		props:{
		  	direction:{
		  		type: String,
		  		default: 'horizontal',
		  		validator(value){
		  			return ['horizontal'
						,'vertical'].indexOf(value) > -1 ;
		  		}
		  	} ,
		  	interval:{
		  		type: Number,
		  		default: 1000,
		  		validator(value){
		  			return value >= 0;
		  		}
		  	},
		  	loop:{
		  		type: Boolean,
		  		default: true
		  	},
		  	pagination:{
		  		type: Boolean,
		  		default: true
		  	},
		  	data:{
		  		type: Array,
		  		default(){
		  			return [];
		  		}
		  	}
		},
		watch:{
			data(newData){
				if(newData.length === 0){
					return;
				}
			this.swiperOption.loop=newData.length === 1 ? false: this.loop,
				this.keyId = Math.random();
			}
		},
		methods:{
			init(){
				this.swiperOption = {
					watchOverflow:true,
					direction:this.direction,
					autoplay:this.interval?{
						delay:this.interval,
						disableOnInteraction: false
					}: false,
					sliderPerView: 1,
					loop: this.data.length === 1 ? false: this.loop,
					pagination:{
						el: true ?'.swiper-pagination' : null
					}
				};
			}
		}

	};
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .swiper-container{
  	width: 100%;
  	height: 100%;
  }
</style>
