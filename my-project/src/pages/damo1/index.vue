<template>
	<div>
		hello world
	</div>
	
</template>
<script>
		export default{
			data(){
				return {

				}
			},
			created(){
				console.log('create');
			},			
			beforeCreate(){
				console.log('beforeCreate');
			},
			
			beforeMount(){
				console.log('beforeMount');
			},
			mounted(){
				console.log('mounted');
			}


		}
	</script>