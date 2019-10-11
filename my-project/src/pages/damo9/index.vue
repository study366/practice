<template>
	<div>
		<div>表单控件</div>
		<div>-----------------</div>
		<!-- 双向绑定输入数据 -->
		<input v-model = "message">
		<p>message is: {{message}}</p>
		<!-- 多个勾选框 -->
		<input type="checkbox" value="Jack" v-model = "checkedNames">
		<input type="checkbox" value="tom" v-model = "checkedNames">
		<input type="checkbox" value="kit" v-model = "checkedNames">
		<label for="jack">Jack</label><br>
		<span>checked names :{{ checkedNames }}</span>
		<!-- 选择列表 -->
		<div>
			<select v-model="selected">
				<option value="" disable>请选择</option>

				<option value="666">a</option>
				<option>b</option>
				<option>c</option>
			</select>
			<span>
				selected：{{ selected }}
			</span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				message:'123'*6,
				checkedNames: [],
				selected: '666'
			}
		},
		// 路由 获取上个页面传来的参数
		// this.$route.parsms.userId
		mounted(){
			console.log(this.$route.params)
			alert(this.$route.params);
		}
	}
</script>