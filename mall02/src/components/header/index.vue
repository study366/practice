<template>
	<me-navbar class="header" v-show="visible">
		<p slot="left" class="header-left">微信</p>
		<div slot="center" class="mask"  @click="popTabHide" v-show="popTabShow"></div>		
		<div slot="right" class="header-right" v-if="isShowHeaderRight">			
			<router-link to="/search">
					<i class="iconfont icon-sousuo"></i>
			</router-link>
				<div class="popTab-container">
					<i class="iconfont icon-gengduo" @click="popTab"></i>
					<div class="popTab" id="popTab" v-show="popTabShow" @click="popTabHide">
						<div class="popTab-box">
							<ul class="popTab-box-list">
								<li class="popTab-box-item" v-for="(item,index) in popList"
								:key="index">
									<router-link :to="item.linkTo" class="popTab-box-item">
										<i class="iconfont" :class="item.iconfontClass"></i>
										<p>{{item.content}}</p>
									</router-link>
								</li>
							</ul>
						</div>

					</div>
				</div>					
		</div> 
	</me-navbar>
</template>
<script>
	/*
	header 显示applet 时 ，右边消失
	点击 搜索 更多 图标分别进入 搜索 更多页面
	*/
	import MeNavbar from 'base/navbar';	
	export default {
	    name: 'CHeader',
	    components:{
	    	MeNavbar
	    },
	    data(){
	    	return{
	    		visible: true,
	    		isShowHeaderRight:true ,
	    		popTabShow: false,
	    	}
	    },
	    props:{
	    	closePopTab:{
	    		type: Boolean,	    		
	    	}
	    },
	    watch:{
	    	closePopTab(){
	    		this.popTabShow = false;
	    	}
	    },
	    created(){
	    	this.init();
	    	// this.test();
	    },
	    methods:{
	    	showHeaderRight(){
	    		this.isShowHeaderRight = true;
	    	},
	    	hiddenHeaderRight(){	    		
	    		this.isShowHeaderRight = false;
	    	},
	    	popTab(){
	    		this.popTabShow = true;
	    	},
	    	popTabHide(){
	    		console.log('我被点击了');
	    		this.popTabShow = false;
	    	},

	    	test(){
	    		let arr = [{
	    			title : "新增组织架构",
	    			isChecked : false
	    		}]
				let myThis = this; //保存this
				function check(item) {					
					let myObj = { //代替if判断
					    "新增组织架构": {
					    	name: "newOrgs",					    	
					    },
					    "编辑组织架构": {
					    	name: "editOrgs",					    	
					    },
					    "删除组织架构": {
					    	name: "deleteOrgs",					    	
					    } 
					}
					let resultObj = myObj[item.title]; //以item.title为key读取myObj 代替if判断
				   
				    if(!item.isChecked){ // 判断检测状态
				       	myThis[resultObj.name] = false; //读取返回对象result.name作为this的key 并赋值为false
				    }else{
				    	myThis[resultObj.name] = true; //读取返回对象result.name作为this的key 并赋值为true
				    }
				}				
				arr.map(check);
				console.log(this.newOrgs);
			},
	    	init(){	    	
	    		this.popList = [{
	    			linkTo: "/groupChat",
	    			iconfontClass: {"icon-richscan_icon":true},
	    			content: "New Chat"
	    		},{
	    			linkTo: "/groupChat",
	    			iconfontClass: {"icon-richscan_icon":true},
	    			content: "New Chat"
	    		},{
	    			linkTo: "/groupChat",
	    			iconfontClass: {"icon-richscan_icon":true},
	    			content: "New Chat"
	    		},{
	    			linkTo: "/groupChat",
	    			iconfontClass: {"icon-richscan_icon":true},
	    			content: "New Chat"
	    		},{
	    			linkTo: "/groupChat",
	    			iconfontClass: {"icon-richscan_icon":true},
	    			content: "New Chat"
	    		},{
	    			linkTo: "/groupChat",
	    			iconfontClass: {"icon-richscan_icon":true},
	    			content: "New Chat"
	    		},{
	    			linkTo: "/groupChat",
	    			iconfontClass: {"icon-richscan_icon":true},
	    			content: "New Chat"
	    		}]
	    	}
	    },
	    props:{	    	
	    },
	    watch:{
	    	showHeaderRight(){
	    		console.log('showHeaderRight');
	    	}
	    }
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";	

	/*.fade-enter-active,.fade-leave-active{
		transition: opacity .5s;
	}
	.fade-enter,.fade-leave-to{
		opacity: 0;
	}
	.fade-enter-to{
		opacity: 1;
	}*/
	a{
		height:100%;
		vertical-align: middle;
		line-height:50px;
	}
	.mask{
		background-color: rgba(50,50,50,0.3);
		width: 130%;
		height: 2000px;
		position: absolute;
		top: 0;
		left: -40px;
		margin: 0;
		z-index: $mask-z-index
	}
	.header{		
		font-size: 1.3em; 	
		color: #000;	
		&.mine-navbar{
			background-color: transparent;
			/*background-color: $header-bgc-translucent;*/
		}
		.header-left{
			text-indent: 2em;
			line-height: 50px;
		}
		.header-right{
			margin-right: 1em;
			height: 50px;
			@include flex-center();
			.iconfont{
				height: 100%;
				padding: 0.5em; 
			}
		}
		
		.iconfont{
			color: #000;
			font-size: 1em;

		}
	}
	.popTab-container{
		margin-left: 1em;
		position: relative;		
		
		.popTab:before{
				content:"";
				display: block;
				width: 0px;
				height: 0px;
				border: 10px solid pink;
				border-color: transparent transparent #555 transparent;			
				position: absolute;
				top: -19px;
				left: 120px;
		}
		.popTab{
			background-color: #555;			
			font-weight: 600;
			width: 150px;			
			position: absolute;
			left: -116px;
			top: 35px;			
			border-radius: 10px;
			z-index: $mask-z-index;

			
			
			.popTab-box{
				width: 130px;
				margin: 0 auto;

				&-item{
					@include flex-center();
					justify-content: flex-start;
					line-height: 1.5em;
					color: #fff
				}
			}


			.iconfont{
				color: #fff;
			}
		}
	}
	
</style>