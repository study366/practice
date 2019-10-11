<template>
	<div>
		<div>class 与 style绑定</div>
		<div>------</div>
		<!-- 根据 需求 动态增删calss -->
			<!-- 第一种绑定方式 -->
			<div v-bind:class="{'active': isActive, 'text-danger':hasError}">
				class1
			</div>
			<!-- 第二种绑定方式 -->
			<div :class="classObject" >class2</div>
			<!-- 第三种绑定方式 -->
			<div :class="['activeClass','errorClass']">class3</div>
		<!-- 根据需求动态更改 style -->
			<div v-bind:style="{'color': activeColor,'fontSize':fontSize +'px'}" >style1</div>
			<div v-bind:style="styleObject">style2</div>
			<div v-bind:style= "[baseStyle,fontStyle]">style3 同下</div>
			<div v-bind:style="[{'color': 'red'},{'fontSize':'20px'}]">style3</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				// class绑定数据 
				// 第一种绑定方式
				// 第2种绑定方式
				// 第3种绑定方式
				isActive: 999,
				hasError: false,

				classObject: {
					'active': true,
					'text-danger': true
				},

				activeClass:'active',
				errorClass :'text-danger',
				// style绑定数据 
				// 第一种绑定方式
				// 第2种绑定方式
				// 第3种绑定方式
				activeColor: 'pink',
				fontSize: 30,

				styleObject: {
					color: 'pink',
					fontSize: '25px',
				},

				baseStyle:{
					'color': 'red'
				},
				fontStyle:{
					'fontSize':'20px'
				}


			}
		},
		a(){
			this.activeClass = 'active555';
		}
	}
</script>