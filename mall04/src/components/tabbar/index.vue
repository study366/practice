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
						src: "/home",
						name: "首页",
						iconfont: 'iconfont icon-shouye'
					},
						{
						src: "/category",
						name: "分类",
						iconfont: 'iconfont icon-leimupinleifenleileibie'
					},
						{
						src: "/cart",
						name: "购物车",
						iconfont: 'iconfont icon-gouwuche'
					},
						{
						src: "/product",
						name: "我的",
						iconfont: 'iconfont icon-gerenzhongxin'
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