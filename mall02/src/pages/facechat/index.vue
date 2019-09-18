<template>
	 
    <div class="g-content-container facechats">
	    <me-navbar class="facechats-header">
	      		<div slot="left" class="facechats-header-left">
	      			<i class="iconfont icon-fanhui"></i>
	      			<p>张三</p>
	      			<i class="iconfont icon-erduo" v-if="whisper"></i>
	      		</div>
	      		<div slot="right" class="facechats-header-right">
	      			<i class="iconfont icon-gengduo" ></i>
	      		</div>
	   	</me-navbar>
	   	<me-scroll class="facechats-chat-panel"
	   	pulldown
	   	@pull-down="loadMore" 			
		>
			<ul class="chatList">
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-left">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left">
							我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-right">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-right">
							我是聊天内
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-left">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left">
							我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-right">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-right">
							我是聊天内
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-left">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left">
							我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-right">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-right">
							我是聊天内
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-left">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left">
							我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-right">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-right">
							我是聊天内
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-left">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left">
							我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-right">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-right">
							我是聊天内
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-left">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left">
							我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-right">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-right">
							我是聊天内
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-left">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left">
							我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-right">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-right">
							我是聊天内
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-left">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left">
							我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-right">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-right">
							我是聊天内
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-left">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-left">
							我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容我是聊天内容
						</p>
					</div>
				</li>
				<li class="chatItem">
					<div class="chatItem-box clear">
						<p class="chatItem-box-time">
							8月30日 下午14:41
						</p>
						<p class="chatItem-box-logo float-right">
							<img src="https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=4227738703,3793459464&fm=179&app=42&f=JPEG?w=121&h=121" alt="头像">
						</p>
						<p class="chatItem-box-content float-right">
							我是聊天内
						</p>
					</div>
				</li>
			</ul>				
		</me-scroll>
   	</div>
  	
</template>

<script>
	import MeNavbar from 'base/navbar';
	import MeScroll from 'base/scroll';
	

	export default{
		name: 'FaceChat',
		data(){
			return {
				whisper: false,							
			};
		},
		created(){	

		},
		components:{
			MeNavbar,
			MeScroll,
			
		},
		methods:{
			loadMore(fn){
				console.log('没得内容给你加载');
				setTimeout(fn, 1000);
				
			}
		}
	}
		
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";
	.g-content-container{
		position: relative;
	}
	.facechats-header{
		width: 100%;
		position: absolute;
		top: 0;
		z-index: 1000;
		background-color: #eee;
	}
	.facechats-header-left{
		@include flex-center();
		padding-left: 0.5em;

		.iconfont{
			font-size: 1em;
		}
		p{
			text-indent: 0.5em;
			font-weight: 600;
		}
		.icon-gengduo{
			display: block;
			width: 100%;
		}
	}
	.facechats-header-right{
		width: 50px;
		height: 50px;
		@include flex-center();
	}
	.facechats-chat-panel{
		background-image: url(http://img5.imgtn.bdimg.com/it/u=2491414336,3004378379&fm=26&gp=0.jpg),
			url(https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3707320584,4073816395&fm=26&gp=0.jp);
		background-size: cover;
		/*background-position: 10px 10px;*/

		.chatItem{
			width: 100%;
			margin-bottom: 0.5em;

			&-box{
				border:1px solid pink;
				line-height: 2em;				

				&-time{					
					text-align: center;
				}

				&-logo{
					width: 3rem;
					padding-bottom: 3rem;
					position: relative;


					img{
						position: absolute;
						width: 100%;
						height: 100%;
						text-align: center;
						border-radius: 5px;
						border:1px solid blue;
					}
				}				
				

				&-content{
					line-height: 2rem;
					/*text-indent: 1em;*/
					margin:0 1em 0 1em;
					padding: 0.5em;
					border:1px solid pink;
					background-color: #fff;
					max-width: 65%;
					border-radius: 10px;
					position: relative;
				}
				
				&-content:before{
					content: '';					
					display: block;
					border:0.3rem solid pink;
					border-color: transparent #fff transparent transparent;
					position: absolute;
					/*background-color: pink;*/
					left: -0.6rem;
					top: 1em;
				}

				.float-left{
					float: left;
				}
				.float-right{
					float: right;
				}
				.float-right:before{
					display: none;
				}				 
				.float-right.chatItem-box-content:after{
					content: '';
					width: 0;					
					display: block;
					border:0.3rem solid pink;
					border-color: transparent transparent transparent #fff;
					position: absolute;					
					right: -0.6rem;
					top: 1em;
				}
			}
				
		}
	}
	.clear:after{
		content: '';
		display: block;
		clear: both;
	}
</style>