<template>
	<div class="chats">	    
    	<div class="g-content-container">
	      	<me-scroll class="chats-box"
			@scroll="showAppletList"
			>
			<!-- 添加一个div，因为自定义标签无法获取style -->
				<div class="applet"  ref="applet">
					<Applet></Applet>
				</div>
				<chat-list></chat-list>				
			</me-scroll>
   		</div>
  	</div>
</template>
<!-- 试图获取一个自定义组件的style -->
<!-- 失败 -->
<!-- 不能获取自定义组件的style -->
<script>
	import MeScroll from 'base/scroll';	
	import Applet from './applet';
	// import Search from './search';
	import ChatList from './chatlist';

	export default{
		name: 'Chats',
		data(){
			return {
				showApplet: false,
				hasInit: false,							
			};
		},
		created(){	

		},
		components:{
			MeScroll,
			Applet,
			ChatList,			
			// Search
		},
		methods:{
			showAppletList(translate,swiper){				
				/*
				***applet页面高度初始化，  因为最初的高度相对于swiper-wrapper，与设计不符合
				***因此在加载前偷偷获取swiper.height赋值给applet 
				***/ 
				if(!this.hasInit){
					this.$refs.applet.style.height = swiper.height + 'px';
					// this.$refs.applet.style.bottom = swiper.height + 'px';
					this.hasInit = true;
					console.log(this.$refs.applet.style);
				}
				/**
				***显示applet
				***
				***/		
				if(translate > swiper.height / 6){					
											
					console.log('下拉超过1/4');					
					swiper.setTransition(swiper.params.speed);//设置回弹速度
					swiper.setTranslate(swiper.height); //设置回弹位置					
					swiper.params.virtualTranslate = true;//禁止回弹
					this.showApplet = true;
					console.log('pleaeHideHeader');
					this.$emit('pleaeHideHeader');					
				}
				/**
				***显示applet之后
				***上拉复位
				***/
				if(this.showApplet)	{
					console.log(translate)	;				
					if(translate < -50){
						swiper.params.virtualTranslate = false;//允许回弹
						this.showApplet = false;

						this.$emit('pleaeShowHeader');						
						swiper.setTransition(200);//设置回弹速度
						swiper.setTranslate(0); //设置回弹位置
						swiper.params.virtualTranslate = true;//禁止回弹

						setTimeout(() =>{
							swiper.params.virtualTranslate = false;//允许回弹
						},500)	
					}
				}		
			},	
		},	
	}
</script>
<style lang="scss" scoped>
	img,a{
		width: 100%;
		height: 100%;
	}
	.chats{
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	.chats-box{
		width: 100%;		
		background-color: #fff;
		position: relative;
	}
	.applet{
		width: 100%;		
		position: absolute;	
		bottom: 100%;		
		background-color: #eee;
	}

	
	
	.chat-load-more{
		width: 100%;
		height: 100%;
		position: absolute;		
		top: 100%;
		background-color: #eee;
	}
</style>