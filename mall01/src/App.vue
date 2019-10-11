<template>
	<!-- 父容器 -->
  <div id="app" class="g-container">  
  	<!-- 位置容器  -->
  	<div class="g-view-container">
  		<!-- 路由显示处 -->
  		<router-view></router-view>
  	</div> 
  	<!-- 位置容器  -->	
  	<div class="g-footer-container">
  		<c-tabbar></c-tabbar>
  	</div>
  </div>
</template>

<script>
	import CTabbar from 'components/tabbar';

	export default {
	  name: 'App',
	  components:{
	  	CTabbar
	  }
	}
</script>

<style>

</style>
