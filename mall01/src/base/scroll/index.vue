<template>  
	<swiper :options= "swiperOption" ref="swiper">
		<div class="mine-scroll-pull-down" v-if="pullDown">
			<me-loading :text="pullDownText" inline ref="pullDownLoading"></me-loading>
		</div>
		<swiper-slide>
			<slot></slot>
		</swiper-slide>
		<div class="mine-scroll-pull-up" v-if="pullUp">
			<me-loading :text="pullUpText" inline ref="pullUpLoading"></me-loading>
		</div>
		<div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
		
	</swiper>
</template>
<script>
	import {swiper, swiperSlide} from 'vue-awesome-swiper';	
	import MeLoading from 'base/loading';
	import {
		PULL_DOWN_HEIGHT,
		PULL_DOWN_TEXT_INIT,
		PULL_DOWN_TEXT_START,
		PULL_DOWN_TEXT_ING ,  
		PULL_DOWN_TEXT_END,
		PULL_UP_HEIGHT,
		PULL_UP_TEXT_INIT,
		PULL_UP_TEXT_START,
		PULL_UP_TEXT_ING,
		PULL_UP_TEXT_END
	} from './config.js';


	export default {
	  name: 'mescroll',	  
	  components:{
	  	swiper, 
	  	swiperSlide,
	  	MeLoading
	  },
	  mounted(){
	  	let swiperWrap = document.getElementsByClassName("swiper-wrapper")[0];
	  	let	swiperSlideActive = document.getElementsByClassName("swiper-slide")[0].offsetHeight;
	  	
	  	// let height = swiperSlideActive;
	    // let height = swiperSlideActive.offsetHeight;
	  	swiperWrap.setAttribute("height",swiperSlideActive);

	  },	  
	  props:{
	  	scrollbar:{
				type: Boolean,
				default: true
		},
		data:{
			type: [Array, Object]
		},
		pullDown:{
			type: Boolean,
			default: false
		},
		pullUp:{
			type: Boolean,
			default: false
		}	
	  },
	  watch:{
	  	data(){
	  		this.update();
	  	}
	  },
	  created(){
	  	this.init();
	  },
	  methods:{
	  	update(){	  		
	  		this.$refs.swiper && this.$refs.swiper.swiper.update();
	    },
	    scrollToTop(speed, runCallbacks){
	    	this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks);
	    },

	    init(){
	    	this.pulling = false ;
	    	this.pullDownText = PULL_DOWN_TEXT_INIT;
	    	this.pullUpText = PULL_UP_TEXT_INIT;
	    	this.swiperOption ={
	    		direction: 'vertical',
	    		slidesPerView: 'auto',
	    		freeMode: true,
	    		setWrapperSize: true,
	    		observer:true,
	    		observeParents:true,
	    		scrollbar:{
	    			el: this.scrollbar ? '.swiper-scrollbar' : null,
	    			hide: true
	    		},
	    		on:{
	    			sliderMove: this.scroll,
	    			touchEnd: this.touchEnd,
	    			transitionEnd: this.scrollEnd
	    		}
	    	}
	    },

	    scroll(){
	    	const swiper = this.$refs.swiper.swiper;

	    	this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper);
	    	if(this.pulling){
	    		return;
	    	}
	    	if(swiper.translate > 0){
	    		if(!this.pullDown){
	    			return;
	    		}
	    		if(swiper.translate > PULL_DOWN_HEIGHT){
	    			// this.pullDownText = " 111";  闪动 
	    			this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
	    		}
	    		else{
	    			this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
	    		}
	    	}else if (swiper.isEnd) {
	    		if(!this.pullUp){
	    			return;
	    		}

	    		const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'));
	    		if(isPullUp){
	    			this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START);
	    		}else{
	    			this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT);
	    		}
	    	}
	    },
	    scrollEnd(){
	    	this.$emit('scroll-end', this.$refs.swiper.swiper.translate, this.$refs.swiper.swiper);
	    },
	    touchEnd(){
	    	// 触摸结束函数 
	    	// 判断是否pulling确定是否继续执行

	    	const swiper = this.$refs.swiper.swiper;

	    	if(this.pulling){
	    		return;
	    	}
	    	/*  下拉部分  
			    	如果拉的高度大于下拉高度 且允许下拉刷新继续执行
			    	禁止触摸 设置过渡速度  回弹至pulldownheight
			    	定住禁止回弹
			    	设置文字 加载中
			    	发出消息，提供函数 
	    	*/
	    	if(swiper.translate > PULL_DOWN_HEIGHT){
	    		if(!this.pullDown){
	    			return;
	    		}

	    		this.pulling = true;
	    		swiper.allowTouchMove = false;//禁止触摸
	    		swiper.setTransition(swiper.params.speed);
	    		swiper.setTranslate(PULL_DOWN_HEIGHT);
	    		swiper.params.virtualTranslate = true; //定住禁止回弹
	    		this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING);
	    		this.$emit('pull-down', this.pullDownEnd);//发出消息，提供函数
	    	}
	    	/*  上拉部分  
	    			如果到了swiper.isEnd;
	    			元素总高 swiper.$wrapperEl.css('height')
			    	swiper.translate + swiper.height - totalHeight > PULL_UP_HEIGHT 则isPullUp为真，判断为正在上拉
			    	设置pulling状态
			    	禁止触摸 设置过渡速度  回弹至pulldownheight
			    	定住禁止回弹
			    	设置文字 加载中
			    	发出消息，提供函数 
	    	*/
	    	else if (swiper.isEnd) {
	    		const totalHeight = parseInt(swiper.$wrapperEl.css('height'));
	    		const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > totalHeight;

		    	if(isPullUp){
		    		if(!this.pullUp){
		    			return;
		    		}
		    		this.pulling = true;
		    		swiper.allowTouchMove = false;
		    		swiper.setTransition(swiper.params.speen);
		    		swiper.setTranslate(-(totalHeight + PULL_UP_HEIGHT - swiper.height));
		    		swiper.params.virtualTranslate = true;//禁止回弹
		    		this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING);//提示文字设置
		    		this.$emit('pull-up', this.pullUpEnd);
		    	}	
	    	}
	    	
	    },
	    pullDownEnd(){
	    // 下拉结束函数
	    // 更改pulling状态
	    // 允许触摸
	    //设置过渡速度 
	    // 允许回弹
	    // 设置位置回弹
	    // 更改回弹文字
	    	const swiper = this.$refs.swiper.swiper;

	    	this.pulling = false;
	    	swiper.allowTouchMove = true;
	    	swiper.setTransition(swiper.params.speed);	    	
	    	swiper.params.virtualTranslate = false; 
	    	swiper.setTranslate(0);
	    	this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
	    	setTimeout(() =>{
	    		this.$emit('pull-down-transition-end');
	    	}, swiper.speed);
	    },
	    pullUpEnd(){
	    	 	// 上拉结束函数
			    // 更改pulling状态
			    // 允许触摸			    
			    // 允许回弹			  
			    // 更改回弹文字
	    	const swiper = this.$refs.swiper.swiper;
	    	this.pulling = false;
	    	this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END);
	    	swiper.allowTouchMove = true;
	    	swiper.params.virtualTranslate = false;
	    	console.log('加载好了');
	    	
	    }

	  },
	}
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
	
    .swiper-container{
    	width: 100%;
    	height: 100%;
    	overflow: hidden;

    	.swiper-wrapper{
	    	width: 100%;
	    	height: 100%;
	    	overflow: hidden;
    	}
    }

    .swiper-slide{
    	height: auto;
    }

    .mine-scroll-pull-down{
    	position: absolute;
    	left: 0;
    	bottom: 100%;
    	width: 100%;
    	height: 80px;
    }

</style>
