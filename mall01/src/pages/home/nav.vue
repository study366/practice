<template>  
	<nav class="nav">
		<ul class="nav-list">
			<li v-for="(item, index) in nav" :key="index" class="nav-item">
				<a :href="item.linkUrl">
					<img :src="item.picUrl">
					<span>{{item.text}}</span>
				</a>				
			</li>
		</ul>
	</nav>
</template>
<script>
	import {navItems} from './config.js';

	export default {
	  name: 'MeNav',
	  data () {
	    return {	    	
	    }
	  },
	  components:{
	  	
	  },
	  created(){
	  	this.nav = navItems;
	  	console.log(this.nav)
	  },
	  methods:{

	  },
	  props:{
	  	
	  }  
	}
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
	
    .nav{
		
		 .nav-list{
		 	padding-top: 10px;
		 	display: flex;
		 	flex-wrap: wrap;
		 }
		 .nav-item{

			width: 20%;
			margin-bottom: 10px;
			
			a{

				@include flex-center(column);
			}
			img{
				width: 70%;
			}
		 }
    }
	
</style>
