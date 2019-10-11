<template>
	<swiper :options="swiperOptions" ref="swiper">
		<div class="mine-scroll-pull-down" v-if="pullDown">
			<me-loading :text="pullDownText" inline ref="pullDownLoading"></me-loading>	
		</div>
		<swiper-slide>
			<slot>
				
			</slot>
		</swiper-slide>
		<div class="swiper-scrollbar" v-if="scrollbars" slot="scrollbar"></div>
	</swiper>
	
</template>
<script>
	import { swiper,swiperSlide} from "vue-awesome-swiper";
	import MeLoading from "base/loading";

	export default{
		name:'cart',
		data(){
			return{
				pulling: false,
				pullDownText:'刷新前',						
				swiperOptions:{
					direction:"vertical",
					slidesPerView:'auto',
					freeMode:true,
					setWrapperSize:true,
					scrollbars:{
						el: this.scrollbars ? '.swiper-scrollbar' : null,
						hide:true
					},
					on:{
						sliderMove: this.scroll,
						touchEnd: this.touchEnd
					}
				}
			}
		}, 
		
		components:{
			swiper,
			swiperSlide,
			MeLoading
		},
		props:{
			scrollbars:{
				type:Boolean,
				default:true
			},
			data:{
				type:[Array,Object]
			},
			pullDown:{
				type:Boolean,
				default:false
			}
		},
		watch:{
			data(){
				this.updata();
			}
		},
		methods:{
			updata(){
				this.$refs.swiper.updata;
			},

			scroll(){
				const swiper = this.$refs.swiper.swiper;

				if(swiper.translate > 0){
					if(!this.pullDown){
						return;
					}
					if(swiper.translate > 100){
						// 直接改变会闪动
						// this.pullDownText = '我刷新了';
						this.$refs.pullDownLoading.setText('我刷新了');
					}else{
						this.$refs.pullDownLoading.setText('在拉就刷新了');
					}
				}
			},
			touchEnd(){
				const swiper = this.$refs.swiper.swiper;

				if(swiper.translate > 0){
					if(!this.pullDown){
						return;
					}
					if(swiper.translate > 100){
						this.pulling = true;
						swiper.allowTouchMove = false; //禁止触摸
						swiper.setTransition(swiper.params.speed);//设置过渡速度
						swiper.setTranslate(100);// 回到100 这个位置
						swiper.params.virtualTranslate = true; //禁止回弹
						this.$refs.pullDownLoading.setText('加载中，');
						this.$emit('pull-down',this.pullDownEnd); //发送消息，并告诉人家执行完执行 pulldownend
					}					
				}
			},
			pullDownEnd(){
				const swiper = this.$refs.swiper.swiper;
				console.log('pullDownEnd执行');
				swiper.allowTouchMove = true //可以触摸
				swiper.setTransition(swiper.params.speed);//设置过渡速度
				this.pulling = false;
				swiper.params.virtualTranslate = false; //不禁止回弹
				this.$refs.pullDownLoading.setText('再拉我就加载了');		
				swiper.setTranslate(0);// 回到0 这个位置		
			}
			
		}
	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";	
	
	.swiper-container{
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
	.swiper-slide{
		height: auto;
	}
	.mine-scroll-pull-down{
		position: absolute;
		left: 0;
		bottom: 100%;
		width: 100%;
		height: 80px;
	}	
</style>