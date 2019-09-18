<template>
	<div class="g-content-container">
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
			    			New
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
		   	
   	</div>
</template>

<script>
	export default{
		name: 'Discover',
		data(){
			return {
				discoverList:[],	
			};
		},
		created(){
			this.init();			
		},
		methods:{
			goBack(){
				this.$router.back();
			},
			init(){
				this.discoverList = [[
					{
						iconClass:{"icon-sousuo": true},
						content: "朋友圈",
						pic: "http://img2.imgtn.bdimg.com/it/u=571610305,1553276443&fm=26&gp=0.jpg"	,
						isNew: false				
					},{
						iconClass:{"icon-sousuo": true},
						content: "朋友圈",
					},
					{
						iconClass:{"icon-sousuo": true},
						content: "朋友圈",
					},
					{
						iconClass:{"icon-sousuo": true},
						content: "朋友圈",
					}],[
					{
						iconClass:{"icon-sousuo": true},
						content: "朋友圈",
						pic: "http://img2.imgtn.bdimg.com/it/u=571610305,1553276443&fm=26&gp=0.jpg",
						isNew: true					
					},{
						iconClass:{"icon-sousuo": true},
						content: "朋友圈",
					},
					{
						iconClass:{"icon-sousuo": true},
						content: "朋友圈",
					},
					{
						iconClass:{"icon-sousuo": true},
						content: "朋友圈",
					}]
				]
			}
		}

	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";
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
				color: red;							
				
				border-radius: 100%;
				text-align: center;
				font-weight: bold;				
				font-style: italic;
				/*animation: new 1s infinite alternate cubic-bezier(.42,0,0,1.51);*/
				position: relative;
				top: -0.3rem;
				left: 0;
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