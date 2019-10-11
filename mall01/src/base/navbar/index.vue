<template>
  <div class="mine-navbar">
  	<div class="mine-navbar-left" v-if="$slots.left">
  		<slot name="left"></slot>
  	</div>
	<div class="mine-navbar-center" v-if="$slots.center">
		<slot name="center"></slot>
	</div>
	<div class="mine-navbar-right" v-if="$slots.right">
		<slot name="right"></slot>
	</div>
	<div class="title" v-if="title">
		<span v-text="title"></span>
	</div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data () {
    return {
      
    }
  },
  props:{
  	title:{
  		type: String,
  		default: ''
  	}
  }
}
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .mine-navbar{
  	@include flex-between();
  	height:  50px;
  	background-color: #fff;

  	&-left{
  		margin-left: 10px;
  	}

  	&-center{
  		flex: 1;
  		margin: 0 10px;
   	}

   	&-right{
   		margin-right: 10px;   		 
   	}
	/*如果right是第一个*/
   	& > &-right:first-child{
   		position: absolute;
   		right: 0;
   	}

   	& .title{
		position: absolute;
		top: 0;
		bottom: 0;
		right: 20%;
		left: 20%;

		@include flex-center();

		& span{
			font-size: 18px;
			@include ellipsis();
			display: block;			
			line-height: 1.5em;
			width: 100%;
			text-align: center;
		}  		
   	}

  }
</style>
