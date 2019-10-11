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
	        	
    		}
		},

		created(){
			this.init();
		},
		methods:{
			updataScroll(){
				// swiper1 = new Swiper('.swiper-container', { 
				//  initialSlide :0, 
				//  observer:true,//修改swiper自己或子元素时，自动初始化swiper 
				//  observeParents:true//修改swiper的父元素时，自动初始化swiper 
				// });
				// var swiper = new Swiper('.swiper-container', {
			 //        pagination: '.swiper-pagination',
			 //        slidesPerView: 'auto',
			 //        paginationClickable: true,
			 //        spaceBetween: 0
			 //    });
				console.log('子组件接到消息，准备更新滚动条');
				console.log(this.$refs.swiper.swiper);
				 this.$refs.swiper && this.$refs.swiper.swiper.update();
			}, 
			scrollToTop(speed, runCallbacks){
				this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks);
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

			scroll(){
				// if 下拉 更改显示文字				
				// else 上拉 更改显示文字
				const swiper = this.$refs.swiper.swiper;
				this.$emit('scroll',swiper.translate,swiper);
				console.log(swiper.translate);
				console.log('swiper.height');
				console.log(swiper.height);
				const totalHight = parseInt(swiper.$wrapperEl.css('height'));	
				console.log(totalHight);	
				
				if(swiper.translate > 10 && this.pulldown){
					this.$refs.pulldown.setText("继续下拉刷新");
					// 直接更改会闪屏
					// this.pullDownText = "继续下拉刷新";
				}
				if(swiper.translate > 100 && this.pulldown){
						this.$refs.pulldown.setText("松手刷新");
				}else if (swiper.translate < -swiper.height ) {
					console.log('触发backtop-show');
					this.$emit('backtop-show');
				}
				else if(swiper.isEnd){					
					const totalHight = parseInt(swiper.$wrapperEl.css('height'));				
					const isPullUp = Math.abs(swiper.translate) + swiper.height - totalHight > 100;
					
					if (isPullUp && this.pullup) {
						this.$refs.pullup.setText('松手刷新');
					}else if(this.pullup){
						this.$refs.pullup.setText('下拉刷新');
					}
				}
			},
			scrollEnd(){
				const swiper = this.$refs.swiper.swiper;
				this.$emit('scroll-end', swiper, swiper.translate);
			},
			touchEnd(){
				const swiper = this.$refs.swiper.swiper;
				// if > 100 执行下拉刷新的一些列操作

				// else   执行上拉加载的操作
				if(swiper.translate >100 && this.pulldown){
					swiper.allowTouchMove = false; //禁止触摸，
					swiper.setTransition(swiper.params.speed);//设置回弹速度
					swiper.setTranslate(100); //设置回弹位置
					swiper.params.virtualTranslate = true;//禁止回弹
					this.$refs.pulldown.setText("刷新中");
					this.$emit('pull-down', this.pullDownEnd);//触发事件 传出函数
				}else if(swiper.isEnd){
					const totalHight = parseInt(swiper.$wrapperEl.css('height'));	
					console.log('totalHight: '+ totalHight + parseInt(swiper.$wrapperEl.css('height')) );			
					const isPullUp = Math.abs(swiper.translate) + swiper.height - totalHight > 100;
					console.log('swiper.translate:' + swiper.translate);
					console.log('swiper.height:' + swiper.height);
					
					if (isPullUp && this.pullup) {
						swiper.allowTouchMove = false; //禁止触摸，
						swiper.setTransition(swiper.params.speed);//设置回弹速度
						swiper.setTranslate(-(totalHight + 100 - swiper.height)); //设置回弹位置
						console.log(totalHight + '+' + 100 + '-' +swiper.height);
						console.log(swiper.translate);
						swiper.params.virtualTranslate = true;//禁止回弹
						this.$refs.pullup.setText("加载中");
						this.$emit('pull-up', this.pullUpEnd);//触发事件 传出函数
					}
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