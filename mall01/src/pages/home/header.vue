<template>  
	<me-navbar class="header" title="标题区域" v-show="visible">
		<i class="iconfont icon-scan" slot="left"></i>
		<div slot="center">搜索框</div>
		<i class="iconfont icon-msg" slot="right"></i>
	</me-navbar>	
</template>
<script>
	import MeNavbar from 'base/navbar';	
	export default {
	  name: 'meheader',
	  data () {
	    return {
	      visible:true
	    }
	  },
	  components:{
	  	MeNavbar	  
	  },
	  methods:{
	  	show(){
	  		this.visible = true;
	  	},
	  	hide(){
	  		this.visible = false;
	  	}
	  },
	}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header{
  	&.mine-navbar{
  		background-color: transparent ;
  		/*background-color: $header-bgc-translucent;*/
  	}
  	&.backgroundRed{
  		background-color: red ;
  	}
  	

  	.iconfont{
  		color: $icon-color-default;
  		font-size: $icon-font-size;
  	}
  }
</style>
