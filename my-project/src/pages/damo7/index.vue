<template>
	<div>
		<div>列表渲染</div>
		<div>------------</div>
		<!-- 写法一   数组只拿值 -->
		<ul id="example-1">
			<!-- 循环执行 将 items 中的item 赋值给 li -->
			<li v-for= "item in items">
				{{ item.message}}
			</li>
		</ul>
		<!-- 写法二  拿值还拿索引-->
		<ul id="example-2">
			<!-- 循环执行 将 items 中的item 赋值给 li -->
			<li v-for= "(item,index) in items">
				{{index}}-{{ item.message}}
			</li>
		</ul>
		<!-- 写法三  对象的渲染-->
		<ul id="example-3">
			<!-- 循环执行 -->
			<li v-for= "(value,key) in object">
				{{ key }}: {{ value }}
			</li>
		</ul>
	</div>

</template>
<script>
	export default{
		data(){
			return {
				items:[
					{message: 'foo'},
					{message: 'bar'}
				],
				object:{
					name : '张三',
					age : '23',
					sex : 'male'
				} 
			}
		}
	}
</script>