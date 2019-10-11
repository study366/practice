<template>
	<div>
		<div class="home-page">
			<!-- 通过标签调用 -->
			<v-header></v-header>
			<ul class="nav">
				<li v-for = "item in arrList">				
					<img v-bind:src="item.imgUrl">
					<span>{{item.name}}</span>
				</li>
			</ul>
			<v-course :arryList="array"></v-course>
			<v-footer :arryList="footerArray"></v-footer>
		</div>
		

	</div>
</template>
<style>
	.home-page{
		height: 44px;
	}
	.nav{
		height: 100px;
		padding-top: 44px;
		background: #F3F5F7;
	}
	.nav li{
		height: 100px;
		font-size: 14px;
		line-height: 40px;
		text-align: center;
		
		float: left;
	}
	.nav li img{
		width: 32px;
		height: 32px;
		display: block;
		padding-top: 20px;
		padding-left: 32px;
		padding-right: 28px;
		

	}
</style>
<script>
	// 组件引入
	import Header from "@/components/header/"
	import Course from "@/components/course/"
	import Btn from "@/components/btn/"
	import Footer from "@/components/footer/"
	export default{
		data(){
			return{
				arrList:[],
				array:[],
				footerArray:[]

			}
		},
		mounted(){
			this.arrList = [{
					imgUrl: require('../assets/web.png'),
					name: '前端开发'
				},{
					imgUrl: require('../assets/webservice.png'),
					name: '后端开发'
				},{
					imgUrl: require('../assets/phone.png'),
					name: '移动开发'
				},{
					imgUrl: require('../assets/data.png'),
					name: '数据库'
			}]

			this.array = [{
				imgUrl: require('../assets/course2.jpg'),
				title: '实例妙解Sed和Awk的秘密',
				content: '中级 2w人在学'
			},{
				imgUrl: require('../assets/course3.jpg'),
				title: '实例妙解Sed和Awk的秘密',
				content: '中级 2w人在学'
			},{
				imgUrl: require('../assets/course4.jpg'),
				title: '实例妙解Sed和Awk的秘密',
				content: '中级 2w人在学'
			},{
				imgUrl: require('../assets/course5.jpg'),
				title: '实例妙解Sed和Awk的秘密',
				content: '中级 2w人在学'
			},{
				imgUrl: require('../assets/course6.jpg'),
				title: '实例妙解Sed和Awk的秘密',
				content: '中级 2w人在学'
			},{
				imgUrl: require('../assets/course7.jpg'),
				title: '实例妙解Sed和Awk的秘密',
				content: '中级 2w人在学'
			},{
				imgUrl: require('../assets/course6.jpg'),
				title: '实例妙解Sed和Awk的秘密',
				content: '中级 2w人在学'
			}],

			this.footerArray = [{
				imgUrl: require('../assets/home1.png'),
				msg: '首页'
			},
			{
				imgUrl: require('../assets/find.png'),
				msg: '发现'
			},
			{
				imgUrl: require('../assets/download.png'),
				msg: '下载'
			},
			{
				imgUrl: require('../assets/my.png'),
				msg: '我的'
			},]				
		},
		// 组件注册
		components:{
			'v-header': Header,
			'v-course': Course,
			'c-btn': Btn,
			'v-footer': Footer
		}
	}
</script>