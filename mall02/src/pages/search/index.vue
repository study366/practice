<template>
	<div class="search">
		<div>
				<p>1</p><p>2</p><p>3</p>
		</div>
		<div class="search">
	    {{contactData}}
	  	</div>
	  	<div>按钮</div>
	  	<button @click="change" style="width: 100px;line-height: 20px;background: pink">按钮</button>
	</div>
</template>

<script>
	export default{
		name: 'Search',
		data(){
			return {
				contactData: '110'		
			};
		},
		created(){	

		},
		components:{
			
		},
		methods:{
			change(){
				console.log('我被点击了');
				this.contactData = this.$store.state.count;

				// this.$store.dispatch('inc',1000);
				this.contactData = this.$store.state.contactData;
				console.log(this.contactData);
			}
		}
	}
</script>
<style lang="scss" scoped>
	
</style>