<template>
	<div class="home">
		<div class="g-header-container">
			<home-header></home-header>
		</div>
		<me-scroll :data="recommends"
		pullDown
		@pull-down="pullToRefresh">			
			<home-slider></home-slider>
			<home-nav></home-nav>
			<home-recommend class="recommend" @loaded="getRecommend">
				
			</home-recommend>
		</me-scroll>

		<div class="g-backtop-container"></div>
		<router-view></router-view>
	</div>
</template>
<script>
	import HomeHeader from './header';
	import HomeSlider from './slider';
	import HomeNav from './nav';
	import MeSlider from 'base/slider';	
	import MeScroll from 'base/scroll';	
	import HomeRecommend from './recommend';	
	export default{
		name:'home',
		data(){
			return{
				recommends:[]
			}
		},
		components:{
			'home-header':HomeHeader,
			'home-slider':HomeSlider,
			MeScroll,
			HomeNav,
			HomeRecommend
		},
		methods:{
			getRecommend(recommend){
				this.recommends =recommend;
			},
			pullToRefresh(end){
				setTimeout(() => {
					console.log('下拉刷新');
					end();
				},1000);
			}
		}

	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.home{
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-color: $bgc-theme;
	}
	
	
</style>