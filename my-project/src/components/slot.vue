<template>
		<div>
			<h1>slot插槽</h1>
			<!-- 这里有slot 然后注册的标签内才可以写东西 -->
			<slot>
				
			</slot>
			<p>我是最底部</p>
			<slot name = "bottoms">
				
			</slot>	
		</div>
	</template>	