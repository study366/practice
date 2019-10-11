<template>
	<div class="home">
		<div class="g-header-container">	
			<home-header :class="{'header-transition':isHeaderTransition}" ref="header"></home-header>
		</div>
		<me-scroll :updataScrollCount="updataScrollCount"
		pulldown
		pullup
		scrollbar
		@pull-down="pullToRefresh"
		@pull-up="pullToLoadMore"
		@backtop-show="BackTopShow"
		@scroll-end="scrollEnd"
		@scroll="scroll"
		ref="scroll">
			<home-slider ref="slider"></home-slider>			
			<home-nav></home-nav>
			<home-recommend @loaded="updataScroll" ref="recommend"></home-recommend>			
		</me-scroll>		
		<div class="g-backtop-container" @click="scrollToTop">
			<back-top v-show="BackTopShowVisibel"></back-top>
		</div>
		<router-view></router-view>		
	</div>
</template>
<script>
	import HomeHeader from './header';
	import HomeSlider from './slider';
	import HomeNav from './nav';	
	import HomeRecommend from './recommend';	
	import MeScroll from 'base/scroll';	
	import BackTop from './backtop';
	
	export default{
		name: 'home',
		components:{
			HomeHeader,
			HomeSlider,
			HomeNav,
			HomeRecommend,
			MeScroll,
			BackTop,		
		},
		data(){
			return {
				updataScrollCount:1,
				BackTopShowVisibel: false,
				isHeaderTransition:false,
			}			
		},
		created(){
			this.init();
		},
		methods:{
			BackTopShow(){
				console.log('执行backtop-show');
				this.BackTopShowVisibel = true;
			},
			updataScroll(){
				console.log('父组件接收到消息，准备更新滚动条');
				let mythis = this;
				setTimeout(() =>{
					mythis.updataScrollCount += 1;
					console.log('setTimeout(handler: any, timeout?: long, arguments...: any)')
				}, 1000);
				console.log(this.updataScrollCount);
				if(this.updataScrollCount < 10){
					++this.updataScrollCount;
				}
				else{
					--this.updataScrollCount;
				}
								
			},
			scroll(translate,swiper){
				this.changHeaderStatus(translate);
			},
			scrollEnd(swiper, translate){
				if(translate < -swiper.height){
					this.BackTopShowVisibel = true;
				}
				setTimeout(() =>{
					this.changHeaderStatus(translate);
				}, 200);
				
			},
			init(){
				this.BackTopShowVisibel = false;
			},
			changHeaderStatus(translate){
				console.log('changHeaderStatus 执行');
				if(translate > 0){
					this.$refs.header.hidden();					
					return;
				}
				this.$refs.header.show();
				this.isHeaderTransition = translate < -180;
			},
			scrollToTop(){
				this.$refs.scroll.scrollToTop();
				setTimeout(() =>{
					this.BackTopShowVisibel = false;
				},500)
			},
			pullToRefresh(end){
				setTimeout(() =>{
					this.changHeaderStatus();
				}, 1000);
				
				this.$refs.slider.update().then(end);
			},
			pullToLoadMore(end){
				this.$refs.recommend.getRecommend().then(end).catch(err =>{
					console.log('loadmore捕获错误');
					if(err){
						console.log(err);
					}
					end();
				});
			}
		},		
	}
</script>
<style lang="scss" scoped="scoped">
	@import "~assets/scss/mixins";
	
	html,body{
		margin:0;
		padding: 0;

	}
	.home{
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: $bgc-theme;

		.g-header{
			box-sizing: border-box;	
			position: fixed;
			top: 0;
			width: 100%;
			height: 44px;
			background-color: orange;			
		}
		.g-container{
			box-sizing: border-box;			
			position: relative;
			margin-top: 44px;
			width: 100%;
			height: 100%;
			background-color: blue;
		}
		.g-footer{
			position: fixed;
			width: 100%;
			bottom: 0;
			background-color: pink;
		}
		.g-backtop-container{
			
		}

	}
	
</style>