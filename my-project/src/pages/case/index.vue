<template>
	<div>
		<div v-html="button" v-bind:class="btn" v-on:click="say('hi')">
			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				button: '<button>click me</button>',
				btn: 'btn',				
			}
		},
		methods:{
			say(a){
				alert(a+'我出来了');
			}
		}
	}
</script>