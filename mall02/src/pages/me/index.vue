<template>
	<div class="g-content-container me">	    
    	<me-scroll>
    		<header>
    			头部
    		</header>
    		<section class="discover" 
			v-for="(section,index) in discoverList" :key="index">
			    <ul class="discover-list">		   		
		    	    <li class="discover-item" 
			    		v-for="(item,k) in section"
			    		:key="k">
		    			<div class="discover-item-icon">
		    				<i class="iconfont icon-sousuo" :class="item.iconClass"></i>
		    			</div>
		    			<div class="discover-item-content">
			    			<p class="discover-item-name">
				    			{{item.content}}
				    		</p>
				    		<p class="newAdd" v-if="item.isNew">
				    			NEW
				    		</p>			    		
					    	<div class="discover-item-icon discover-item-icon-fanhui">
					    		<i class="iconfont icon-fanhui" ></i>
					    	</div>
				    		<p class="discover-item-pic" v-if="item.pic">
				    			<img :src="item.pic">
				    		</p>
		    			</div>			    		
		    		</li>		    	
				</ul>
			</section> 
    	</me-scroll>	
  	</div>
</template>
<!-- 试图获取一个自定义组件的style -->
<!-- 失败 -->
<!-- 不能获取自定义组件的style -->
<script>
	
	import MeScroll from 'base/scroll';	
	export default{
		name: 'Me',
		data(){
			return {
				discoverList:[],						
			};
		},
		created(){	
			this.init();
		},
		components:{
			MeScroll
		},
		methods:{
			init(){
				this.discoverList = [[
					{
						iconClass:{"icon-sousuo": true},
						content: "支付",						
						isNew: false				
					}],
					[{
						iconClass:{"icon-sousuo": true},
						content: "收藏",
					},{
						iconClass:{"icon-sousuo": true},
						content: "相册",
					},
					{
						iconClass:{"icon-sousuo": true},
						content: "表情",
					}],
					[{
						iconClass:{"icon-sousuo": true},
						content: "设置",
						isNew: false
					}],[{
						iconClass:{"icon-sousuo": true},
						content: "待办任务",
						isNew: false
					},{
						iconClass:{"icon-sousuo": true},
						content: "1.聊天列表界面点击进入聊天界面 ok",
						isNew: false
					},{
						iconClass:{"icon-sousuo": true},
						content: "2.好友信息,聊天信息本地存储 ",
						isNew: false
					},{
						iconClass:{"icon-sousuo": true},
						content: "3.使用vuex或者类似技术公用一个数据池",
						isNew: false
					},{
						iconClass:{"icon-sousuo": true},
						content: "4.左右滑动切换router-view功能实现",
						isNew: false
					},{
						iconClass:{"icon-sousuo": true},
						content: "5.头部重制",
						isNew: false
					},{
						iconClass:{"icon-sousuo": true},
						content: "6.调用http://drea.cc/mm.php 的api实现与机器人聊天 ok",
						isNew: false
					},{
						iconClass:{"icon-sousuo": true},
						content: "7.如果有50000条记录，如何显示呢，每屏显示15条，那么总共显示5屏高度，上下各两屏高度，上滑一屏的距离unshift一屏，并且pop一屏，加载一屏删一屏",
						isNew: false
					}]
				];
			}
			
		},	
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";	
	.me{
		border:1px solid red;
		padding-top:0; 
		background-color: pink;
		background-clip: content-box; 
		z-index: 1001;
	}
	.discover{
		width: 100%;		
		background-color: #fff;
		margin-bottom: 0.5rem;

		&-item{
			width: 100%;
			line-height: 2rem;
			@include flex-between();
			
			&-icon{
				flex: 1;
				@include flex-center();				
				
				.icon-fanhui{
					text-align: center;
					display: block;
					transform: scale(0.8);
					
				}
			}
			&-content{
				width: 90%;	
				position: relative;
			}
			
			&-name{
				float: left;
			}
			&-name + .newAdd{
				
				float: left;
				color: #fff;
				background-color: #f00;
				height: 0.7rem;
				line-height: 0.7rem;
				font-size: 0.5rem;
				margin-left: 0.5rem;
				padding: 0 0.2rem;
				position: relative;
				top: 0.6rem;
				
				border-radius: 0.4rem;
				text-align: center;
				font-weight: bold;				
				
				
				
			}
			@keyframes new {
				0%{font-style: italic;color:red;}
				50%{color: #fed90f;}
				100%{font-style: normal;color:#f00;}
			}
			&-pic{
				width:2rem;
				padding-bottom: 2rem;				
				position: relative;				
				float: right;				
				
				img{
					margin: 0.4rem;			
					width: 60%;
					height: 60%;
					position: absolute;	
					border-radius: 5px;
				}
			}
			&-pic:after{
					content: '';
					display: block;
					width: 5px;
					height: 5px;
					background-color: red;
					position: absolute; 
					top: 0.3rem;
					left: 1.8em;
					border-radius: 50%;
				}
			&-icon-fanhui{
				width: 2rem;
				transform: rotate(180deg);
				float: right;
			}
			&-content:after{
				content: '';
				clear: both;				
				width: 100%;
				
				display: block;
				border:1px solid #eee;	
				background: rgba(100,100,100,0.2);
				position: absolute;

				transform: scaleY(0.5);
			}
			
			/*&-icon-fanhui{
				display: block;
				transform: rotate(180deg);
				position:relative; 
			}*/
			/*&-icon-fanhui:after{
				content: '';
				width: 100%;
				height: 100%;
				display: block;
				border:1px solid #eee;				
				position: absolute;
				transform: scaleY(0.5);
			}*/
			/*&-name{
				width: 75%;
				font-size: 1.2em;
				font-weight: bold;
				font-family: serif;				
			}*/

			/*&-name:after{
				content: '';
				width: 100%;
				display: block;
				border:1px solid #eee;
				transform: scaleY(0.5);
			}*/

		}
		&-item:hover{
			background: #eee;
		}
		.discover-list .discover-item:first-child .discover-item-content:after{
			display: none;
		}
	}
</style>