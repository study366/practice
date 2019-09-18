<template>
	<div class="g-tabbar">
		<router-link class="g-tabbar-item" :to="item.src" v-for="(item,index) in tabber" :key="index">
			<i :class="item.iconfont"></i>
			{{item.name}}
		</router-link>
	</div>
</template>

<script>
	export default{
		name: 'C-tabbar',
		data(){
			return {
				tabber:[
					{
						src: "/chats",
						name: "微信",
						iconfont: 'iconfont icon-xiaoxi'
					},
						{
						src: "/contacts",
						name: "通讯录",
						iconfont: 'iconfont icon-gerenzhongxin'
					},
						{
						src: "/discover",
						name: "发现",
						iconfont: 'iconfont icon-faxian'
					},
						{
						src: "/me",
						name: "我",
						iconfont: 'iconfont icon-wo'
					},
				],			
			};
		},
		created(){			
		}

	}
</script>
<style lang="scss" scoped>	
	.router-link-active{
		color: red;
	}
</style>