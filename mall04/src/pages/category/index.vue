<template>
	<div class="g-category-container">
		<div class="g-header-container">
			<me-navbar class="header" title="字间距" v-show="visible">
				<i class="iconfont icon-richscan_icon" slot="left"></i>
				<div slot="center">搜索框</div>
				<i class="iconfont icon-xiaoxi" slot="right"></i>
			</me-navbar>
		</div>
		<div class="g-content-container">
			<div class="sidebar">
				<side-bar @switch-tab="getCurrentId"></side-bar>
			</div>
			<div class="main">
				<!-- <div class="loading" v-if="loading">
					<me-load  ></me-load>
				</div>		 -->		
				<category-main :curId="curId" @loaded="changeLoadState" ></category-main>
			</div>
		</div>
	</div>
</template>
<script>
	import MeLoad from 'base/loading';
	import MeNavbar from 'base/navbar';
	import SideBar from './sidebar';
	import CategoryMain from './content';	
	export default{
		name: 'category',
		data(){
			return {
				visible: true,
				curId: '',
				loading: true
			}
		},
		components:{
			MeNavbar,
			SideBar,
			CategoryMain,
			MeLoad
		},
		created(){
			this.getCurrentId()
		},
		methods:{
			getCurrentId(id){
				console.log(id);
				this.curId = id;
				this.loading = true;
			},
			changeLoadState(){
				this.loading = false;
				console.log(this.loading);
			}			
		}

	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";

	.g-category-container{
		height: 100%;

		.g-header-container{
			width: 100%;
			height: 50px;
			position: absolute;
		}
		.g-content-container{
			box-sizing: border-box;
			width: 100%;
			height: 100%;			
			position: static;
			padding-top: 50px;
			display: flex;
			flex-direction: row;
			
			.sidebar{
				width: 80px;
				height: 100%;
			}

			.main{

				flex: 1;
				position: relative;
				overflow: hidden;

				.loading{
					width: 100%;
					height: 100%;
					position: absolute;
					z-index: 1000;
					@include flex-center();
					
				}
				.mine-loading{
					
					width: 40%;
					height: 20%;
					background-color: #ddd;
				}
			}

		}
		
	}
	
</style>