<template>
	<div>
		<div>vue-resource请求</div>
		<div>----------------------</div>

	</div>
</template>
<script>
	export default{
		data(){
			return{

			}
		},
		mounted(){			
			// resource请求 写法  get
			this.$http.get('/someUrl.php').then(response => {
				console.log(response.body);
			},response => {

			});	

			// resource 请求 写法 post
			this.$http.post('/someUrl',{foo:'bar'}).then(response=>{
				console.log(response.body);
			},response=>{

			});

			// resource请求 写法 get  + 参数
			this.$http.get('/someUrl',{params:{foo:'bar'},headers:{'X-Custom': '...'}}).then(response=>{
				console.log(respose.body);
			},response => {
				// error callback
			});
		}
	}
</script>