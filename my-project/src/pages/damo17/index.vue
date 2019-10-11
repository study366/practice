<template>
	<div>
		<div>移动组件库Mint UI</div>
		<div>--=-=--=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</div>
		<mt-tabbar v-model="selected">
		  <mt-tab-item id="外卖">
		    <img slot="icon" src="http://pic.58pic.com/58pic/15/11/51/20E58PICNs4_1024.jpg">
		    外卖
		  </mt-tab-item>
		  <mt-tab-item id="订单">
		    <img slot="icon" src="http://pic.58pic.com/58pic/15/11/51/20E58PICNs4_1024.jpg">
		    订单
		  </mt-tab-item>
		  <mt-tab-item id="发现">
		    <img slot="icon" src="http://pic.58pic.com/58pic/15/11/51/20E58PICNs4_1024.jpg">
		    发现
		  </mt-tab-item>
		  <mt-tab-item id="我的">
		    <img slot="icon" src="http://pic.58pic.com/58pic/15/11/51/20E58PICNs4_1024.jpg">
		    我的
		  </mt-tab-item>
		</mt-tabbar>
	</div>
</template>
<script>
	// 导入 mint-ui 的 toast 插件
	// 导入 messagebox 插件
	import  Vue  from 'vue'
	import { Toast } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	import { Tabbar, TabItem } from 'mint-ui';
	Vue.component(Tabbar.name, Tabbar);
	Vue.component(TabItem.name, TabItem);
	export default{
		data(){
			return {

			}
		},
		mounted(){
			// 调用 toast 函数
			// 调用message 函数
			Toast('提示信息');
			MessageBox('操作成功');
		}
	}
</script>