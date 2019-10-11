<template>
	<div class="loading" :class="{'mine-loading-inline': inline}">
		<span class="mine-loading-indicator"  v-if="indicator">
			<slot> <img src="./loading.gif"></slot>
		</span>
		<span class="mine-loading-text" v-if="loadingText">
			{{loadingText}}
		</span>
	</div>
</template>

<script>
	export default{
		name: 'MeLoading',
		data(){
			return {
				loadingText: this.text
			}
		},
		props:{
			indicator:{
				type: String,
				default: 'on',
				validator(value){
					return ['on', 'off'].indexOf(value) > -1;
				}
			},
			text:{
				type: String,
				default: '加载中...',
			},
			inline:{
				type: Boolean,
				default: true
			}
		},
		watch:{
			text(text){
				this.loadingText = text;
			}
		},
		methods:{
			setText(text){
				this.loadingText = text;
			}
		}
	}
</script>


<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .loading{
  	overflow: hidden;
  	width: 100%;
  	height: 100%;
  	background-color: #fff;
  	@include flex-center(column);

  	&.mine-loading-inline{
  		@include flex-center();
  	}
	
  	.mine-loading-indicator{
	
  	}

	.mine-loading-text{

	}

  }

</style>
