<template>
	<div class="home-recommend">
		<h1 class="home-recommend-title">热卖推荐</h1>
		<ul class="home-recommend-list">
			<li class="home-recommend-item" v-for="(item, index) in recommend" :key="index">
				<router-link class="home-recommend-link" :to="{name:'home-product', params: item.baseinfo.itemId}">
					<p class="home-recommend-pic">
						<img v-lazy="item.baseinfo.picUrlNew" >
					</p>					
					<div class="home-recommend-info">
						<p class="home-recommend-name">{{item.name.shortName}}</p>
						<p class="home-recommend-origPrice"><del >{{item.price.origPrice}}</del></p>
						<p class="home-recommend-saleinfo">
							<span class="home-recommend-price">{{item.price.actPrice}}</span>
							<span class="home-recommend-count">{{item.remind.soldCount}}件已售出</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>	
</template>

<script>

	// import {getHomeSlider} from 'api/home';
	import {getHomeRecommend} from 'api/home';
	

	export default{
		name: 'HomeRecommend',
		components:{
			
		},
		data(){
			return{	
				recommend: [],
				curPage: 1,
				totalPage: 1			
			};
		},
		created(){
			this.getRecommend();
		},
		methods:{
			getRecommend(){
				console.log('执行getrecommend');
				if(this.curpage > this.totalPage){
					return Promise.reject(new Error('no more'));
				}
				return getHomeRecommend(this.curPage).then(data =>{
					return new Promise((resolve,reject) =>{
						if(data){
							this.curpage++;
							this.totalPage = data.totalPage;
							this.recommend = this.recommend.concat(data.itemList);
							this.$emit('loaded',this.recommend);
							resolve();
						}
						else{
							reject();
						}
					});
				});
			},			
		}
	}
</script>
<style lang="scss" scoped>
	/*@import "~assets/scss/mixins";*/
	@import "~assets/scss/mixins";

	.home-recommend{
		width: 100%;
		overflow: hidden;
		background-color: #fff;

		&-title{
			@include flex-center();
			margin: 10px 0;
		}
		&-list{
			@include flex-between();
			flex-wrap: wrap;
			width: 100%;			
			position: relative;

			.home-recommend-item{
				@include flex-center();				
				width: 49%;
			}
			.home-recommend-link{
				display: block;
				width: 100%;
			}
			.home-recommend-pic{
				position: relative;
				width: 100%;
				padding-top: 100%;

				img{
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
			}
		}
		&-info{
			padding: 3px 0;
			line-height: 1.3em;
			
			.home-recommend-origPrice{
				display: block;
				align-items: flex-start;
				margin-left: 10px;
			}
			.home-recommend-name,
			.home-recommend-saleinfo{
				@include flex-between();
				margin: 0 10px;

				.home-recommend-price{
					font-size: 18px;
					color: red;
				}
			}
		}
	}
</style>