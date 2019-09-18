<template>	
		<div><div class="applet-recent" 
		v-if="appletList.length" 
		v-for="(section,index) in appletList" 
		:key="index">
			<p class="applet-recent-title">{{section.title}}</p>
			<ul class="applet-recent-list">
				<li class="applet-recent-item" 
					v-for="(item,k) in section.appletList"
					:key="k">
					<p class="applet-logo"><img :src="item.pic"></p>
					<p class="applet-name">{{item.name}}</p>
				</li>				
			</ul>
		</div>
		</div>
</template>
<!-- 问题：子组件chatList高度影响了 子组件applet，但是container并没有变化 -->
<!-- 原因，使用组件scroll自动生成了scroll-wrap且相对定位，导致子组件属性bottom相对与scroll-wrap -->
<!-- 解决 -->
<!-- 在父元素添加一层div标签，使用js设置高度为swiper.height也就是视口高度 -->
<script>
	// import MeScroll from 'base/scroll';
	export default{
		name: 'Applet',
		data(){
			return {
				appletList: [],	
			};
		},		
		components:{
			
		},
		created(){
			this.init()
		},
		methods:{
			init(){
				this.appletList = [{
					title: '最近使用',
					appletList:[{
						pic: 'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg',
						name: '无名小城'
					},
					{
						pic: 'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg',
						name: '无名小城'
					},
					{
						pic: 'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg',
						name: '无名小城'
					},
					{
						pic: 'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg',
						name: '无名小城'
					}]

				},{
					title: '我的小程序',
					appletList:[{
						pic: 'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg',
						name: '我的小程序'
					}]
				}]
			}	
		}

	}
</script>
<style lang="scss" scoped>
	@import "~assets/scss/mixins";

	.applet{
		width: 100%;
		height: 100%;
		overflow: hidden;
		
		.applet-logo{			
			width: 90%;
			padding-top: 90%;
			position: relative;			

			img{
				position: absolute;
				top: 0;
				width: 60%;
				height: 60%;
				left: 18%;
				top: 18%;
				border-radius: 50%;
			}
		}

		.applet-recent{
			width: 100%;			
			padding: 0 6%;
			
			margin: 0;

			&-title{
				font-size: 0.8em;
				/*line-height: 2.5em;*/
				color: #888;
				text-indent:2em;
				margin: 2em 0 0 0;
			}

			&-list{
				width: 100%;
				/*height: 100%;*/
				display: flex;	
				flex-wrap: wrap;
				justify-content: flex-start;
				/*align-items: flex-start;			*/
			}

			&-item{
				width: 25%;
				padding: 2%;
				@include flex-center(column);

			}
		}
	}
</style>