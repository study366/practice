<template>
	<swiper :options="swiperOption" ref="swiper">
		<div class="mine-scroll-pull-down" v-if="pulldown">
			<me-loading :text="pullDownText" ref="pulldown"></me-loading>
		</div>
       <swiper-slide class="swiper-slide-content"><slot> </slot></swiper-slide>
        <div class="swiper-scrollbar" slot="scrollbar" v-if="scrollbar"></div>
		<div class="mine-scroll-pull-up" v-if="pullup">
			<me-loading :text="pullUpText" ref="pullup"></me-loading>
		</div>
	</swiper>	
</template>

<script>
	import {swiper,swiperSlide} from 'vue-awesome-swiper';
	import meLoading from '../loading';
	export default{
		name: 'MineScroll',
		components:{
			swiper,
			swiperSlide	,
			meLoading	
		},
		props:{
			scrollbar:{
				type: Boolean,
				default: false
			},
			updataScrollCount:{
				type:[Number,String]
			},
			pulldown:{
				type: Boolean,
				default: false
			},
			pullup:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return {
	        	cancelToke: null
    		}
		},

		created(){
			this.init();
		},
		methods:{
			updataScroll(){
				 this.$refs.swiper && this.$refs.swiper.swiper.update();
			}, 
			scrollToTop(speed, runCallbacks){
				this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks);
			},
			scrollTo(translate = 0){				
				this.$refs.swiper && this.$refs.swiper.swiper.setTranslate(translate);
			},

			init(){
				this.swiperOption = {
		            direction: 'vertical',
		    		slidesPerView: 'auto',
		    		freeMode: true,
		    		setWrapperSize: true,
		    		observer:true,
		    		observeParents:true,
		    		scrollbar:{
		    			el: '.swiper-scrollbar',
		    			hide: true
		    		},
		    		on:{
		    			sliderMove: this.scroll,
		    			touchEnd: this.touchEnd,
		    			transitionEnd: this.scrollEnd,
		    			
		    		}
		    	};
	       		this.pullDownText = '下拉刷新';
	       		this.pullUpText = '上拉加载';
			},
			
			/**
			 * 发出消息 scroll
			 * 下拉 文字改变刷新
			 * 发出消息 backtop-show
			 * 上拉 文字改变
			 */
			scroll(){

				const swiper = this.$refs.swiper.swiper;				
				this.$emit('scroll',swiper.translate,swiper);

				const totalHight = parseInt(swiper.$wrapperEl.css('height'));
				const myThis = this;
				
				
				if(this.pulldown){
					pulldownRefresh(swiper.translate);
				}
				if (swiper.translate < -swiper.height ) {					
					this.$emit('backtop-show');
				}				
				if(this.pullup && swiper.isEnd){					
					pullupLoadMore(swiper);					
				}						

				function pulldownRefresh(translate) {
					 if(translate > 10){
					 	myThis.$refs.pulldown.setText("下拉加载更多");
					 }
					 if(swiper.translate > 100){
					 	myThis.$refs.pulldown.setText("松手加载");
					 }
				}

				function pullupLoadMore(swiper){
					const totalHight = parseInt(swiper.$wrapperEl.css('height'));				
					const isPullUp = Math.abs(swiper.translate) + swiper.height - totalHight > 100;

					if (isPullUp) {
						myThis.$refs.pullup.setText('松手刷新');
					}else{
						myThis.$refs.pullup.setText('下拉刷新');
					}
				}
				
			},
			scrollEnd(){
				const swiper = this.$refs.swiper.swiper;				
				this.$emit('scroll-end', swiper, swiper.translate);

			},

			/*
		   	** 发出消息 scroll
			** 下拉 文字改变刷新
			** 发出消息 backtop-show
			** 上拉 文字改变
			 */
			  
			touchEnd(){
				const swiper = this.$refs.swiper.swiper;
				const myThis = this;
				// if > 100 执行下拉刷新的一些列操作

				// else   执行上拉加载的操作
				if(myThis.pulldown){
					if(swiper.translate >100){
						pageRefresh(swiper,myThis);
					}
				}
				if(myThis.pullup){
					if(swiper.isEnd){
						const totalHight = parseInt(swiper.$wrapperEl.css('height'));
						const isPullUp = Math.abs(swiper.translate) + swiper.height - totalHight > 100;
						if(isPullUp){
							pageLoadMore(swiper,myThis);
						}
					}
				}
				function pageRefresh (swiper,myThis) {
					swiper.allowTouchMove = false; //禁止触摸，
					swiper.setTransition(swiper.params.speed);//设置回弹速度
					swiper.setTranslate(100); //设置回弹位置
					swiper.params.virtualTranslate = true;//禁止回弹
					myThis.$refs.pulldown.setText("正在加载");
					myThis.$emit('pull-down', myThis.pullDownEnd);//触发事件 传出函数
				}
				function pageLoadMore (swiper,myThis) {
					swiper.allowTouchMove = false; //禁止触摸，
					swiper.setTransition(swiper.params.speed);//设置回弹速度
					swiper.setTranslate(-(totalHight + 100 - swiper.height)); //设置回弹位置
					
					swiper.params.virtualTranslate = true;//禁止回弹
					myThis.$refs.pullup.setText("加载中");
					myThis.$emit('pull-up', myThis.pullUpEnd);//触发事件 传出函数 
				}				
			},
			pullDownEnd(){
				console.log('pulldown执行');
				const swiper = this.$refs.swiper.swiper;
				swiper.allowTouchMove = true; //触摸，
				swiper.setTransition(swiper.params.speed);//设置回弹速度
				
				swiper.params.virtualTranslate = false;//回弹
				swiper.setTranslate(0); //设置回弹位置		
			},
			pullUpEnd(){
				console.log('pullUpEnd执行');

				const swiper = this.$refs.swiper.swiper;
				const totalHight = parseInt(swiper.$wrapperEl.css('height'));	
				swiper.allowTouchMove = true; //触摸，
				swiper.setTransition(swiper.params.speed);//设置回弹速度
				
				swiper.params.virtualTranslate = false;//允许回弹
				// swiper.setTranslate(-(totalHight - swiper.height)); 
				// 设置回弹位置		
			}
		},
		watch:{
			updataScrollCount(){
				console.log('观测到数据变化');
				console.log(this.updataScrollCount);
				this.updataScroll();
			}
		},
		mounted(){
			// document.getElementsByClassName('.swiper-wrapper').style.height = 'auto';
		}
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.swiper-slide-content{
		height: auto;
	}
	.swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .swiper-wrapper {
    height: auto;
}

  .swiper-slide {
    height: auto;
  }
  .mine-scroll-pull-up,
  .mine-scroll-pull-down {
    position: absolute;
    left: 0;
    width: 100%;
  }
  .mine-scroll-pull-down {
    bottom: 100%;
    height: 80px;
  }

  .mine-scroll-pull-up {
    top: 100%;
    height: 30px;
  }
</style>