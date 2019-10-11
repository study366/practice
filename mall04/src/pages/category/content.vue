<template>
	<div class="category-content">
		<me-scroll ref="scroll"
		@backtop-show="backtopShow" >
			<div class="banner" v-if="content.banner">
			<router-link :to="content.banner.linkUrl" class="banner-link">
				<img @load="updataScroll" :src="content.banner.picUrl" alt="">
				<!-- <img v-lazy="content.banner.picUrl" class="banner-pic"> -->
			</router-link>
			</div>
			<div class="section" v-for="(section,index) in content.data">
				<h1 class="section-name">{{section.name}}</h1>
				<ul class="section-list" >
					<li class="section-item"
					v-for="(item,k) in section.itemList">
						<router-link
						:to="item.linkUrl"
						>
							<p class="section-item-pic">
								<img v-lazy="item.picUrl" >
							</p>							
							<p class="section-item-name">{{item.name}}</p>	
						</router-link>
						
					</li>
				</ul>
			</div>				
		</me-scroll>
		<div class="back-top" @click="backTop" v-show="backtopVisible">
			<a href="javascript:void(0)" class="backtop">
				<i class="iconfont icon-fanhuidingbu"></i>
			</a>
		</div>
	</div>
</template>
<script>
	import MeScroll from "base/scroll";
	import {getCategoryContent} from "api/category";
	import storage from "assets/js/storage";
	import {CATEGORY_CONTENT_KEY,CATEGORY_CONTENT_UPDATE_TIME_INTERVAL} from "./config";
	export default{
		name: 'categoryContent',
		data(){
			return{
				content: {},
				backtopVisible: false
			}
		},
		components:{
			MeScroll
		},
		props:{
			curId:{
				type: String,
				default: ''
			}
		},
		created(){
			// this.getContent(this.curId);
		},
		watch:{
			curId(id){
				this.getContent(id);
			}
		},
		methods:{
			// API
			// 返回顶部图标显示
			backtopShow(){
				this.backtopVisible = true;
			},
			// 
			// 根据id获取content
			// 如果本地有 && 未过期 则使用localStorage
			// else 使用 by http 		
			getContent(id){
				let content = storage.get(CATEGORY_CONTENT_KEY);
				let curTime = new Date().getTime();
				let updateTime;

				if(content && content[id]){
					updateTime = content[id].updateTime || 0;

					if(curTime - updateTime <= CATEGORY_CONTENT_UPDATE_TIME_INTERVAL){
						if(content[id].data){
							return this.getContentByLocalStorage(content[id]).then(() =>{
								this.$refs.scroll.scrollToTop(0);
							});
						}						
					}
				}
				return this.getContentByHttp(id).then(() =>{
					this.updateLocalStorage(content, id, curTime);
					this.$refs.scroll.scrollToTop(0);
				});
			},
			getContentByLocalStorage(content){
				return new Promise(resolve =>{					
					this.content = content.data;
				});
			},

			getContentByHttp(id){
				return getCategoryContent(id).then(data =>{
					return new Promise(resolve =>{
						if(data){
						this.content = data;
						resolve();
						}
					})
					
				})
			},

			updateLocalStorage(content, id, curTime){
				content = content || {};
				content[id] = {},
				content[id].data = this.content;
				content[id].updateTime = curTime;
				storage.set(CATEGORY_CONTENT_KEY, content);
			},

			updataScroll(){
				console.log('图片加载好了，更新滚动条');
				this.$refs.scroll.updataScroll();
			},
			backTop(){
				console.log('backtop');
				this.backtopVisible = false;
				this.$refs.scroll.scrollToTop();
			}
		}
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";

	.category-content{
		width: 100%;
		height: 100%;
		position: relative;
		padding: 10px;

		.swiper-wrapper{
			width: auto;
		}
		.banner-link{	
			width: 80%;
			padding-bottom: 80%;
			margin: 0 auto;
			height: auto;
			position: relative;

			img{
				position: absolute;
				top: 0;
				width: 100%;
				height: 100%;
			}
		}

		.section{
			.section-name{
				padding-top: 10px;
				width: 100%;
				line-height: 2em;
				font-weight: bold;
			}
			&-list{
				box-sizing: border-box;
				background-color: #fff;
				@include flex-center();
				justify-content: flex-start;
				flex-wrap: wrap;

			}
			&-item{
				width: 33%;
				padding: 10px;
				
				
				a{
					width: 100%;
					/*height: 100%;*/
				}
				.section-item-pic{
					width: 100%;
					padding-bottom: 100%;
					position: relative;
				}
				img{
					position: absolute;
					top: 0;
					width: 100%;
					height: 100%;
				}

				@include flex-center(column);
				.section-item-name{
					text-align: center;	
				}
				
			}
		}
		.back-top{
			width: 50px;
			height: 50px;
			
			position: absolute;
			bottom: 20px;
			right: 20px;
			background-color: #000;
			color: #fff;
			z-index: 1000;
			border-radius: 50%;

			.backtop{
				width: 100%;
				height: 100%;
				@include flex-center();
				color: #fff;

				.iconfont{
					font-size: 25px;
				}
			}
		}
		
	}

</style>