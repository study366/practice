<template>
	<me-scroll class="sidebar" >
		<ul class="sidebar-list">
			<li class="sidebar-item" :class="{'sidebar-item-active': item.id === curId }"  v-for="(item, index) in items" :key="index" @click="switchTab(item.id)">{{item.name}}</li>
		</ul>
	</me-scroll>
</template>
<script>
	import MeScroll from 'base/scroll';
	import {categoryNames} from './config';	
	export default{
		name: 'sidebar',
		data(){
			return {
				false: false,
				curId: ''
			}
		},
		components:{
			MeScroll,
		},
		created(){
			this.init();
			this.switchTab(categoryNames[0].id);
			// console.log(this.sidebarItem);
		},
		
		methods:{
			init(){
				this.items = categoryNames;
			},
			switchTab(id){
				if(this.curId === id){
					return
				}
				this.curId = id;
				this.$emit('switch-tab',id);
			}
		}

	}
</script>
<style lang="scss" scoped>
	.sidebar-list{
		background-color: #fff;
	}
	.sidebar-item{
		height: 46px;
		font-size: 14px;
		font-weight: bold;
		/*align-items: center;*/
		/*justify-content: center;*/
		text-align: center;
		line-height: 46px;
		/*background-color: #fff;*/
		box-shadow: 0 2px 2px #eee;
	}
	.sidebar-item:hover,.sidebar-item-active{
		background-color: #eee;
		color: red;
	}

</style>